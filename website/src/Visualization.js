import { Chart } from 'chart.js';

export function createLineChart() {
  const ctx = document.getElementById('myChart').getContext('2d');
  // rest of the code
}

const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [0, 10, 5, 2, 20, 30, 45, 40, 50, 45, 35, 50],
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

function Visualization() {
  return (
    <div>
      <h1>Hello Visualization</h1>
      <canvas id="myChart" width="800" height="400"></canvas>
    </div>
  );
}

export default Visualization;