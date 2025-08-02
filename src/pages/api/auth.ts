import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { validateEmail, validatePassword } from '../../utils/validation';

const prisma = new PrismaClient();

const secret = process.env.JWT_SECRET || 'your_secret_key';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { email, password } = req.body;

      if (!validateEmail(email) || !validatePassword(password)) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }

      const user = await prisma.user.findUnique({ where: { email } });

      if (!user || !bcrypt.compareSync(password, user.password_hash)) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });

      res.status(200).json({ token });
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