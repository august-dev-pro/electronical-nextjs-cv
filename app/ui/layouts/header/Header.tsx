"use client";
import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="header" id="home">
      <div className="header_container container">
        <div className="header_content content">
          <div className="logo-insign">
            <div className="insign">robert</div>
          </div>
          <nav className="nav">
            <div className="nav_links">
              <a href="#home" className="chield link">
                <div className="label">home</div>
              </a>
              <a href="#about" className="chield link">
                <div className="label">about</div>
              </a>
              <a href="#experience" className="chield link">
                <div className="label">Services</div>
              </a>
              <a href="#portfolio" className="chield link">
                <div className="label">portfolio</div>
              </a>
              <a href="#contact" className="chield link">
                <div className="label">contact</div>
              </a>
            </div>
            <div className="nav_contact_btn btn">contact</div>
          </nav>
          <div
            className={`menu_deroule ${
              menuOpen ? "menu_deroule_nav_open" : ""
            }`}
          >
            <div className="menu" id="menu" onClick={toggleMenu}>
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </div>
            <nav className={`nav ${menuOpen ? "open" : ""}`}>
              <a href="#home" className="chield link">
                <div className="label">home</div>
              </a>
              <a href="#about" className="chield link">
                <div className="label">about</div>
              </a>
              <a href="#experience" className="chield link">
                <div className="label">Services</div>
              </a>
              <a href="#portfolio" className="chield link">
                <div className="label">portfolio</div>
              </a>
              <a href="#contact" className="chield link">
                <div className="label">contact</div>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
