import React from 'react';

interface MetricProps {
  name: string;
  value: number;
  change: number;
}

const Metric: React.FC<MetricProps> = ({ name, value, change }) => {
  return (
    <div className="metric flex items-center justify-between py-2">
      <div className="text-sm font-medium">{name}</div>
      <div className="flex items-center">
        <span className="text-lg font-semibold">{value}</span>
        <span className={`ml-2 text-sm ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>{change}%</span>
      </div>
    </div>
  );
};

export default Metric;