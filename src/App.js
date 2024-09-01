import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import UserPanel from './components/UserPanel';
import StockManagerPanel from './components/StockManagerPanel';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/user" element={<UserPanel />} />
        <Route path="/stock-manager" element={<StockManagerPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
