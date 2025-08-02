import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  items: { label: string; path: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && <span className="mx-2">/</span>}
            <Link
              to={item.path}
              className="text-blue-600 hover:underline"
              aria-current={index === items.length - 1 ? 'page' : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
