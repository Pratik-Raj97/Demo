import React from 'react';
import { BsFillRouterFill } from "react-icons/bs";

function Gateways() {
  return (
    <div className="gateways">
      <h1>Gateways</h1>
      <div className="gateway-card"><BsFillRouterFill />
        <h3>Demo</h3>
        <p>ID: 27fc3807835b</p>
        <p>30 Nodes</p>
        <p>Status: Active</p>
      </div>
      <div className="gateway-card"><BsFillRouterFill />
        <h3>Bengaluru</h3>
        <p>ID: a8032a6c74c8</p>
        <p>20 Nodes</p>
        <p>Status: Active</p>
      </div>
    </div>
  );
}

export default Gateways;
