import React, { useEffect } from 'react';
import './style.css'; // Import the CSS file

function Importdata() {
    const DELIMITER = ',';
    const NEWLINE = '\n';

    useEffect(() => {
        const fileInput = document.getElementById('file');

        function handleChange(event) {
            if (!!fileInput.files && fileInput.files.length > 0) {
                parseCSV(fileInput.files[0]);
            }
        }

        fileInput.addEventListener('change', handleChange);

        return () => {
            fileInput.removeEventListener('change', handleChange);
        };
    }, []);

    function parseCSV(file) {
        if (!file || !FileReader) {
            return;
        }

        const reader = new FileReader();

        reader.onload = function (e) {
            toTable(e.target.result);
        };

        reader.readAsText(file);
    }

    function toTable(text) {
        const table = document.getElementById('table');

        if (!text || !table) {
            return;
        }

        // Clear Table
        table.innerHTML = '';

        const rows = text.split(NEWLINE);
        const header = rows.shift().trim().split(DELIMITER);

        const headerRow = document.createElement('tr');
        header.forEach((h) => {
            const th = document.createElement('th');
            th.textContent = h.trim();
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);

        rows.forEach((r) => {
            const cols = r.split(DELIMITER);
            const row = document.createElement('tr');

            cols.forEach((c) => {
                const td = document.createElement('td');
                td.textContent = c.trim();
                row.appendChild(td);
            });
            table.appendChild(row);
        });
    }

    return (
        <div>
            <title>Import Data</title>
            <body>
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
                                <a class="nav-link justify-content-center " href="./Exportdata">Export Data</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link justify-content-center " href="./Help">Help</a>
                            </li>
                            </ul>
                            <form class="d-flex">
                            <input class="form-control me-2" type="text" placeholder="Search"/>
                            <button class="btn btn-primary" type="button">Search</button>
                            </form>
                        </div>
                        </div>
                    </nav>
                </div>    
            </body>
            <h1 class="header">Import Data (CSV files only)</h1>
            {/* File Picker */}
            <input type="file" id="file"></input>

            {/* Display CSV file */}
            <table id="table"></table>
            <footer className="Justify-content-center ">
         <div className="text-white text-center bg-dark fixed-bottom Justify-content-center">
             TUH BLood Results 
         </div>
     </footer>
        </div>
      
    );
}

export default Importdata;
