// src/components/BarGraph.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarGraph = ({ data }) => {
  const labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4','Day 5','Day 6','Day 7']; // Example labels

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Food Count',
        data: data, // Data received as a prop
        backgroundColor: 'rgb(46, 134, 193 )',
        borderColor: 'rgba(46, 134, 193 )',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
  
    <div style={{height:'80%',width:'50%',marginLeft:'25%',marginBottom:'80%'}}>
          <Bar data={chartData} options={options} />    </div>
  )
};

export default BarGraph;
