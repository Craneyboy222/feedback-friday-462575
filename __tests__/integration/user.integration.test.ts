import { app } from '../app';
import request from 'supertest';

describe('User Integration Tests', () => {
  test('should fetch and update user profile', async () => {
    const loginResponse = await request(app)
      .post('/api/login')
      .send({ email: 'test@example.com', password: 'Password123' });
    const token = loginResponse.body.token;

    const profileResponse = await request(app)
      .get('/api/profile')
      .set('Authorization', `Bearer ${token}`);
    expect(profileResponse.status).toBe(200);

    const updateResponse = await request(app)
      .put('/api/profile')
      .set('Authorization', `Bearer ${token}`)
      .send({ profile_info: 'Updated Info' });
    expect(updateResponse.status).toBe(200);
    expect(updateResponse.body.profile_info).toBe('Updated Info');
  });
});