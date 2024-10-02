
// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import './NavBar.css'; 
// import { FaCartPlus } from "react-icons/fa6";
// import FF from '../assets/F&F-pic1.png'

// function NavBar() {
//   return (
//     <nav className="navbar">
//       <div className="nav-left">
//         <img src={FF} width="10%" style={{marginLeft:"4%"}}/>
//         <p>Forks&Flames</p>
//       </div>
//       <div className="nav-middle">
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/menu">Menu</NavLink>
//         <NavLink to="/about-us">About Us</NavLink>
//         <NavLink to="/contact">Contact Us</NavLink>
//       </div>
//       <div className="nav-right">
//         <NavLink to="/cart" className="cart-icon"><FaCartPlus/></NavLink> 
//         <Link to="/login" className="login-btn">Login</Link>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;
//final
/////////////////////////////////


//////////////////////////////////////

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'; 
import { FaCartPlus } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa"; 
import FF from '../assets/F&F-pic1.png';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    //menu will clode when link is clicked..
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={FF} width="10%" style={{ marginLeft: "4%" }} alt="Logo" />
        <p>Forks&Flames</p>
      </div>
      <div className="nav-middle">
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={handleLinkClick}>Home</NavLink>
          <NavLink to="/menu" onClick={handleLinkClick}>Menu</NavLink>
          <NavLink to="/about-us" onClick={handleLinkClick}>About Us</NavLink>
          <NavLink to="/contact" onClick={handleLinkClick}>Contact Us</NavLink>
        </div>
      </div>
      <div className="nav-right">
        <NavLink to="/cart" className="cart-icon"><FaCartPlus /></NavLink> 
        <Link to="/login" className="login-btn">Login</Link>
      </div>
    </nav>
  );
}

export default NavBar;
