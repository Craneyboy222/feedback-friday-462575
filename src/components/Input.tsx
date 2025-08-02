import React from 'react';

interface InputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  ariaLabel: string;
}

const Input: React.FC<InputProps> = ({ type, name, value, onChange, placeholder, ariaLabel }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    aria-label={ariaLabel}
    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

export default Input;