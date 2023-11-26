"use client"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { values } from 'lodash';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {},
  animation: {
    duration: 2000,
    easing: 'easeInOutBounce',
  },
};

export function HorizontalBarChartAllPledges({Title, Values}) {

  const labels = Title

  const data = {
    labels,
    datasets: [
      {
        label: 'Pledges',
        data: Values,
        borderColor: 'rgba(102, 66, 40, 1)',
        backgroundColor: 'rgba(209, 180, 140, 1)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
