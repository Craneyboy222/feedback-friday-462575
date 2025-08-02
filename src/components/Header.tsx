import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Enterprise App</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
