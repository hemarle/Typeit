import React, {useEffect} from 'react'
import './Navigation.css'

import logo from './images/logo.png'
import hamburger from './images/icon-hamburger.svg'
import close from './images/icon-close.svg'

import {Link} from 'react-router-dom'

function Navigation() {
   
    
    useEffect(() => {
        let openRef = document.querySelector('.hamburger')
        let closeRef = document.querySelector('.nav__Close')
        let hamburgerRef= document.querySelector('.nav__Hamburger')
       let displayRef=document.querySelector('.nav__Right')
        function openFunc() {
            hamburgerRef.classList.add('remove')
       displayRef.classList.remove('remove')
        }
        function closeFunc() {
            hamburgerRef.classList.remove('remove')
       displayRef.classList.add('remove')
        }
        openRef.addEventListener('click', ()=>openFunc())    
        closeRef.addEventListener('click', ()=>closeFunc())    
       
       
        
    },[])
    return (
        <div className='nav'>
            <div className='nav__Logo'>
                <img src={logo} alt='site logo' />
               <p className='nav__Text'>TYPE<span>IT</span></p>
            </div>
                <div  className='nav__Hamburger'>
                    <img src={hamburger} className='hamburger'  alt='Open navigation'/>
                </div>
            <nav  className='nav__Right remove'>
                    <img className='nav__Close'  src={close} alt='close navigation'/>
                <ul className='nav__Links'>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#features'>Features</a></li>
                    <li><a href='#pricing'>Pricing</a></li>
                    <li><a href='#testimonial'> Testimonial</a></li>
                    <li><a href='#'>Help</a></li>
                   
                </ul>
                <ul className='nav__Auth'>
                      
                        <li className='nav__Signup'>
                  <Link to='/authenticate/signup'>
                            Sign Up
                      </Link>
                            
                            </li>
                    <li className='nav__SignIn' ><a href='/authenticate'> Sign In</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
