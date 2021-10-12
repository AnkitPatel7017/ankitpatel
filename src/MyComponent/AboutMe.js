import React, { Component } from 'react'

export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <div className="text-warning">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        {/* ..........................programing skills............................. */}
                        <div className="accordion-item ">
                            <h2 className="accordion-header " id="flush-headingOne">
                                <button className="accordion-button collapsed text-dark bg-warning text-center btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Programing Skills
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body bg-dark">
                                    <div className="row">
                                        <div className="col text-start">
                                            HTML
                                        </div>
                                        <div className="col">
                                            90%
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning text-dark text-center" role="progressbar" style={{ width: '90%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col text-start">
                                            CSS
                                        </div>
                                        <div className="col">
                                            85%
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning text-dark text-center" role="progressbar" style={{ width: '85%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col text-start">
                                            Bootstrap
                                        </div>
                                        <div className="col">
                                            80%
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning text-dark text-center" role="progressbar" style={{ width: '85%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col text-start">
                                            JavaScript
                                        </div>
                                        <div className="col">
                                            70%
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning text-dark text-center" role="progressbar" style={{ width: '70%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col text-start">
                                            ReactJS
                                        </div>
                                        <div className="col">
                                            40%
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning text-dark text-center" role="progressbar" style={{ width: '40%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ....................................Experiance ................................................ */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed text-dark bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Experiance
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body bg-dark">
                                    <div>
                                        <span className="fw-bold"><u>Trainee Front-end Web-developer </u></span> <br />
                                        <small> <span>RupIT Global Services<br />Vesu,Surat,Gujarat<br />March-2021 to Current</span> </small>
                                    </div>
                                    {/* <hr />
                                    <div>
                                        <span className="fw-bold"><u>React Js Front-end Web-developer </u></span> <br />
                                       <small> <span>RupIT Global Services<br />Vesu,Surat,Gujarat<br />September-2021 to Current</span> </small>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {/* ..........................Education............................. */}

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed text-dark bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Qualification
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body bg-dark">
                                    <div>
                                        <span className="fw-bold"><u>B.E Computer</u></span><br />
                                        <small><span>Gujarat Technological University<br />Navsari,Gujarat<br /> 2019</span></small>
                                    </div>
                                    <hr />
                                    <div className="mt-3">
                                        <span className="fw-bold"><u>12th Science </u></span> <br />
                                       <small> <span >Gujarat Board<br />Navsari,Gujarat<br /> 2013</span></small>
                                    </div>
                                    <hr />
                                    <div className="mt-3">
                                        <span className="fw-bold"><u>10th</u></span><br />
                                        <small><span>Gujarat Board<br /> Navsari,Gujarat<br />2011</span></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ...............................Language skills................................ */}

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingFour">
                                <button className="accordion-button collapsed text-dark bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    Language Skills
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body bg-dark">
                                    <div className="row">
                                        <div className="col text-start">
                                            GUJARATI
                                        </div>
                                        <div className="col">
                                            100%
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning text-dark text-center" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col text-start">
                                            HINDI
                                        </div>
                                        <div className="col">
                                            95%
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning text-dark text-center" role="progressbar" style={{ width: '95%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col text-start">
                                            ENGLISH
                                        </div>
                                        <div className="col">
                                            70%
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning text-dark text-center" role="progressbar" style={{ width: '70%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
