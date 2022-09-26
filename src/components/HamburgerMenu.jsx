import React, { useRef } from "react";
import { Link } from "react-router-dom";

function HamburgerMenu() {
  const hamburger = useRef();
  const overlay = useRef();
  const menu = useRef();

  function navToggle() {
    hamburger.current.classList.toggle("open");
    overlay.current.classList.toggle("overlay-show");
    menu.current.classList.toggle("show-menu");
    document.body.classList.toggle("stop-scrolling");
  }

  function closeMenu() {
    hamburger.current.classList.remove("open");
    menu.current.classList.remove("show-menu");
    overlay.current.classList.remove("overlay-show");
  }
  return (
    <>
      {/* Overlay */}
      <div ref={overlay}></div>
      {/* Hamburger Menu */}
      <button
        className="hamburger"
        type="button"
        ref={hamburger}
        onClick={navToggle}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      {/* Menu */}
      <div className="mobile-main-menu" ref={menu}>
        <ul>
          <li>
            <Link className="mobile-main-menu-link" to="" onClick={closeMenu}>
              Mision
            </Link>
          </li>
          <li>
            <Link className="mobile-main-menu-link" to="" onClick={closeMenu}>
              Launches
            </Link>
          </li>
          <li>
            <Link className="mobile-main-menu-link" to="" onClick={closeMenu}>
              Carrers
            </Link>
          </li>
          <li>
            <Link className="mobile-main-menu-link" to="" onClick={closeMenu}>
              Updates
            </Link>
          </li>
          <li>
            <Link className="mobile-main-menu-link" to="" onClick={closeMenu}>
              Shop
            </Link>
          </li>
          <li className=" mobile-only">
            <Link
              className="mobile-main-menu-link"
              to="falcon9"
              onClick={closeMenu}
            >
              Falcon 9
            </Link>
          </li>
          <li className=" mobile-only">
            <Link
              className="mobile-main-menu-link"
              to="falcon=heavy"
              onClick={closeMenu}
            >
              Falcon Heavy
            </Link>
          </li>
          <li className=" mobile-only">
            <Link
              className="mobile-main-menu-link"
              to="dragon"
              onClick={closeMenu}
            >
              Dragon
            </Link>
          </li>
          <li className=" mobile-only">
            <Link className="mobile-main-menu-link" to="/" onClick={closeMenu}>
              Starship
            </Link>
          </li>
          <li className=" mobile-only">
            <Link className="mobile-main-menu-link" to="/" onClick={closeMenu}>
              Human Spaceflight
            </Link>
          </li>
          <li className=" mobile-only">
            <Link className="mobile-main-menu-link" to="/" onClick={closeMenu}>
              Rideshare
            </Link>
          </li>
          <li className=" mobile-only">
            <Link className="mobile-main-menu-link" to="/" onClick={closeMenu}>
              Starlink
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HamburgerMenu;
