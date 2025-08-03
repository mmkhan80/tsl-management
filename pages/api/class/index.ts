import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@/generated/prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getClasses(req, res);
    case 'POST':
      return createClass(req, res);
    default:
      return res.status(405).json({ error: 'Method Not Allowed' });
  }
}

// GET /api/class?page=1&limit=10&name=Grade
async function getClasses(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { page = '1', limit = '10', name } = req.query;
    const pageNumber = parseInt(page as string);
    const pageSize = parseInt(limit as string);
    const skip = (pageNumber - 1) * pageSize;

    const where: any = {};
    if (name) {
      where.name = { contains: name as string, mode: 'insensitive' };
    }

    const [classes, total] = await Promise.all([
      prisma.renamedclass.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: { createdAt: 'desc' }
      }),
      prisma.renamedclass.count({ where }),
    ]);

    res.status(200).json({
      data: classes,
      page: pageNumber,
      limit: pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error: any) {
    console.error('Error fetching classes:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}

// POST /api/class
// Body: { name }
async function createClass(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name } = req.body;

    if (!name || typeof name !== 'string') {
      return res.status(400).json({ error: 'Class name is required' });
    }

    const newClass = await prisma.renamedclass.create({
      data: { name }
    });

    res.status(201).json(newClass);
  } catch (error: any) {
    console.error('Error creating class:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
