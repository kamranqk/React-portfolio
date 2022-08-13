import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return(
    <nav id="main-menu" aria-label="Main navigation">
      <ul className="menu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="#">About me</NavLink></li>
        <li><a href="https://github.com/kamranqk">Github</a></li>
        <li><a href="#contact-me">Contact</a></li>
      </ul>
    </nav>
  )
}
export default Nav;