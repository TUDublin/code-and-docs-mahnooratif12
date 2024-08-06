// src/components/Shows.js
import React, { useEffect, useState, Suspense } from "react";
import * as Styles from "./styles";

const formatScore = (number) => {
  return Math.round(number * 100);
};

const Shows = () => {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234"); // Initialize serverUrl state

  useEffect(() => {
    const intervalId = setInterval(() => {
      setServerUrl((prevUrl) =>
        prevUrl === "https://localhost:1234"
         ? "https://localhost:5678"
          : "https://localhost:1234"
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={Styles.container}>
      <h1>Shows</h1>
      <p>Server URL: {serverUrl}</p>
      <Suspense fallback={<div>Loading...</div>}>
        <ShowDetails serverUrl={serverUrl} />
      </Suspense>
    </div>
  );
};

export default Shows;