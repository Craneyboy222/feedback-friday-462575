import request from 'supertest';
import app from '../app';

describe('API Endpoints', () => {
  test('POST /api/register should create a new user', async () => {
    const response = await request(app)
      .post('/api/register')
      .send({ username: 'newuser', email: 'new@example.com', password: 'Password123' });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  test('POST /api/login should authenticate a user', async () => {
    const response = await request(app)
      .post('/api/login')
      .send({ email: 'test@example.com', password: 'Password123' });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
});