import React from 'react';
import {  Line, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { PiBatteryChargingVerticalBold } from "react-icons/pi";
import { TbAlertSquareFilled, } from "react-icons/tb";
import {  MdSensors } from "react-icons/md";
import { FaCircleNodes } from "react-icons/fa6";
Chart.register(...registerables);

function Dashboard() {
  const lineData = {
    labels: ['27 Aug', '28 Aug', '29 Aug', '30 Aug', '31 Aug', '01 Sep', '02 Sep', '03 Sep', '04 Sep', '05 Sep'],
    datasets: [
      {
        label: 'GW',
        data: [10, 20, 15, 40, 35, 50, 45, 60, 30, 20],
        borderColor: 'green',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'RN',
        data: [5, 10, 8, 20, 18, 25, 22, 30, 15, 10],
        borderColor: 'blue',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'SN',
        data: [2, 5, 3, 10, 8, 15, 12, 20, 10, 5],
        borderColor: 'yellow',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Alerts',
        data: [1, 0, 1, 2, 0, 1, 0, 2, 1, 0],
        borderColor: 'red',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Packet Transactions',
        },
      },
    },
  };

  // Data for Pie Chart
  const pieData = {
    labels: ['Human Tracking', 'Humidity', 'Tell Tale', 'Gas'],
    datasets: [
      {
        data: [55.6, 11.1, 11.1, 22.2],
        backgroundColor: ['green', 'blue', 'yellow', 'red'],
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
    },
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Dashboard - All Gateways</h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <div>
          <h3><FaCircleNodes />Number of RelayNodes</h3>
          <p>36</p>
        </div>
        <div>
          <h3><MdSensors />Number of SensorNodes</h3>
          <p>9</p>
        </div>
        <div>
          <h3><PiBatteryChargingVerticalBold />Average Battery Life</h3>
          <p>62.85</p>
        </div>
        <div>
          <h3><TbAlertSquareFilled />Alerts</h3>
          <p>0</p>
          </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: '60%' }}>
          <h4>Packet Transactions</h4>
          <Line data={lineData} options={lineOptions} />
        </div>

        <div style={{ width: '35%' }}>
          <h4>Sensor Types</h4>
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
