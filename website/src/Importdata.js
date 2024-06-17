import React, { useEffect, useState } from 'react';

function Importdata() {
    const DELIMITER = ',';
    const NEWLINE = '\n';

    const [selectedFile, setSelectedFile] = useState(null);
    const [parsedData, setParsedData] = useState([]);
    const [error, setError] = useState('');

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
            const data = e.target.result;
            setParsedData(parseData(data));
        };

        reader.readAsText(file);
    }

    function parseData(data) {
        const rows = data.split(NEWLINE);
        const header = rows.shift().trim().split(DELIMITER);

        const parsedData = rows.map(row => {
            const cols = row.split(DELIMITER);
            if (cols.length !== header.length) {
                return null;
            }
            const rowData = {};
            header.forEach((h, index) => {
                rowData[h.trim()] = cols[index].trim();
            });
            return rowData;
        }).filter(row => row !== null);

        return parsedData;
    }

    function handleSubmit(event) {

        console.log("Upload data. "); 

        event.preventDefault();

        var data = [
            { 
                        "lab_no": 1, 
                        "ocs_no": 1, 
                        "mrn": "abc123", 
                        "forename": "a", 
                        "surname": "b", 
                        "dob": "1/1/2000", 
                        "gender": "Male",
                        "age": "34",
                        "address1": "c", 
                        "address2": "d", 
                        "address3": "e", 
                        "phone_no": 0
                    }
            ]; 
    
        if (!data.length) {
            setError('No data to upload');
            return;
        }
    
        fetch('http://localhost:3061/upload/patient', {
            method: 'POST',
            mode: 'no-cors', 
            headers: {
                'Content-Type': 'application/json',                
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            console.log(response.data); 
            if (!response.ok) {
                throw new Error('Failed to upload data');
            }
            return response.json();
        })
        .then((data) => {
            if (data.error) {
                setError(data.error);
            } else {
                console.log('Data uploaded successfully:', data);
                setError('');
                // Optionally, perform any additional actions after successful upload
            }
        })
        .catch((error) => {
            console.error('Error uploading data:', error);
            setError('Error uploading data: ' + error.message);
            // Optionally, handle the error and provide feedback to the user
        });
    }
    
    
    
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
            {/* <link rel='stylesheet.css' href='style.css'></link> */}
            <script src='navbar.js' defer></script>
            
            <h1>Import Data (CSV files only)</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" id="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
                <button type="submit">Upload</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <table>
                <thead>
                    <tr>
                        {Object.keys(parsedData[0] || {}).map(header => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {parsedData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {Object.values(row).map((value, columnIndex) => (
                                <td key={`${rowIndex}-${columnIndex}`}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

                <footer className="Justify-content-center ">
                    <div className="text-white text-center bg-dark fixed-bottom Justify-content-center">
                        TUH BLood Results 
                    </div>
                </footer>
        </div>
        
    );
}

export default Importdata;
