import React from 'react';
import { Line } from 'react-chartjs-2';

interface ChartProps {
  data: any;
  options?: any;
}

const Chart: React.FC<ChartProps> = ({ data, options }) => {
  return <Line data={data} options={options} />;
};

export default Chart;