import React from "react";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
// import Menu from "./Pages/Menu";
import Address from "./Pages/Address";
import Address2 from "./Pages/Address2";
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Activated from "./Pages/Activated";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path='/menu' element={<Menu/>} /> */}
        <Route path="/address" element={<Address />} />
        <Route path="/address2" element={<Address2 />} />
        <Route path="/activated" element={<Activated />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
