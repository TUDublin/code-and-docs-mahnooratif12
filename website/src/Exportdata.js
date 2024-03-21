import React, { useEffect, useState } from 'react';

function FileList() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3060/files')
            .then(response => response.json())
            .then(data => setFiles(data))
            .catch(error => console.error('Error fetching files:', error));
    }, []);

    return (
        <div>
            
            <h2>List of Uploaded Files</h2>
            <ul>
                {files.map((file, index) => (
                    <li key={index}>{file}</li>
                ))}
            </ul>
        </div>
    );
}

export default FileList;
