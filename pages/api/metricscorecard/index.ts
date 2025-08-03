import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@/generated/prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  try {
    if (method === 'GET') {
  const {
    studentId,
    classSectionId,
    metricId,
    groupId,
    page = '1',
    pageSize = '10',
  } = req.query;

  const pageNum = parseInt(page as string, 10);
  const take = parseInt(pageSize as string, 10);
  const skip = (pageNum - 1) * take;

  const where: any = {
    ...(studentId && { studentId: Number(studentId) }),
    ...(classSectionId && { classSectionId: Number(classSectionId) }),
    ...(metricId && { metricId: Number(metricId) }),
    ...(groupId && {
      metric: {
        groupId: Number(groupId),
      },
    }),
  };

  const [data, total] = await Promise.all([
    prisma.metricscorecard.findMany({
      where,
      include: {
        student: true,
        classsection: true,
        metric: {
          include: { group: true },
        },
      },
      orderBy: { adate: 'desc' },
      skip,
      take,
    }),
    prisma.metricscorecard.count({ where }),
  ]);

  return res.status(200).json({
    data,
    total,
    page: pageNum,
    pageSize: take,
    totalPages: Math.ceil(total / take),
  });
}



    if (method === 'POST') {
      const {
        studentId,
        classSectionId,
        adate,
        metricId,
        score,
        updatedBy,
      } = req.body;

      const created = await prisma.metricscorecard.create({
        data: {
          studentId,
          classSectionId,
          adate: new Date(adate),
          metricId,
          score,
          updatedBy,
        },
      });

      return res.status(201).json(created);
    }

    if (method === 'PUT') {
      const { id, ...updateData } = req.body;

      const updated = await prisma.metricscorecard.update({
        where: { id },
        data: updateData,
      });

      return res.status(200).json(updated);
    }

    if (method === 'DELETE') {
      const { id } = req.query;

      await prisma.metricscorecard.delete({
        where: { id: Number(id) },
      });

      return res.status(204).end();
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
  } catch (error: any) {
    console.error('Error in MetricsScorecard API:', error);
    return res.status(500).json({ error: error.message });
  }
}
