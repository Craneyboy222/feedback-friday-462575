import React from 'react';
import { useQuery } from 'react-query';
import { fetchCategories } from '../api/categories';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorComponent from '../components/ErrorComponent';
import Link from 'next/link';

const CategoriesPage: React.FC = () => {
  const { data, error, isLoading } = useQuery('categories', fetchCategories);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorComponent message={error.message} />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <ul className="list-disc list-inside">
        {data.map((category: any) => (
          <li key={category.id}>
            <Link href={`/categories/${category.id}`}>
              <a className="text-blue-500 hover:underline">{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;