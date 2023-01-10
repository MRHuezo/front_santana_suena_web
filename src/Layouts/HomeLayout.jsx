import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarHome from '../Components/Navbar/NavbarHome'

function HomeLayout() {
  return (
    <div>
      
      <NavbarHome />
      HomeLayout
      <Outlet />
      
    </div>
  )
}

export default HomeLayout