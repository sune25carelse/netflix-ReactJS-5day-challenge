import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents">
        <img 
            className="nav__logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png" 
             alt="" 
        />

        <img 
            className="nav__avatar"
            src="https://seeklogo.net/wp-content/uploads/2012/11/liverbir-vector-logo-400x400.png"  
            alt="" 
        />
      </div>
    </div>
 )
}

export default Nav;
