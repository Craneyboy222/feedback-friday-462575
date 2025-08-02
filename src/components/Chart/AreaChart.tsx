import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { ChartData, ChartOptions } from 'chart.js';

interface AreaChartProps {
  data: ChartData<'line'>;
  options?: ChartOptions<'line'>;
}

const AreaChart: React.FC<AreaChartProps> = ({ data, options }) => {
  const defaultOptions: ChartOptions<'line'> = {
    ...options,
    elements: {
      line: {
        tension: 0.4,
        fill: true
      },
    },
  };

  return (
    <div role="img" aria-label="Area chart displaying data visualization">
      <Line data={data} options={defaultOptions} />
    </div>
  );
};

export default AreaChart;
