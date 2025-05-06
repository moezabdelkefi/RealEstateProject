/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Link } from "react-scroll";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";
import GoogleTranslate from "../googletranslate";

const NavbarArch = ({ navbarRef, theme }) => {
  return (
    <nav className="navbar navbar-expand-lg" ref={navbarRef}>
      <div className="container">
        <a className="logo" href="/">
          {theme ? (
            theme === "themeL" ? (
              <img src={appData.darkLogo} alt="logo" />
            ) : (
              <img src={appData.lightLogo} alt="logo" />
            )
          ) : (
            <img src={appData.lightLogo} alt="logo" />
          )}
        </a>

        {/* Google Translate button placed above the burger menu */}
        <div className="google-translate-wrapper d-lg-none">
          <GoogleTranslate />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          onClick={handleMobileDropdown}
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Why A Free Consultation With ?
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="How it works"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                How it works
              </Link>
            </li>
          </ul>

          {/* Google Translate button for larger screens only */}
          <div className="d-none d-lg-block">
            <GoogleTranslate />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarArch;