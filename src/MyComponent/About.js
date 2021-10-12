import React, { Component } from 'react'
import abc from '../Files/abc.png'
import AboutMe from './AboutMe'
import './About.css'

export default class About extends Component {
    render() {
        return (<>
            <div className="container-fluid mt-0 bg-warning" id="#About">
                <div className="row text-dark p-5">
                    <div className="col-sm-4 d-md-none pb-4">
                        <div>
                            <img src={abc} className="img-fluid w-100" />
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <figure class="text-start m-0">
                            <blockquote className="blockquote">
                                <h2 className="animate__animated animate__bounce">Ankit Patel</h2>
                            </blockquote>
                            <br />
                            <figcaption className="blockquote-footer">
                                <cite title="Source Title">Creative Web-Developer</cite>
                            </figcaption>
                        </figure>
                        <hr className="m-0 w-75" />
                        <div className="mt-3">
                            <em>
                                My name is Ankit Patel. I am a Web Developer, and I'm very passionate and dedicated to my work.<br />
                                With 6+ months experience as a Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
                            </em>
                        </div>
                        <div className="text-center mt-3">
                            <button type="button" className="btn btn-dark text-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                View More
                            </button>
                            <div className="modal fade 	.modal-sm" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content bg-dark ">
                                        <div className="modal-header ">
                                            <h5 className="modal-title text-warning text-center" id="exampleModalLabel">About Me !!</h5>
                                            <button type="button" className="btn-close bg-warning" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                         <AboutMe />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 d-none d-md-block">
                        <div>
                            <img src={abc} className="img-fluid w-100" />
                        </div>
                    </div>

                </div>
            </div>
        </>)
    }
}
