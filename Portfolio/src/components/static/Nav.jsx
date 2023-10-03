import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
           <button
             className="navbar-toggler bg-secondary"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#navbarNavDropdown"
             aria-controls="navbarNavDropdown"
             aria-expanded="false"
             aria-label="Toggle navigation"
           >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item mx-3">
                <NavLink className="nav-link" exact to='/'>
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link" to='/about'>
                  Resume
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link" to='/portfolio'>
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link" to='/contact'>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
       </div>
    </nav>
  )
}

export default Nav