import { app } from '../app';
import request from 'supertest';

describe('Auth Integration Tests', () => {
  test('should register and authenticate a user', async () => {
    const registerResponse = await request(app)
      .post('/api/register')
      .send({ username: 'integrateduser', email: 'integrated@example.com', password: 'Password123' });
    expect(registerResponse.status).toBe(201);

    const loginResponse = await request(app)
      .post('/api/login')
      .send({ email: 'integrated@example.com', password: 'Password123' });
    expect(loginResponse.status).toBe(200);
    expect(loginResponse.body).toHaveProperty('token');
  });
});