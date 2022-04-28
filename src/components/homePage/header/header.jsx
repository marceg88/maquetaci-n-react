import { useState } from "react"
import {
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown
} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import ButtonStartFree from '../buttonStart/buttonStartFree'
import  './header2.css'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

function NavBar() {
  const [showItems, setShowItems] = useState(false)
  const handleClickBars = () => {
    setShowItems(!showItems)
  }
  const className = showItems ? "nav-item show" : "nav-item"
  return (
    <header>
      <nav>
        <section className="nav-menu-container">
          <div className="nav-title">
            <h2>Achoo</h2>
            <p>Beta</p>
          </div>
          <div className="nav-menu">
            <ul className="nav-menu-services">
              <li className={className}><a to="#">Features</a></li>
              <li className={className}><a to="#">Pricing</a></li>
              <li className={className}><a to="#">About</a></li>
              <li className={className}><a to="#">Contact</a></li>
              <li className={className}><a href="/login"><span>Login</span></a></li>
              <li className={className}><a href="/registro">SignUp</a></li>
              <li className={className}><a to="#"></a></li>
              <li className="nav-icon-menu bars" onClick={handleClickBars}>
                <FontAwesomeIcon className="icon" icon={faBars}  />
              </li>
              {/* <li className='nav-icon-menu bars' onClick={handleClickBars}>
                <i className="fas fa-bars icon"></i>
              </li> */}
            </ul>
          </div>
          
          
        </section>
        <section className="nav-title-button">
          <h1>A Powerful Influencer Marketing Platform for Advertisers</h1>
          <div className='nav-button-start'>
            <button>start your free trial</button>
          </div>
        </section>
      </nav>
      
    </header>     
  )
}

export default NavBar