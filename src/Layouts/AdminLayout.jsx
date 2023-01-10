import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarAdmin from '../Components/Navbar/NavbarAdmin'

function AdminLayout() {
  return (
    <div>
      <NavbarAdmin />
      AdminLayout
      <Outlet />
      
    </div>
  )
}

export default AdminLayout
