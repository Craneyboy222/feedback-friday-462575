import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TextInput, TextArea, Button } from '../UI';

const profileSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  bio: z.string().max(500, 'Bio must be less than 500 characters').optional()
});

interface ProfileFormProps {
  onSubmit: (data: { username: string; email: string; bio?: string }) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(profileSchema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Profile Form">
      <TextInput
        label="Username"
        {...register('username')}
        error={errors.username?.message}
        aria-invalid={!!errors.username}
      />
      <TextInput
        label="Email"
        type="email"
        {...register('email')}
        error={errors.email?.message}
        aria-invalid={!!errors.email}
      />
      <TextArea
        label="Bio"
        {...register('bio')}
        error={errors.bio?.message}
        aria-invalid={!!errors.bio}
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Updating...' : 'Update Profile'}
      </Button>
    </form>
  );
};

export default ProfileForm;
