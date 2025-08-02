import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Card;
