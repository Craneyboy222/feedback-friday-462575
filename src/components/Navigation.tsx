import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/" activeClassName="text-yellow-500" exact>Home</NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="text-yellow-500">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/feedback" activeClassName="text-yellow-500">Feedback</NavLink>
        </li>
        <li>
          <NavLink to="/admin" activeClassName="text-yellow-500">Admin</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
