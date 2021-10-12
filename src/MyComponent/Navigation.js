import React, { Component } from 'react'
import $ from 'jquery';
import facebook from '../Files/facebook.png'
import Jumbotron from './Jumbotron';
import About from './About';
import Contact from './Contact';
import PortFolio from './PortFolio';
import Footer from './Footer';
import './MyCss.css'




export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img1: "https://www.transparentpng.com/thumb/aries/0aKZjJ-dowland-colorful-coach-logo.png",
        }
    }


    componentDidMount() {
        $(document).ready(function () {
            $(".nav-item").hover(function () {
                $(this).css({ "border-bottom": "Solid white 2px", "border-top": "Solid white 2px", });
            }, function () {
                $(this).css({ "border-bottom": "", "border-top": "", "font-weight": "" });
            });
        });

    }
    
   
    render() {
      
        return (<>
            <div >
                <div className="contaiiner-fluid text-warning ">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="#navbar-example2">
                        <div className="container-fluid">
                            <a class="navbar-brand" href="home">
                                <img src={this.state.img1} alt="" width="35" height="35" className="d-inline-block align-text-top" />
                            </a>
                            <button className="navbar-toggler text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto text-center  mb-2 mb-lg-0 nav-pills">
                                    <li className="nav-item">
                                        <a className="nav-link px-3 text-warning" aria-current="page" href="#home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link px-3 text-warning" href="#About">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link px-3 text-warning" href="#portfolio">Portfolio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link px-3 text-warning" href="#contact">Contact</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link px-3 text-warning" href={facebook} download>Resume</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>
                <div className="progress-container" style={progressContainerStyle}>
                    <div className="progress-bar" style={progressBarStyle} />
                </div>
                <div id="home">
                    <Jumbotron />
                </div>
                <div id="About">
                    <About />
                </div>
                <div id="portfolio" >
                    <PortFolio />
                </div>
                <div id="contact">
                    <Contact />
                </div>
            </div>
            <Footer />

        </>)
    }
}
