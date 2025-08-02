import { getUserProfile, updateUserProfile } from '../services/user';

describe('User Service', () => {
  test('should fetch user profile', async () => {
    const userProfile = await getUserProfile(1);
    expect(userProfile).toHaveProperty('username');
    expect(userProfile).toHaveProperty('email');
  });

  test('should update user profile', async () => {
    const updatedProfile = await updateUserProfile(1, { profile_info: 'Updated Info' });
    expect(updatedProfile.profile_info).toBe('Updated Info');
  });
});