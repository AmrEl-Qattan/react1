import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {
        <nav
          className="navbar navbar-expand-lg bg-dark text-uppercase fixed-top  mb-5 "
          id="mainNav"
        >
          <div className="container ">
            <Link
              className="navbar-brand js-scroll-trigger text-white"
              to=""
            >
              Start React
            </Link>
            <button
              className="navbar-toggler  navbar-toggler-right text-uppercase font-weight-bold   rounded"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end text-white"
              id="navbarResponsive"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-0 mx-lg-1">
                  <Link
                    className="nav-link py-3 text-white px-0 px-lg-3 rounded js-scroll-trigger"
                    to="portfolio"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link
                    className="nav-link text-white py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                    to="about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <Link
                    className="nav-link text-white py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                    to="contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      }
    </>
  );
}
