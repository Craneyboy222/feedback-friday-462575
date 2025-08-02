import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'medium' }) => {
  const sizeClass = size === 'small' ? 'w-8 h-8' : size === 'large' ? 'w-16 h-16' : 'w-12 h-12';
  return <img src={src} alt={alt} className={`${sizeClass} rounded-full`} aria-label="User Avatar" />;
};

export default Avatar;
