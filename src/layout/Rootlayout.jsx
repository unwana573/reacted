import React from 'react'
import Navbar from '../compnents/navbar/navbar'
import { Outlet } from 'react-router-dom'

function Rootlayout() {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <Outlet /> 
        </div>
    </div>
  )
}

export default Rootlayout