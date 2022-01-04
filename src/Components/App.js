import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./Auth";
import MainHome from "./MainHome";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Backend from "./Logged/Backend.js";
import Main from "./Logged/Main";

import { useStateValue } from "./StateProvider";

function App() {
  const [{ email }, dispatch] = useStateValue();

  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "ease.inOut", duration: 0.7 });

  const el = useRef();
  const query = gsap.utils.selector(el);
  const tl = new gsap.timeline();
  const tl3 = new gsap.timeline();
  const tl4 = new gsap.timeline();

  useEffect(() => {
    //Home Animation
    tl.from(query(".home__Image"), 1, {
      opacity: 0,
      x: "1vw",
    })
      .from(query(".home__Content h2"), {
        opacity: 0,
        x: "-100vw",
      })
      .from(query(".home__Content p"), {
        opacity: 0,
        x: "-100%",
      })
      .from(query(".home__Content > a"), {
        opacity: 0,
        x: "-100%",
      })

      .fromTo(
        query(".users"),
        {
          opacity: 0,
        },
        { opacity: 1 }
      );

    tl3
      .fromTo(
        query(".features"),
        {
          opacity: 0,
        },
        { opacity: 1 }
      )
      .fromTo(
        query(".features__Image"),
        {
          opacity: 0,
          x: -100,
          overflow: "hidden",
        },
        {
          opacity: 1,
          x: 0,
        }
      )
      .fromTo(
        query(".features__Content >h2"),
        0.5,
        {
          opacity: 0,
          overflow: "hidden",
        },
        {
          opacity: 1,
          x: 0,
        }
      )
      .fromTo(
        query(".features__Content > p"),
        0.5,
        {
          opacity: 0,
          y: 100,

          overflow: "hidden",
        },
        {
          opacity: 1,
          y: 0,
        }
      )
      .fromTo(
        query(".features__Content ul"),
        0.5,
        {
          opacity: 0,
          x: 100,
          overflow: "hidden",
        },
        {
          opacity: 1,
          x: 0,
        }
      );

    // Scroll trigger for features
    ScrollTrigger.create({
      animation: tl3,
      trigger: query(".features"),
      // start: '400px bottom',
      start: "-400px top",
      toggleActions: "play pause resume pause",
    });
    // Card animation
    tl4.from(query(".plan__Card"), 4, { opacity: 0 }, "");

    // card scrolltrigger
    ScrollTrigger.create({
      animation: tl4,
      trigger: query(".plan"),
      toggleActions: "play pause resume pause",
      start: "-400px top",
    });
  }, []);

  return (
    <div className="app" ref={el}>
      {/* <Backend/> */}
      {/* <Navigation/> */}

      {email ? (
        <Main />
      ) : (
        <>
          <Routes>
            <Route path="/authenticate/*" element={<Auth />}></Route>
            <Route path="/*" element={<MainHome />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
