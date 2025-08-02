import { PrismaClient } from '@prisma/client';

export default async function seedFeedback(prisma: PrismaClient) {
  await prisma.feedback.createMany({
    data: [
      { user_id: 1, company_name: 'Acme Corp', url: 'http://acme.com', purpose: 'Improve UX', technologies: 'React, Node', feedback_requested: 'Design feedback', beta_testers: true, additional_comments: 'Need detailed analysis' },
      { user_id: 2, company_name: 'Tech Innovators', url: 'http://techinnovators.com', purpose: 'Feature validation', technologies: 'Angular, Python', feedback_requested: 'Functional feedback', beta_testers: false, additional_comments: 'Focus on performance' }
    ]
  });
}