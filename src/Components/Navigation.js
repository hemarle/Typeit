import React, {useEffect} from 'react'
import './Navigation.css'

import logo from './images/logo.png'
import hamburger from './images/icon-hamburger.svg'
import close from './images/icon-close.svg'
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
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>Pricing</a></li>
                    <li><a href='#'> Testimonial</a></li>
                    <li><a href='#'>Help</a></li>
                   
                </ul>
                <ul className='nav__Auth'>
                    <li><a href='#'>Sign In</a></li>
                    <li className='nav__SignUp' ><a href='#'> Sign Up</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
