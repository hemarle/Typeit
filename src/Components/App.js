import React, {useEffect, useRef, useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Auth from './Auth'
import Features from './Features';
import Footer from './Footer';
import Home from './Home'
import Map from './Map';
import Navigation from './Navigation';
import Plan from './Plan';
import Subscribe from './Subscribe';
import Testimonial from './Testimonial';
import Users from './Users';
import {gsap} from 'gsap'

import Cookies from 'universal-cookie';


import {ScrollTrigger} from "gsap/ScrollTrigger";
import Main from './Logged/Main';


function App() {

  const cookies= new Cookies();
 let userLogged = cookies.get('user');
  console.log(userLogged, 'userLogged')
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ease: 'ease.inOut', duration: .7})


    const el = useRef()
    const query = gsap.utils.selector(el)
    const tl = new gsap.timeline()
    const tl2 = new gsap.timeline()
    const tl3 = new gsap.timeline()
    const tl4 = new gsap.timeline()
    const tl5 = new gsap.timeline()


    useEffect(() => {
       
      //Home Animation 
      tl
      .from(query('.home__Image'), 1, {
        opacity: 0,
        x: "1vw"
    })
        .from(query('.home__Content h2'), {
            opacity: 0,
            x: "-100vw"
        })
          .from(query('.home__Content p'), {
            opacity: 0,
            x: "-100%"
        })
          .from(query('.home__Content > a'), {
            opacity: 0,
            x: "-100%"
        })
        
          .fromTo(query('.users'), {
            opacity: 0
        }, {opacity: 1});

      // Scroll trigger for home
        ScrollTrigger.create({
            animation: tl,
            trigger: query('.home'),
            start: '-400px top',
            toggleActions: 'play pause resume pause',
            onEnter: console.log('enter')
        })

      // Features animation
      tl3.fromTo(query('.features'), {
            opacity: 0
          }, {opacity: 1}).fromTo(query('.features__Image'), {
            opacity: 0,
            x: -100,
            overflow: 'hidden'
        }, {
            opacity: 1,
            x: 0
        }).fromTo(query('.features__Content >h2'),.5, {
            opacity: 0,
            overflow: 'hidden'
          }, {
            opacity: 1,
            x: 0
          }).fromTo(query('.features__Content > p'),.5, {
            opacity: 0,
            y: 100,

            overflow: 'hidden'
          }, {
            opacity: 1,
            y: 0
          }).fromTo(query('.features__Content ul'),.5, {
            opacity: 0,
            x: 100,
            overflow: 'hidden'
          }, {
            opacity: 1,
            x: 0
          })

          
        // Scroll trigger for features
          ScrollTrigger.create({
            animation: tl3,
            trigger: query('.features'),
            // start: '400px bottom',
            start: '-400px top',
            toggleActions: 'play pause resume pause'


        })
        // Card animation
        tl4
        .from(query('.plan__Card'), 4, {opacity:0 }, "")

      // card scrolltrigger
      ScrollTrigger.create({
        animation: tl4,
        trigger: query('.plan'),
        toggleActions: 'play pause resume pause',
        start: '-400px top'
        
      })
      

    }, [])

    return (


      <div className="app"

ref={el}>
{/* <Navigation/> */}

{
  userLogged?<Main/>
  :
  <>
  
  

<Routes>
  <Route path='/authenticate'element={<Auth/>} >


  </Route>
</Routes>
            <Navigation/>
            <Home/>
            <Users/>
            <Features/>
            <Plan/>
            <Map/>
            <Testimonial/>
            <Subscribe/>
            <Footer/>
            </>
}
            
        </div>
    );
}

export default App;
