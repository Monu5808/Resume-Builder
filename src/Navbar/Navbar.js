import React from 'react'
import logo from '../Assets/download.jpg';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav-main'>
      <div className="left-col">
        <img src={logo}/>
      </div>
      <div className="right-col">
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
