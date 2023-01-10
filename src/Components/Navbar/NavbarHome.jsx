import React from 'react'
import { Link } from 'react-router-dom'

const NavbarHome = () => {
  return (
    <div>
      <div id="sidebar">
        {/* other elements */}

        <nav>
          <ul>
            <li>
              <Link to={`/`}>home</Link>
            </li>
            <li>
              <Link to={`/admin`}>admin</Link>
            </li>
            <li>
              <Link to={`/login`}>login</Link>
            </li>
            <li>
              <Link to={`/finalistas`}>HOME - finalistas</Link>
            </li>
            <li>
              <Link to={`/inscripcion`}>HOME - inscripcion</Link>
            </li>
            <li>
              <Link to={`/patrocinadores`}>HOME - patrocinadores</Link>
            </li>
          </ul>
        </nav>

        {/* other elements */}
      </div>
    </div>
  )
}

export default NavbarHome
