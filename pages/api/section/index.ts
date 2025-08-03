import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@/generated/prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getSections(req, res);
    case 'POST':
      return createSection(req, res);
    default:
      return res.status(405).json({ error: 'Method Not Allowed' });
  }
}

// GET /api/section?page=1&limit=10&name=A
async function getSections(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { page = '1', limit = '10', name } = req.query;
    const pageNumber = parseInt(page as string);
    const pageSize = parseInt(limit as string);
    const skip = (pageNumber - 1) * pageSize;

    const where: any = {};
    if (name) {
      where.name = { contains: name as string, mode: 'insensitive' };
    }

    const [sections, total] = await Promise.all([
      prisma.section.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: { id: 'asc' }
      }),
      prisma.section.count({ where }),
    ]);

    res.status(200).json({
      data: sections,
      page: pageNumber,
      limit: pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error: any) {
    console.error('Error fetching sections:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}

// POST /api/section
// Body: { name }
async function createSection(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name } = req.body;

    if (!name || typeof name !== 'string') {
      return res.status(400).json({ error: 'Section name is required' });
    }

    const newSection = await prisma.section.create({
      data: { name }
    });

    res.status(201).json(newSection);
  } catch (error: any) {
    console.error('Error creating section:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
