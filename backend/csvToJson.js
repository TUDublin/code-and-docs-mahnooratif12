import csv from 'csv-parser';
import fs from "fs";
const results = [];

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    // Convert results array to JSON string
    const jsonData = JSON.stringify(results, null, 2);
    
    // Write JSON data to a new file
    fs.writeFile('data.json', jsonData, (err) => {
      if (err) throw err;
      console.log('JSON file has been saved.');
    });
  });
