import React from 'react'
import logo from '../../components/pictures/turners-homepage/turners-logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="Turners Logo" className="logo"></img>
        <ul className='link-list'>
          <li>Buy or Trade</li>
          <li>Sell a Vehicle</li>
          <li>Finance</li>
          <li>Insurance</li>
          <li>Auctions and Events</li>
          <li>Info & FAQ</li>
        </ul>
        <div className="account-buttons">
          <a href='#' className='my-account-button'>My Account</a>
          <a href='#' className='join-button'>Join</a>
        </div>
    </nav>
  )
}

export default Navbar