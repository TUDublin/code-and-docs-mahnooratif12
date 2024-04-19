import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Homepage from "./Homepage";
import Importdata from "./Importdata";
import Help from "./Help";
import { createLineChart } from "./Visualization";

function App() {
  useEffect(() => {
    createLineChart();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/Homepage" element={<Homepage />}></Route>
          <Suspense fallback={<div>Loading chart...</div>}>
            <Route
              path="/Visualization"
              element={
                <div>
                  <h1>Hello Visualization</h1>
                  <canvas id="myChart" width="800" height="400"></canvas>
                </div>
              }
            ></Route>
          </Suspense>
          <Route path="/Importdata" element={<Importdata />}></Route>
          <Route path="/Help" element={<Help />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;