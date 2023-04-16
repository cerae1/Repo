import React from "react";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Menu from "./Pages/Menu";
import Address from "./Pages/Address";
import Address2 from "./Pages/Address2";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/address' element={<Address/>}/>
        <Route path='/address2' element={<Address2/>}/>
         
      </Routes>
    </BrowserRouter>
  );
}

export default App;
