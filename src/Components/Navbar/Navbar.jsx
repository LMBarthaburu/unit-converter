import React from 'react'
import { TbArrowsLeftRight } from "react-icons/tb";
import './navbar.css'


function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-brand contenedor'>
        <TbArrowsLeftRight className='navbar-brand-logo'/>
        <p>unit converter</p>
      </div>
    </nav>
  )
}

export default Navbar