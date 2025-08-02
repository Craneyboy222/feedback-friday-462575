import request from 'supertest';
import app from '../app';
describe('API Integration Tests', () => {
  test('POST /api/feedback should create feedback', async () => {
    const loginRes = await request(app).post('/api/login').send({username: 'testuser', password: 'password123'});
    const token = loginRes.body.token;
    const res = await request(app).post('/api/feedback').set('Authorization', `Bearer ${token}`).send({company_name: 'Test Co', url: 'http://test.com', feedback_requested: 'General feedback'});
    expect(res.statusCode).toBe(201);
  });
});