import { NavLink } from 'react-router-dom'
import './navBar.css'
// import { LogoImg, hamburgerIcon } from '../../constants/imageUrls'
import { useState } from 'react'
import LogoImg from '../../assets/images/Logo_White.png'
import hamburgerImg from '../../assets/images/hamburger.png'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/">
          <img src={LogoImg} alt='Temple View Residency' className='nav-logo' />
        </NavLink>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={hamburgerImg} alt='Menu' className="menu-img" />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/rooms">Rooms</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/around_us">Around us</NavLink>
            </li>
            <li>
              <NavLink to="/about_temple">About Temple</NavLink>
            </li>
            <li>
              <NavLink to="/about_us">About us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar