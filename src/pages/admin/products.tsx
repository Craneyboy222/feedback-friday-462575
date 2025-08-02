import React from 'react';
import { useQuery } from 'react-query';
import { fetchProducts } from '../../api/admin';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorComponent from '../../components/ErrorComponent';

const AdminProductsPage: React.FC = () => {
  const { data, error, isLoading } = useQuery('adminProducts', fetchProducts);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorComponent message={error.message} />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>
      <table className="w-full table-auto bg-white shadow rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2">Product Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product: any) => (
            <tr key={product.id} className="border-t">
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2">${product.price}</td>
              <td className="px-4 py-2">
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductsPage;