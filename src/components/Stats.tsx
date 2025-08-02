import React from 'react';

interface StatsProps {
  label: string;
  value: number | string;
}

const Stats: React.FC<StatsProps> = ({ label, value }) => {
  return (
    <div className="stat-box p-4 bg-white shadow rounded">
      <div className="text-xl font-bold">{value}</div>
      <div className="text-gray-500">{label}</div>
    </div>
  );
};

export default Stats;