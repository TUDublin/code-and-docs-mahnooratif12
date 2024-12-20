import React, { Suspense, useEffect } from "react"; // Add the comment here
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Homepage from "./Homepage";
import Importdata from "./Importdata";
import Forgetpassword from "./forgetpassword";


function App() {
   return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Homepage" element={<Homepage />}></Route>
          <Route path="/Importdata" element={<Importdata />}></Route>
          <Route path="/forgetpassword" element={<Forgetpassword />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;