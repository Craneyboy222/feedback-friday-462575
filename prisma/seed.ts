import { PrismaClient } from '@prisma/client';
import seedUsers from './seed/users';
import seedFeedback from './seed/feedback';

const prisma = new PrismaClient();

async function main() {
  await seedUsers(prisma);
  await seedFeedback(prisma);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });