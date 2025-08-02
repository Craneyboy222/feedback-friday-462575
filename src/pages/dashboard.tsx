import React from 'react';
import { useSelector } from 'react-redux';
import AdminPanel from '../components/AdminPanel';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorNotification from '../components/ErrorNotification';

const DashboardPage: React.FC = () => {
  const { user, loading, error } = useSelector((state) => state.auth);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorNotification message={error} />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {user?.isAdmin ? <AdminPanel /> : <p>Access restricted to admins only.</p>}
    </div>
  );
};

export default DashboardPage;