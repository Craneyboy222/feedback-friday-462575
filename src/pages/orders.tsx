import React from 'react';
import { useSelector } from 'react-redux';
import OrderList from '../components/OrderList';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorNotification from '../components/ErrorNotification';

const OrdersPage: React.FC = () => {
  const { orders, loading, error } = useSelector((state) => state.orders);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorNotification message={error} />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <OrderList orders={orders} />
    </div>
  );
};

export default OrdersPage;