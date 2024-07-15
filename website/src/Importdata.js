import React, { useEffect, useState } from 'react';

function Importdata() {
    const DELIMITER = ',';
    const NEWLINE = '\n';

    const [selectedFile, setSelectedFile] = useState(null);
    const [parsedData, setParsedData] = useState([]);
    const [error, setError] = useState('');

    const handleLogout = () => {
        // Clear user authentication data (e.g., tokens)
        localStorage.removeItem('userToken'); // If you are using local storage
        // Clear any other user data as needed

        // Redirect to the login page
        // navigate('/login');
    };


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
        console.log("1- data ["+data+"]"); 
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
        // console.log("Parsed data ["+JSON.stringify(parsedData)+"]"); 
        event.preventDefault();

        if (!parseData.length) {
            setError('No data to upload');
            return;
        }

        for (var i = 0; i<parsedData.length; i++ ) { 
            var data  = parsedData[i]; 
            console.log("Send to backend ["+JSON.stringify(data)); 
            fetch('http://localhost:3061/upload/patient', {
                method: 'POST',
                mode: 'no-cors', 
                headers: {
                    'Content-Type': 'application/json',                
                },
                body: JSON.stringify(data),
            })
            // .then((response) => {
            //     // console.log(response.data); 
            //     if (!response.ok) {
            //         throw new Error('Failed to upload data');
            //     }
            //     return response.json();
            // })
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
    }
    
    
    
    return (
        <div>
               
               <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                <link rel="stylesheet" type="text/css" href="style.css" />
                <div className="container-fluid">
                <img src="/TUH%20logo.jpg" alt="TUH pic" className="img-fluid" style={{ width: '40px', height: '40px' }} />
                    <a className="navbar-brand" href="/homepage">Tallaght University Hospital</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="mynavbar">
                        <ul className="navbar-nav me-auto justify-content-center">
                            <li className="nav-item justify-content-center">
                                <a className="nav-link justify-content-center" href="/Homepage">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link justify-content-center" href="/importdata">Import Data</a>
                            </li>
                            
                        </ul>
                        <button onClick={handleLogout} className="btn btn-danger ms-2">Logout</button>
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
