import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { validateEmail, validatePassword } from '../../utils/validation';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { username, email, password } = req.body;

      if (!validateEmail(email) || !validatePassword(password) || !username) {
        return res.status(400).json({ error: 'Invalid input' });
      }

      const hashedPassword = bcrypt.hashSync(password, 10);

      const user = await prisma.user.create({
        data: {
          username,
          email,
          password_hash: hashedPassword,
        },
      });

      res.status(201).json({ id: user.id, username: user.username, email: user.email });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}