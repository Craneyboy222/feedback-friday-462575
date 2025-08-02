import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TextInput, Button } from '../UI';

const registerSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string().min(8, 'Password confirmation must match')
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

interface RegisterFormProps {
  onSubmit: (data: { username: string; email: string; password: string; confirmPassword: string }) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(registerSchema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Register Form">
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
      <TextInput
        label="Password"
        type="password"
        {...register('password')}
        error={errors.password?.message}
        aria-invalid={!!errors.password}
      />
      <TextInput
        label="Confirm Password"
        type="password"
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
        aria-invalid={!!errors.confirmPassword}
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Registering...' : 'Register'}
      </Button>
    </form>
  );
};

export default RegisterForm;
