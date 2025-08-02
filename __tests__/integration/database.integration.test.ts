import supertest from 'supertest';
import app from '../src/app';

describe('Database Integration Tests', () => {
  it('should register a new user', async () => {
    const response = await supertest(app)
      .post('/api/register')
      .send({
        username: 'newuser',
        email: 'newuser@example.com',
        password: 'password'
      });
    expect(response.status).toBe(201);
  });

  it('should authenticate an existing user', async () => {
    const response = await supertest(app)
      .post('/api/login')
      .send({
        email: 'newuser@example.com',
        password: 'password'
      });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should submit feedback', async () => {
    const response = await supertest(app)
      .post('/api/feedback')
      .send({
        userId: 1,
        companyName: 'Test Company',
        url: 'http://test.com',
        purpose: 'Testing',
        technologies: 'Node.js, React'
      });
    expect(response.status).toBe(201);
  });
});