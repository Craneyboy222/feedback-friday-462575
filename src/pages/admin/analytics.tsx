import React from 'react';
import { Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import { fetchAnalyticsData } from '../../api/admin';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorComponent from '../../components/ErrorComponent';

const AdminAnalyticsPage: React.FC = () => {
  const { data, error, isLoading } = useQuery('adminAnalytics', fetchAnalyticsData);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorComponent message={error.message} />;

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Sales',
        data: data.sales,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default AdminAnalyticsPage;