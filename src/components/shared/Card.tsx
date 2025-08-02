import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`shadow-md p-4 rounded ${className}`}>{children}</div>;
};

export default Card;
