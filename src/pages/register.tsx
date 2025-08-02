import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/authActions';
import Input from '../components/Input';
import Button from '../components/Button';

const RegisterPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data: { username: string; email: string; password: string }) => {
    dispatch(registerUser(data.username, data.email, data.password))
      .then(() => alert('Registration successful'))
      .catch(err => console.error(err));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input 
          label="Username" 
          {...register('username', { required: 'Username is required' })} 
          error={errors.username?.message}
        />
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
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default RegisterPage;