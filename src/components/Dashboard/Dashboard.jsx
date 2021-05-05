import React from 'react'
import './Dashboard.css';
import DashboardInput from '../DashboardInput/DashboardInput';
import DashboardTable from '../DashboardTable/DashboardTable';



const Dashboard = () => {



  return (
    <div>
      <h2 className="dashboardTitle">Add Pet</h2>
      <DashboardInput />
      <h2 className="dashboardTitle">History</h2>
      <DashboardTable />
    </div>
  )
}

export default Dashboard
