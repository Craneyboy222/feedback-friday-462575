import React from 'react';

interface IconProps {
  name: string;
  size?: 'small' | 'medium' | 'large';
}

const Icon: React.FC<IconProps> = ({ name, size = 'medium' }) => {
  const sizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-6 w-6',
    large: 'h-8 w-8',
  };

  return (
    <svg className={`icon-${name} ${sizeClasses[size]}`} aria-hidden="true">
      <use href={`#icon-${name}`} />
    </svg>
  );
};

export default Icon;
