import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    { <nav className="navbar navbar-expand-lg bg-dark text-uppercase fixed-top  mb-5 " id="mainNav">
            <div className="container ">
                <Link className="navbar-brand js-scroll-trigger text-white" to="home">Start React</Link>
                <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold   rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end text-white" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="portfolio">Portfolio</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="about">About</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="contact">Contact</Link></li>
                    
                    </ul>
                </div>
            </div>
        </nav> }
        <header className="masthead bg-success text-white text-center " id='home'>
            <div className="container d-flex align-items-center flex-column">
                
                <img className="masthead-avatar mb-5 w-25" src="assets/img/avataaars.svg" alt=""/>
               
                <h1 className="masthead-heading text-uppercase mb-0">Start React</h1>
               
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
               
                <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </header>
        
    </>
  )
}
