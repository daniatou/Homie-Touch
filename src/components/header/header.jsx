import React from 'react'
import './header.css'
import logo from '../../images/téléchargement.png'




export default function Header() {
  return (
    <header className='d-flex justify-content-around py-2 align-items-center '>
        <div className="logo">
        <img src={ logo}  alt='Logo' />
        </div>
        <div className="nav">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Book Now</li>
                <li>Contact</li>
            </ul>
        </div>
    </header>
    
  )
}
