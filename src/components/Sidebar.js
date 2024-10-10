import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>DYULABS</h1>

      <span><FaRegUser />  Pratik Raj</span>

      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/gateways">Gateways</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/nodes">Nodes</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;

