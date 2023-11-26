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
  


  export function LineChartTop3({Title, Values}) {

    const labels = Title
  
    
    const data = {
      labels,
      datasets: [
        {
          fill: true,
          label: 'Pledges',
          data: Values,
          borderColor: 'rgba(102, 66, 40, 1)',
          backgroundColor: 'rgba(209, 180, 140, 1)',
        },
      ],
    };
    
    return <Line options={options} data={data} />;
  }

  export default LineChartTop3