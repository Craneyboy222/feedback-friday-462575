import prisma from '../lib/database';

export const createUser = async (username: string, email: string, passwordHash: string, profileInfo?: string) => {
  return prisma.user.create({
    data: {
      username,
      email,
      passwordHash,
      profileInfo
    }
  });
};

export const getUserById = async (id: number) => {
  return prisma.user.findUnique({
    where: { id }
  });
};

export const getUserByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: { email }
  });
};