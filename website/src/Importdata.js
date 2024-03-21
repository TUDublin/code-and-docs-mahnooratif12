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
        event.preventDefault();
    
        if (!selectedFile) {
            setError('Please select a file');
            return;
        }
    
        const formData = new FormData();
        formData.append('excelFile', selectedFile);
    
        fetch('http://localhost:3060/upload', {
            method: 'POST',
            body: formData,
        })
        
        .then((response) => {
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
            <link rel='stylesheet.css' href='style.css'></link>
            
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
        </div>
        
    );
}

export default Importdata;
