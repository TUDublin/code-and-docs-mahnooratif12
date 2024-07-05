import React, { Suspense, useEffect } from "react"; // Add the comment here
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Homepage from "./Homepage";
import Importdata from "./Importdata";
import forgetpassword from "./forgetpassword";
// import Visualization from './Visualization';;

function App() {
   return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/Homepage" element={<Homepage />}></Route>
          {/* <Route path="/Visualization" element={<Visualization />}></Route> */}
          <Route path="/Importdata" element={<Importdata />}></Route>
          <Route path="/forgetpassword" element={<forgetpassword />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;