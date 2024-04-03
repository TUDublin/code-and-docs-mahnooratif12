import React from "react";
import Login from "./Login";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from "./Signup";
import Homepage from "./Homepage";
import Visualization from "./Visualization";
import Importdata from "./Importdata";
import Exportdata from "./Exportdata";
import Help from "./Help";


function App() {
  return(
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/Homepage" element={<Homepage />}></Route>
          <Route path="/Visualization" element={<Visualization />}></Route>
          <Route path="/Importdata" element={<Importdata />}></Route>
          <Route path="/Exportdata" element={<Exportdata />}></Route>
          <Route path="/Help" element={<Help />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App