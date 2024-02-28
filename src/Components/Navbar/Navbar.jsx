import React from 'react'
import { TbArrowsLeftRight } from "react-icons/tb";
import './navbar.css'


function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <TbArrowsLeftRight className='navbar-brand-logo'/>
        <p>CONVERSOR</p>
      </div>
    </nav>
  )
}

export default Navbar