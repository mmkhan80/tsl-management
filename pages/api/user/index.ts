import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@/generated/prisma/client';


import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // ✅ Handle GET: List all users
  if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          rights: true,
          createdAt: true,
        },
      });

      return res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  // ✅ Handle POST: Create new user
  if (req.method === 'POST') {
    const { name, email, password, rights } = req.body;

    if (!name || !email || !password || !rights) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      const existing = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          email: true,
        },
      });

      if (existing) {
        return res.status(409).json({ error: 'User with this email already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          rights,
        },
      });

      return res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        rights: user.rights,
      });
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  // ❌ Method not allowed
  return res.status(405).json({ error: 'Method not allowed' });
}
