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

const labels = ['Digital Tyaag', 'Digital Samayik','Digital Navkarsi','Digital Dravya Limit', 'Digital Upavaas'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Pledges',
      data: [300,400,250,300,400],
      borderColor: 'rgba(102, 66, 40, 1)',
      backgroundColor: 'rgba(209, 180, 140, 1)',
    },
  ],
};

export function HorizontalBarChartAllPledges() {
  return <Bar options={options} data={data} />;
}
