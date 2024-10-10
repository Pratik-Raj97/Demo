import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Gateways from './pages/Gateways';
import History from './pages/History';
import Nodes from './pages/Nodes';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/gateways" element={<Gateways />} />
            <Route path="/history" element={<History />} />
            <Route path="/nodes" element={<Nodes/>}/>
            <Route path="/header" element={<Header/>}/>
          </Routes>
        </div>
      </div>
    </Router>
);
}

export default App;


//code by Pratik Raj Kundan
