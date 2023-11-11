"use client"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
  animation: {
    duration: 2000,
    easing: 'easeInOutBounce',
  },
};

const labels = ['6-12 yo','12-18 yo','18-24 yo','24-32 yo','32-38 yo','38-44 yo','44+ yo'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Pledges',
      data: ['100','150','260','300','250','200','375'],
      borderColor: 'rgba(102, 66, 40, 1)',
      backgroundColor: 'rgba(209, 180, 140, 1)',
    },
  ],
};

export function LineChartAge() {
  return <Line options={options} data={data} />;
}
