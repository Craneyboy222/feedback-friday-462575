import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { ChartData, ChartOptions } from 'chart.js';

interface PieChartProps {
  data: ChartData<'pie'>;
  options?: ChartOptions<'pie'>;
}

const PieChart: React.FC<PieChartProps> = ({ data, options }) => {
  return (
    <div role="img" aria-label="Pie chart displaying data visualization">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
