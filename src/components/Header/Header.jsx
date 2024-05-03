import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className="header">

        <img src={Logo} alt="" className='logo'/>

        <ul className='header-menu'>
        <li><a href="#home">Home</a></li>
        <li><a href="#programs">Programs</a></li>
        <li><a href="#reasons">Why Us</a></li>
        <li><a href="#plans">Plans</a></li>
        <li><a href="#testi">Testimonials</a></li>
        </ul>
    </div>
  )
}

export default Header
