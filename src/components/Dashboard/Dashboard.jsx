import React, {useEffect} from 'react'
import './Dashboard.css';
import DashboardInput from '../DashboardInput/DashboardInput';
import DashboardTable from '../DashboardTable/DashboardTable';
import {useDispatch} from 'react-redux';



const Dashboard = () => {

  const dispatch = useDispatch()

  const getDispatch=()=>{
    dispatch({type:'FETCH_PETS'});
    dispatch({type:'FETCH_OWNER'});
  }

  useEffect(()=>{
    getDispatch()
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
