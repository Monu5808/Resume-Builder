import React from 'react'
import logo from '../Assets/download.jpg';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav-main'>
      <div className="left-col">
        <Link to="/" ><img src={logo}/></Link>
      </div>
      <div className="right-col">
        <ul>

        <Link to="/" ><li>Home</li></Link>
        <Link to="/about" ><li>About</li></Link>

          
          
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
