import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-100 w-64 p-4 hidden lg:block">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul>
        <li className="mb-2"><a href="#" className="text-blue-500">Link 1</a></li>
        <li className="mb-2"><a href="#" className="text-blue-500">Link 2</a></li>
        <li className="mb-2"><a href="#" className="text-blue-500">Link 3</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
