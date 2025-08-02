import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from '../components/ProductList';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorNotification from '../components/ErrorNotification';

const ProductsPage: React.FC = () => {
  const { products, loading, error } = useSelector((state) => state.products);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorNotification message={error} />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;