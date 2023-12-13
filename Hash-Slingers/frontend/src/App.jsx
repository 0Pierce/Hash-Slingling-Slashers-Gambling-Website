import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Homepage';
import AddFunds from './pages/Funds';
import Games from './pages/Games';
import Login from './pages/Login';
import Register from './pages/Register';
import "./styles/App.css";
import { BalanceProvider } from './BalanceContext'; 

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api/user").then(response => response.json()).then(
      data => { setBackendData(data); }
    );
  }, []);

  return (
    <BalanceProvider> {}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddFunds" element={<AddFunds />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </BalanceProvider>
  );
}

export default App;