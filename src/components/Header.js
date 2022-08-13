import React from "react";
import Nav from "./Nav";
import './header.css';

class Header extends React.Component {
  render() {
    return(
      <header id="header">
        <h2 id="site-name">Kamran Qureshi</h2>
		    <h4 id="occupation">Web Developer</h4>
        <Nav />
      </header>
    );
  }
}
export default Header;