import React from 'react'
import './Home.css'


export default function Home() {
  return (
    <>
    

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
