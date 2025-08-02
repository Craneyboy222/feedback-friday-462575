import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchCategoryById } from '../../api/categories';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorComponent from '../../components/ErrorComponent';

const CategoryDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useQuery(['category', id], () => fetchCategoryById(id), {
    enabled: !!id
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorComponent message={error.message} />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Category Details</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold">{data.name}</h2>
        {/* Add more category details here */}
      </div>
    </div>
  );
};

export default CategoryDetailPage;