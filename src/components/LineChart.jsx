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
import { useEffect } from 'react';
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


export function LineChartAge({Title, Values}) {

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

  return <Line options={options} data={data} />;
}
