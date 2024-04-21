// src/components/ShowDetails.js
import React, { useEffect, useState } from "react";
import * as Styles from "./styles";

const ShowDetails = ({ serverUrl }) => {
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${serverUrl}/api/shows/1`);
      const data = await response.json();
      setShow(data);
    };

    fetchData();
  }, [serverUrl]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div style={Styles.container}>
      <h2>{show.title}</h2>
      <p>Score: {formatScore(show.score)}</p>
    </div>
  );
};

export default ShowDetails;