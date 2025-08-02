import { seedDatabase } from '../utils/seeding';

(async () => {
  try {
    await seedDatabase();
  } catch (error) {
    console.error('Error during database seeding', error);
  }
})();