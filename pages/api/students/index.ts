import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@/generated/prisma/client';

const prisma = new PrismaClient();



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getStudents(req, res);
    case 'POST':
      return createStudent(req, res);
    default:
      return res.status(405).json({ error: 'Method Not Allowed' });
  }
}

// GET /api/students?page=1&limit=10&classSectionId=1&name=Ali&rollNumber=101
async function getStudents(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { page = '1', limit = '10', classSectionId, name, rollNumber } = req.query;

    const pageNumber = parseInt(page as string);
    const pageSize = parseInt(limit as string);
    const skip = (pageNumber - 1) * pageSize;

    const where: any = {};

    if (classSectionId) {
      where.classSectionId = parseInt(classSectionId as string);
    }

    if (name) {
      where.OR = [
        { firstName: { contains: name as string, mode: 'insensitive' } },
        { lastName: { contains: name as string, mode: 'insensitive' } }
      ];
    }

    if (rollNumber) {
      where.rollNumber = rollNumber as string;
    }

    const [students, total] = await Promise.all([
      prisma.student.findMany({
        where,
        include: {
          classsection: {
            include: {
              Renamedclass: true,
              section: true
            }
          }
        },
        skip,
        take: pageSize,
        orderBy: { createdAt: 'desc' }
      }),
      prisma.student.count({ where }),
    ]);

    return res.status(200).json({
      data: students,
      page: pageNumber,
      limit: pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error: any) {
    console.error('Error fetching students:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}

// POST /api/students
// JSON body: student fields
async function createStudent(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      firstName,
      lastName,
      gender,
      dateOfBirth,
      rollNumber,
      classSectionId,
      admissionDate,
      previousSchool,
      fatherNic,
      email,
      phone,
      address,
      religion,
      guardianName,
      guardianContact,
    } = req.body;

    if (!firstName || !lastName || !gender || !dateOfBirth || !classSectionId || !admissionDate) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newStudent = await prisma.student.create({
      data: {
        firstName,
        lastName,
        gender,
        dateOfBirth: new Date(dateOfBirth),
        rollNumber,
        classSectionId,
        admissionDate: new Date(admissionDate),
        previousSchool,
        fatherNic,
        email,
        phone,
        address,
        religion,
        guardianName,
        guardianContact,
      },
    });

    return res.status(201).json(newStudent);
  } catch (error: any) {
    console.error('Error creating student:', error);
    if (error.code === 'P2002' && error.meta?.target?.includes('rollNumber')) {
      return res.status(409).json({ error: 'Roll number already exists' });
    }
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
