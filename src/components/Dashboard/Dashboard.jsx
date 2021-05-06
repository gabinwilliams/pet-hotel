import React, {useEffect} from 'react'
import './Dashboard.css';
import DashboardInput from '../DashboardInput/DashboardInput';
import DashboardTable from '../DashboardTable/DashboardTable';
import {useDispatch} from 'react-redux';



const Dashboard = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type:'FETCH_OWNER'});
  }, []);

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
