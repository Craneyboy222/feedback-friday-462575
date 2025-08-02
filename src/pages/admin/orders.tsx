import React from 'react';
import { useQuery } from 'react-query';
import { fetchOrders } from '../../api/admin';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorComponent from '../../components/ErrorComponent';

const AdminOrdersPage: React.FC = () => {
  const { data, error, isLoading } = useQuery('adminOrders', fetchOrders);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorComponent message={error.message} />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Orders</h1>
      <table className="w-full table-auto bg-white shadow rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order: any) => (
            <tr key={order.id} className="border-t">
              <td className="px-4 py-2">{order.id}</td>
              <td className="px-4 py-2">{order.customer}</td>
              <td className="px-4 py-2">${order.total}</td>
              <td className="px-4 py-2">
                <button className="text-blue-500 hover:underline">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrdersPage;