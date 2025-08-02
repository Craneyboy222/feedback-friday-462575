import React from 'react';
import { Line } from 'react-chartjs-2';

interface LineChartProps {
  data: any;
  options?: any;
}

const LineChart: React.FC<LineChartProps> = ({ data, options }) => {
  return (
    <div className="line-chart">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;