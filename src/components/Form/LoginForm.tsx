import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TextInput, Button } from '../UI';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters')
});

interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Login Form">
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
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Logging in...' : 'Log In'}
      </Button>
    </form>
  );
};

export default LoginForm;
