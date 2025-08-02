import { register, login } from '../services/auth';

describe('Authentication Service', () => {
  test('should register a new user', async () => {
    const result = await register({ username: 'testuser', email: 'test@example.com', password: 'Password123' });
    expect(result).toHaveProperty('id');
    expect(result.username).toBe('testuser');
  });

  test('should login an existing user', async () => {
    const result = await login({ email: 'test@example.com', password: 'Password123' });
    expect(result).toHaveProperty('token');
  });
});