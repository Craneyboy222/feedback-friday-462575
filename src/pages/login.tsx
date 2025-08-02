import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
import Input from '../components/Input';
import Button from '../components/Button';
import ErrorNotification from '../components/ErrorNotification';

const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = (data: { email: string; password: string }) => {
    dispatch(login(data.email, data.password))
      .then(() => router.push('/dashboard'))
      .catch(err => console.error(err));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input 
          label="Email" 
          type="email" 
          {...register('email', { required: 'Email is required' })} 
          error={errors.email?.message}
        />
        <Input 
          label="Password" 
          type="password" 
          {...register('password', { required: 'Password is required' })} 
          error={errors.password?.message}
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;