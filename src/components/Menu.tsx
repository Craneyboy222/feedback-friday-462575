import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  label: string;
  path: string;
}

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <nav>
      <ul className="flex space-x-4" role="menubar">
        {items.map((item, index) => (
          <li key={index} role="none">
            <Link
              to={item.path}
              className="text-gray-700 hover:text-blue-500"
              role="menuitem"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
