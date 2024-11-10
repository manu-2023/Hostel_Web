import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ count }) => {
    const data = {
        labels: ['Present', 'Absent'],
        datasets: [
            {
                label: 'Attendance',
                data: [count >= 0 ? count : 0, 100 - (count >= 0 ? count : 0)],
                backgroundColor: ['rgb(240, 147, 25)', 'rgb(255, 227, 26)'],
                borderColor: ['rgb(240, 147, 25)', 'rgb(255, 227, 26)'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        // Display the tooltip only for the "Present" section
                        if (context.label === 'Present') {
                            return `${context.label}: ${context.raw}`;
                        }
                        // Return an empty string to hide the tooltip for "Absent"
                        return '';
                    },
                },
            },
        },
        cutout: '65%',
        animation: {
            duration: 2000,
            easing: 'easeOut',
        },
    };

    return (
        <div style={{ height: '300px', width: '250px', marginRight: 'auto' }}>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default PieChart;
