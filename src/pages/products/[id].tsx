import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import ProductDetail from '../../components/ProductDetail';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorNotification from '../../components/ErrorNotification';

const ProductDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { product, loading, error } = useSelector((state) => state.productDetail);

  React.useEffect(() => {
    if (id) {
      // Dispatch action to fetch product detail if needed
    }
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorNotification message={error} />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Detail</h1>
      {product && <ProductDetail product={product} />}
    </div>
  );
};

export default ProductDetailPage;