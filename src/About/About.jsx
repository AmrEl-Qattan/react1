import React from 'react'
import './About.css'

export default function About() {
  return (
   <>
   <section className="page-section bg-success text-white mb-0 text-center p-5 " id="about">
            <div className="container-fluid">
                
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row ms-5 ">
                    <div className="col-lg-5 ml-auto"><p className="lead">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                    <div className="col-lg-5 mr-auto "><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
                </div>
                
            
            </div>
        </section>
   </>
  )
}
