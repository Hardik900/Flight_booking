import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faAngleDown} from '@fortawesome/free-solid-svg-icons'

function Navbar(){
    return(
        <>
            <nav>
                <div className="nav-img">
                    <img src="logo_airlingster.png" alt="" />
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Flight</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
                <div className="nav-button">
                    <button>EN <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;