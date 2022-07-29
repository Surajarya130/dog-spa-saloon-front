import React from 'react'

import {  
  Sidebar, 
} from "../components";
import { Outlet } from 'react-router-dom';



const Dashboard = () => {
  return (
    <>
      <div id="mainBox">
        <div id="sideArea">
          <Sidebar />
        </div>

        <div id="contentArea">
          <Outlet />
        </div>

      </div>
    
    </>
  )
}

export default Dashboard