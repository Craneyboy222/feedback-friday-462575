import React from 'react';

interface InputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({ type, value, onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border p-2 ${className}`}
    />
  );
};

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}>
      {children}
    </button>
  );
};
