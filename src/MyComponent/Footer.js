import React, { Component } from 'react'
import $ from 'jquery';
import facebook from '../Files/facebook.png'
import linkedin from '../Files/linkedin.png'
import instagram from '../Files/instagram.png'
import twitter from '../Files/twitter.png'
import './MyCss.css'
import mainlogo from '../Files/mainlogo.png'



export default class Footer extends Component {
    componentDidMount() {
        $(document).ready(function () {
            $(".icon").hover(function () {
                $(this).css({ "border-bottom": "Solid #212529 2px", "border-top": "Solid #212529 2px"});
            }, function () {
                $(this).css({"border-bottom": "", "border-top": ""});
            });
        });
    }
    
        render() {
        return (
            <div className="bg-warning p-5">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                        <div className="header text-center">
                            <img src={mainlogo} alt="logo"/>
                          </div>
                          <div className="text-center">
                           <h5>Ankit Patel</h5>
                          </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="text-center">
                            <ul className="d-flex justify-content-center" style={{ listStyleType: "none" }}>
                                <li className="icon">
                                    <a href="https://www.facebook.com/akt2396/" target="_blank" data-bs-toggle="tooltip"  data-bs-placement="top" title="Facebook">
                                        <img alt="Facebook" src={facebook} width="50" height="50" />
                                    </a>
                                </li>
                                <li className="icon">
                                    <a href="https://www.linkedin.com/in/ankit-patel-431676142/" target="_blank"  data-bs-toggle="tooltip"  data-bs-placement="top" title="linkedin">
                                        <img alt="linkedin" src={linkedin} width="50" height="50" />
                                    </a>
                                </li>
                                <li className="icon">
                                    <a href="https://www.instagram.com/__ankit_17_/" target="_blank"  data-bs-toggle="tooltip"  data-bs-placement="top" title="Instagram">
                                        <img alt="instagram" src={instagram} width="50" height="50" />
                                    </a>
                                </li>
                                <li className="icon">
                                    <a href="https://twitter.com/_endlesss_" target="_blank"  data-bs-toggle="tooltip"  data-bs-placement="top" title="Twitter">
                                        <img alt="twitter" src={twitter} width="50" height="50" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="text-center text-dark">
                            <p>Copyright © 2021, All Rights Reserved.</p>
                            <p> Ankit Patel</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
