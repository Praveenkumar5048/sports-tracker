import React from 'react';
import logo from '../Resources/logo.png';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faHeart, faHouse, faBars } from '@fortawesome/free-solid-svg-icons';
import  './Navbar.css';

function Navbar(){
    return (
    <div className="Navbar">
     <img src={logo} alt="logo-img" />
     <div className="Components">
     <div className="left nav"> 
     <NavLink to="/" className="nav-link"> 
     <span className="options" ><FontAwesomeIcon icon={faHouse} style={{color: "#1e1e1f",}} />  Home</span>
     </NavLink>
     <NavLink to="/about" className="nav-link">
     <span className="options">About</span>
     </NavLink>
     </div>
     <div className="search_bar">
        <input type="text" placeholder="    Search your teams....." />
        <button type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#e7eaee",}} />
        </button>
     </div>
     <div className="right nav">
     <NavLink to="/Favourite" className="nav-link">
     <span className="options" >Favourites   <FontAwesomeIcon icon={faHeart} style={{color: "#f50505",}} /></span>
     </NavLink>
     <span className="options">Shop</span>
     <span className="options">Cart<FontAwesomeIcon icon={faCartShopping} style={{color: "#1e1e1f",}} /></span> 
     </div>
     </div>
     <div className="hamburger">
     <FontAwesomeIcon icon={faBars} size="xl" style={{color: "#f0f2f4",}} />
     </div>
    </div>
    );
}

export default Navbar;


