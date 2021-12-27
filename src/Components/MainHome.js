import React from 'react'

import Features from './Features';
import Footer from './Footer';
import Home from './Home'
import Map from './Map';
import Navigation from './Navigation';
import Plan from './Plan';
import Subscribe from './Subscribe';
import Testimonial from './Testimonial';
import Users from './Users';

function MainHome() {
    return (
        <div className='mainHome'>
            
            <Navigation/>
            <Home/>
            <Users/>
            <Features/>
            <Plan/>
            <Map/>
            <Testimonial/>
            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default MainHome
