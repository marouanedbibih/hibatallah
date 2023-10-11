import React, { useState } from 'react';
import './header.css';
import {HiOutlineMenuAlt3,HiX} from 'react-icons/hi'

function Header() {
  const [isToggleOpen,setToggleOpen] =useState(false)
  return (
    <header className="header">
        <div className="logo">
            <h1>Hibat Allah</h1>
        </div>
        <a className='menuToggle'>
          <HiOutlineMenuAlt3/>
        </a>
        <nav className="navMenu">
            <ul>
                <li><a href="#" className='navLink active'>Home</a></li>
                <li><a href="#" className='navLink'>Cars</a></li>
                <li><a href="#" className='navLink'>Services</a></li>
                <li><a href="#" className='navLink'>Booking</a></li>
                <li><a href="#" className='navLink'>Contact</a></li>
                <li><a href="#" className='navLink'>Login</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header