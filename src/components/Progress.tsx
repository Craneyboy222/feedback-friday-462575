import React from 'react';

interface ProgressProps {
  value: number;
  max: number;
}

const Progress: React.FC<ProgressProps> = ({ value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full">
      <div
        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        style={{ width: `${percentage}%` }}
      >
        {`${Math.round(percentage)}%`}
      </div>
    </div>
  );
};

export default Progress;
