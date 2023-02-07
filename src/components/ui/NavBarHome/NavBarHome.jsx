import React from 'react'
import './navbarhome.css';
const NavBarHome =() => {

  return(
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
          <li>
            <a href="#">Services</a>
            <li>
              <a href="#">FAQ</a>
            </li>
          </li>
        </li>
      </ul>
    </nav>
  )
}

export default NavBarHome