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
    <div className="nav nav__black">
        <div className="nav__contents">
        <img 
            className="nav__logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png" 
             alt="" 
        />
        <img 
            className="nav__avatar"
            src="https://www.youtube.com/redirect?event=live_chat&redir_token=QUFFLUhqbGU4UXg5WFVrRU9acGJPd3ZDcVptb2d6UlFmQXxBQ3Jtc0ttZjNPbmxJQVM2U2Vqck1ZemRwbGdZOEphZXlTbHlDMDR1LWpaRjlsbk90b0cwVG9kZVFEMnF4Y3ZFb3B2d0o0TW15Z1psNEp5TTlPdzB1c2pSbkl6Zi1YTVNxTHVNMmJLcVBTU2hkVUhUay1xMFVUdw&q=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1240119990411550720%2FhBEe3tdn_400x400.png"  
            alt="" 
        />
      </div>
    </div>
 )
}

export default Nav;
