import React, { Component } from 'react'
import $ from 'jquery';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Jumbotron from './Jumbotron';
import PortFolio from './PortFolio';
import APResume from '../Files/APResume.pdf'
import mainlogo from '../Files/mainlogo.png'


export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: 0,
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollProgress);
        $(document).ready(function () {
            $(".nav-item").hover(function () {
                $(this).css({ "border-bottom": "Solid #ffc107 2px", "border-top": "Solid #ffc107 2px"});
            }, function () {
                $(this).css({ "border-bottom": "", "border-top": ""});
            });
        });
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollProgress);
    }

    scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = `${scrollPx / winHeightPx * 100}%`;

        console.log(scrolled);

        this.setState({
            scrolled: scrolled
        });
    };
    render() {
        const progressContainerStyle = {
            background: "#000000",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            height: "5px",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            zIndex: 100
        };

        const progressBarStyle = {
            height: "5px",
            background: "#ffc107",
            width: this.state.scrolled
        };
        return (
            <div>
                {/* <div className="progress-container" style={progressContainerStyle}>
                    <div className="progress-bar" style={progressBarStyle} />
                </div> */}
                <div className="contaiiner-fluid text-warning ">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="#navbar-example2">
                        <div className="container-fluid">
                            <a class="navbar-brand" href="home">
                                <img src={mainlogo} alt="" width="35" height="35" className="d-inline-block align-text-top" />
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
                                        <a className="nav-link px-3 text-warning" href={APResume} download>Resume</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
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
                <Footer />
            </div>
            
        )
    }
}
