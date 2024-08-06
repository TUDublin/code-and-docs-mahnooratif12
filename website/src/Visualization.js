import { Chart, LineController, LineElement, PointElement, LinearScale, Title, Legend } from 'chart.js';
import React, { useRef, useEffect } from 'react';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, Legend);

const Visualization = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const config = {
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
          plugins: {
            title: {
              display: true,
              text: 'Chart.js Line Chart',
            },
            legend: {
              position: 'top',
            },
          },
        },
      };

      new Chart(ctx, config);
    }
  }, []);

  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                        <div class="container-fluid">
                        <a class="navbar-brand" href="./homepage"><img src="TUH logo.jpg" alt="TUH Logo" class="img"/> </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-center" id="mynavbar">
                            <ul class="navbar-nav me-auto justify-content-center">
                            <li class="nav-item justify-content-center ">
                                <a class="nav-link justify-content-center " href="./Visualization">Visualization</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link justify-content-center " href="./Importdata">Import Data</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link justify-content-center " href="./Help">Help</a>
                            </li>
                            </ul>
                            <input type="text" id="searchInput" placeholder="Search..."></input>
                    <button class="search-button bg-primary">
                           <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        Search
                        </button>
                        </div>
                        </div>
                </nav>
      <h1>Hello Visualization</h1>
      <canvas id="myChart" ref={chartRef} width="800" height="400"></canvas>
   
        <footer className="Justify-content-center ">
          <div className="text-white text-center bg-dark fixed-bottom Justify-content-center">
            TUH BLood Results 
          </div>
        </footer>
      
    </div>
  );
};

export default Visualization;