import { useState } from "react"
import {
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown
} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import ButtonStartFree from '../buttonStart/buttonStartFree'
import  './header.css'
import { faBars } from "@fortawesome/free-solid-svg-icons"

function NavBar() {
  const [showItems, setShowItems] = useState(false)
  const handleClickBars = () => {
    setShowItems(!setShowItems)
  }
  const className = showItems ? "nav-item show" : "nav-item"
  return (
    <header>
      <nav className="nav-container">
        <section className="nav-menu-container">
          <div className="nav-title">
            <h2>Achoo</h2>
            <p>Beta</p>
          </div>
          <div className="nav-menu">
            <ul className="nav-menu-services">
              <li className={className}>Features</li>
              <li className={className}><a href="">Pricing</a></li>
              <li className={className}><a href="">About</a></li>
              <li className={className}><a href="">Contact</a></li>
              <li className={className}><a href="">Login</a></li>
              <li className={className}><a href="">SignUp</a></li>
              <li className={className}><a href=""></a></li>
              <li className="nav-icon-menu bars" onClick={handleClickBars}>
                <FontAwesomeIcon className="icon" icon={faBars}  />
              </li>
            </ul>
          </div>
          
          
        </section>
        
      </nav>
      <section className="nav-title-button">
          <h1>A Powerful Influencer Marketing Platform for Advertisers</h1>
          <div className='nav-button-start'>
            <ButtonStartFree classButton="colors"/>
          </div>
        </section>
    </header>     
  )
}

export default NavBar