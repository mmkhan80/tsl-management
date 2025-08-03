import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@/generated/prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getAttendance(req, res);

    case 'POST':
      // Check if body is an array -> bulk mode
      if (Array.isArray(req.body)) {
        return markAttendanceBulk(req, res);
      } else {
        return markAttendance(req, res);
      }

    default:
      return res.status(405).json({ error: 'Method Not Allowed' });
  }
}

// GET /api/attendance?studentId=1&classSectionId=1&date=2025-07-21
// OR   /api/attendance?from=2025-07-01&to=2025-07-21
async function getAttendance(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { studentId, classSectionId, date, from, to } = req.query;

    const where: any = {};

    if (studentId) where.studentId = parseInt(studentId as string);
    if (classSectionId) where.classSectionId = parseInt(classSectionId as string);

    if (date) {
      const targetDate = new Date(date as string);
      where.adate = {
        gte: new Date(targetDate.setHours(0, 0, 0, 0)),
        lt: new Date(targetDate.setHours(23, 59, 59, 999)),
      };
    } else if (from && to) {
      where.adate = {
        gte: new Date(from as string),
        lte: new Date(to as string),
      };
    }

    const attendance = await prisma.attendance.findMany({
      where,
      include: {
        student: true,
        classsection: true,
      },
      orderBy: { adate: 'desc' },
    });

    return res.status(200).json(attendance);
  } catch (error: any) {
    console.error('Error fetching attendance:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}

// POST /api/attendance
// Body: { studentId, classSectionId, adate, status, updatedBy }
async function markAttendance(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { studentId, classSectionId, adate, status, updatedBy } = req.body;

    if (!studentId || !classSectionId || !adate || !status) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!['P', 'A', 'L', 'V'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status value' });
    }

    const existing = await prisma.attendance.findUnique({
      where: {
        studentId_adate: {
          studentId,
          adate: new Date(adate),
        },
      },
    });

    let result;
    if (existing) {
      // Update existing record
      result = await prisma.attendance.update({
        where: {
          studentId_adate: {
            studentId,
            adate: new Date(adate),
          },
        },
        data: {
          status,
          updatedBy,
          updatedDate: new Date(),
        },
      });
    } else {
      // Create new record
      result = await prisma.attendance.create({
        data: {
          studentId,
          classSectionId,
          adate: new Date(adate),
          status,
          updatedBy,
          updatedDate: new Date(),
        },
      });
    }

    return res.status(200).json(result);
  } catch (error: any) {
    console.error('Error marking attendance:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }

}


async function markAttendanceBulk(req: NextApiRequest, res: NextApiResponse) {
  try {
    const entries = req.body;

    if (!Array.isArray(entries) || entries.length === 0) {
      return res.status(400).json({ error: 'Request body must be a non-empty array' });
    }

    const allowedStatuses = ['P', 'A', 'L', 'V'];

    // Validate and sanitize entries
    const validEntries = entries.filter(e =>
      e.studentId &&
      e.classSectionId &&
      e.adate &&
      allowedStatuses.includes(e.status)
    ).map(e => ({
      ...e,
      adate: new Date(e.adate),
    }));

    if (validEntries.length === 0) {
      return res.status(400).json({ error: 'No valid attendance entries provided' });
    }

    // Create composite keys for lookup
    const keys = validEntries.map(({ studentId, adate }) => ({
      studentId,
      adate,
    }));

    // Fetch existing records in a single query
    const existingRecords = await prisma.attendance.findMany({
      where: {
        OR: keys.map(k => ({
          studentId: k.studentId,
          adate: k.adate,
        })),
      },
    });

    const existingMap = new Map(
      existingRecords.map(r => [`${r.studentId}-${r.adate.toISOString()}`, r])
    );

    // Build transaction operations
    const operations = validEntries.map(entry => {
      const key = `${entry.studentId}-${entry.adate.toISOString()}`;
      const isExisting = existingMap.has(key);

      if (isExisting) {
        return prisma.attendance.update({
          where: {
            studentId_adate: {
              studentId: entry.studentId,
              adate: entry.adate,
            },
          },
          data: {
            status: entry.status,
            updatedBy: entry.updatedBy,
            updatedDate: new Date(),
          },
        });
      } else {
        return prisma.attendance.create({
          data: {
            studentId: entry.studentId,
            classSectionId: entry.classSectionId,
            adate: entry.adate,
            status: entry.status,
            updatedBy: entry.updatedBy,
            updatedDate: new Date(),
          },
        });
      }
    });

    const result = await prisma.$transaction(operations);

    return res.status(200).json({ success: true, count: result.length, data: result });
  } catch (error: any) {
    console.error('Error in markAttendanceBulk:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}




