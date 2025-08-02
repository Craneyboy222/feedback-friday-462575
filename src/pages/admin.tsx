import React from 'react';
import Link from 'next/link';

const AdminDashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/admin/users">
          <a className="bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600">Manage Users</a>
        </Link>
        <Link href="/admin/products">
          <a className="bg-green-500 text-white p-4 rounded shadow hover:bg-green-600">Manage Products</a>
        </Link>
        <Link href="/admin/orders">
          <a className="bg-yellow-500 text-white p-4 rounded shadow hover:bg-yellow-600">Manage Orders</a>
        </Link>
        <Link href="/admin/analytics">
          <a className="bg-red-500 text-white p-4 rounded shadow hover:bg-red-600">View Analytics</a>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;