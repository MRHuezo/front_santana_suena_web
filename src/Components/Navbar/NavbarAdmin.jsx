import React from 'react'
import { Link } from 'react-router-dom'

const NavbarAdmin = () => {
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
              <Link to={`/admin/participantes`}>ADMIN - participantes</Link>
            </li>
            <li>
              <Link to={`/admin/patrocinadores`}>ADMIN - Patrocinadores</Link>
            </li>
            <li>
              <Link to={`/admin/publicaciones`}>ADMIN - publicaciones</Link>
            </li>
            <li>
              <Link to={`/admin/secciones`}>ADMIN - secciones de home (info pagina principal)</Link>
            </li>
          </ul>
        </nav>

        {/* other elements */}
      </div>
    </div>
  )
}

export default NavbarAdmin
