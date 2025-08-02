import React from 'react';
import { Bar } from 'react-chartjs-2';

interface BarChartProps {
  data: any;
  options?: any;
}

const BarChart: React.FC<BarChartProps> = ({ data, options }) => {
  return (
    <div className="bar-chart">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;