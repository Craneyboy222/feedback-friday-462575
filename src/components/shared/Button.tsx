import React from 'react';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
