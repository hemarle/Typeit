import React from 'react'
import './Navigation.css'

import logo from './images/logo.png'
import hamburger from './images/icon-hamburger.svg'
import close from './images/icon-close.svg'
function Navigation() {
    return (
        <div className='nav'>
            <div className='nav__Logo'>
                <img src={logo} alt='site logo' />
               <p className='nav__Text'>FEMI<span>VPN</span></p>
            </div>
                <div className='nav__Hamburger'>
                    <img src={hamburger} alt='Open navigation'/>
                </div>
            <nav className='remove'>
                    <img src={close} alt='close navigation'/>
                <ul className='nav__Links'>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>Pricing</a></li>
                    <li><a href='#'> Testimonial</a></li>
                    <li><a href='#'>Help</a></li>
                   
                </ul>
                <ul className='nav__Auth'>
                    <li><a href='#'>Sign In</a></li>
                    <li><a href='#'> Sign Up</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
