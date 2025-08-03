import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@/generated/prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const {
        page = '1',
        limit = '10',
        classId,
        sectionId
      } = req.query;

      const pageNumber = parseInt(page as string, 10);
      const pageSize = parseInt(limit as string, 10);
      const skip = (pageNumber - 1) * pageSize;

      const where: any = {};
      if (classId) where.classId = Number(classId);
      if (sectionId) where.sectionId = Number(sectionId);

      const classSections = await prisma.classsection.findMany({
        where,
        skip,
        take: pageSize,
        include: {
          Renamedclass: true,
          section: true
        },
        orderBy: { id: 'asc' }
      });

      const total = await prisma.classsection.count({ where });

      return res.status(200).json({
        data: classSections,
        page: pageNumber,
        limit: pageSize,
        total,
        totalPages: Math.ceil(total / pageSize)
      });
    } catch (error: any) {
      console.error('Error fetching class sections:', error);
      return res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { classId, sectionId } = req.body;

      if (!classId || !sectionId) {
        return res.status(400).json({ error: 'classId and sectionId are required' });
      }

      // Check for duplicate
      const existing = await prisma.classsection.findUnique({
        where: {
          classId_sectionId: {
            classId: Number(classId),
            sectionId: Number(sectionId)
          }
        }
      });

      if (existing) {
        return res.status(409).json({ error: 'Class-section combination already exists' });
      }

      const created = await prisma.classsection.create({
        data: {
          classId: Number(classId),
          sectionId: Number(sectionId)
        }
      });

      return res.status(201).json(created);
    } catch (error: any) {
      console.error('Error creating class section:', error);
      return res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
