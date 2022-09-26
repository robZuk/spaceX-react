import React from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="main-header">
        <Link className="logo" to="/">
          <img src={Logo} alt="SpaceX" />
        </Link>
        <nav className="desktop-main-menu">
          <Link className="desktop-main-menu-link" to="falcon9">
            Falcon 9
          </Link>
          <Link className="desktop-main-menu-link" to="falcon-heavy">
            Falcon Heavy
          </Link>
          <Link className="desktop-main-menu-link" to="dragon">
            Dragon
          </Link>
          <Link className="desktop-main-menu-link" to="/">
            Starship
          </Link>
          <Link className="desktop-main-menu-link" to="/">
            Human Spaceflight
          </Link>
          <Link className="desktop-main-menu-link" to="/">
            Rideshare
          </Link>
          <Link className="desktop-main-menu-link" to="/">
            Starlink
          </Link>
          <Link className="desktop-main-menu-link" to="/">
            Shop
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
