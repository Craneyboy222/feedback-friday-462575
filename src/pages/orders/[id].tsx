import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchOrderById } from '../../api/orders';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorComponent from '../../components/ErrorComponent';

const OrderDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const { data, error, isLoading } = useQuery(['order', id], () => fetchOrderById(id), {
    enabled: !!id
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorComponent message={error.message} />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold">Order #{data.id}</h2>
        {/* Add more order details here */}
      </div>
    </div>
  );
};

export default OrderDetailPage;