import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('password123', 10);
  await prisma.user.create({
    data: {
      username: 'johndoe',
      email: 'johndoe@example.com',
      password_hash: passwordHash,
      profile_info: 'Sample profile info'
    }
  });

  await prisma.feedback.create({
    data: {
      user_id: 1,
      company_name: 'Tech Co',
      url: 'https://techco.com',
      purpose: 'Feedback on new feature',
      technologies: 'React, Node.js',
      feedback_requested: 'UI/UX improvements',
      beta_testers: true,
      additional_comments: 'Looking forward to your suggestions.',
      created_at: new Date()
    }
  });
  // Add more seed data as needed
}

main().catch(e => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
