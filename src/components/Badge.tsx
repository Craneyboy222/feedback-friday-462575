import React from 'react';
import classNames from 'classnames';

interface BadgeProps {
  text: string;
  variant?: 'success' | 'warning' | 'error' | 'info';
}

const Badge: React.FC<BadgeProps> = ({ text, variant = 'info' }) => {
  const badgeClass = classNames('inline-block px-2 py-1 text-xs font-semibold', {
    'bg-green-200 text-green-800': variant === 'success',
    'bg-yellow-200 text-yellow-800': variant === 'warning',
    'bg-red-200 text-red-800': variant === 'error',
    'bg-blue-200 text-blue-800': variant === 'info'
  });

  return <span className={badgeClass} aria-label={`Badge: ${variant}`}>{text}</span>;
};

export default Badge;
