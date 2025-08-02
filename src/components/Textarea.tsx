import React from 'react';

interface TextareaProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  ariaLabel: string;
}

const Textarea: React.FC<TextareaProps> = ({ name, value, onChange, placeholder, ariaLabel }) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    aria-label={ariaLabel}
    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    rows={4}
  />
);

export default Textarea;