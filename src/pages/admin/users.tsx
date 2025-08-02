import React from 'react';
import { useQuery } from 'react-query';
import { fetchUsers } from '../../api/admin';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorComponent from '../../components/ErrorComponent';

const AdminUsersPage: React.FC = () => {
  const { data, error, isLoading } = useQuery('adminUsers', fetchUsers);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorComponent message={error.message} />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <table className="w-full table-auto bg-white shadow rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user: any) => (
            <tr key={user.id} className="border-t">
              <td className="px-4 py-2">{user.username}</td>
              <td className="px-4 py-2">{user.email}</td>
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

export default AdminUsersPage;