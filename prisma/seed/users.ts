import { PrismaClient } from '@prisma/client';

export default async function seedUsers(prisma: PrismaClient) {
  await prisma.users.createMany({
    data: [
      { username: 'john_doe', email: 'john@example.com', password_hash: 'hashed_password', profile_info: {} },
      { username: 'jane_doe', email: 'jane@example.com', password_hash: 'hashed_password', profile_info: {} }
    ]
  });
}