import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@/generated/prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getTeachers(req, res);
    case 'POST':
      return createTeacher(req, res);
    default:
      return res.status(405).json({ error: 'Method Not Allowed' });
  }
}

// GET /api/teacher?page=1&limit=10&name=Ali
async function getTeachers(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { page = '1', limit = '10', name, email } = req.query;
    const pageNumber = parseInt(page as string);
    const pageSize = parseInt(limit as string);
    const skip = (pageNumber - 1) * pageSize;

    const where: any = {};
    if (name) {
      where.name = { contains: name as string, mode: 'insensitive' };
    }
    if (email) {
      where.email = { contains: email as string, mode: 'insensitive' };
    }

    const [teachers, total] = await Promise.all([
      prisma.teacher.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: { id: 'desc' }
      }),
      prisma.teacher.count({ where }),
    ]);

    res.status(200).json({
      data: teachers,
      page: pageNumber,
      limit: pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error: any) {
    console.error('Error fetching teachers:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}

// POST /api/teacher
// Body: { name, email, phone?, nic?, subjectSpecialty?, hireDate? }
async function createTeacher(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, email, phone, nic, subjectSpecialty, hireDate } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const existing = await prisma.teacher.findUnique({ where: { email } });
    if (existing) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    const newTeacher = await prisma.teacher.create({
      data: {
        name,
        email,
        phone,
        nic,
        subjectSpecialty,
        hireDate: hireDate ? new Date(hireDate) : undefined,
      },
    });

    res.status(201).json(newTeacher);
  } catch (error: any) {
    console.error('Error creating teacher:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
