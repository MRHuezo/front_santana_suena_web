import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarHome from '../Components/Navbar/NavbarHome'

function LayoutLogin() {
  return (
    <div>
      <NavbarHome />
      LayoutLogin
      <Outlet />
    </div>
  )
}

export default LayoutLogin