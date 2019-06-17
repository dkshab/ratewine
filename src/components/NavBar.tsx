import React, { FunctionComponent } from "react";
import { Router, Link } from "@reach/router";

const NavBar: FunctionComponent = () => {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <section className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <strong>Rate Wine!</strong>
          </Link>
          <span
            className="nav-toggle navbar-burger"
            onClick={() => {
              const toggle = document.querySelector(".nav-toggle");
              const menu = document.querySelector(".navbar-menu");
              if (toggle) {
                toggle.classList.toggle("is-active");
              }
              if (menu) {
                menu.classList.toggle("is-active");
              }
            }}
          >
            <span />
            <span />
            <span />
          </span>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/about" className="navbar-item">
              About
            </Link>
            <Link to="/contact" className="navbar-item">
              Contact
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <Link to="/signin" className="button is-primary">
                Sign In
              </Link>
              &nbsp;
              <Link to="/signup" className="button is-link">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
