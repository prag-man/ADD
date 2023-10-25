"use client"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
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
  
  const labels = ['Digital Tyaag', 'Digital Samayik', 'Digital Dravya'];
  
  export const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Pledges',
        data: ['400','350','500'],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  export function LineChartTop3() {
    return <Line options={options} data={data} />;
  }

  export default LineChartTop3