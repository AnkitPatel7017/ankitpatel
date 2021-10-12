import React, { Component } from 'react'
import './MyCss.css'
import xyz1 from '../Files/xyz1.png'


export default class Jumbotron extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron text-warning">
                    <div className="container">
                        <div className="row p-5">
                            <div className="col-md-6 col-sm-6  d-none d-md-block" data-aos="fade-right">
                                <img src={xyz1} className="img-fluid w-100" />
                            </div>
                            <div className="col-md-6 col-sm-6 d-md-none " data-aos="fade-right">
                                <img src={xyz1} className="img-fluid w-100" />
                            </div>
                            <div className="col-md-6 col-sm-6 text-end d-none d-md-block align-self-end" data-aos="fade-left">
                                <h3>Ankit Patel</h3>
                                <h5>Web Developers</h5>
                            </div>
                            <div className="col-md-6 col-sm-6 text-end d-md-none" data-aos="fade-left">
                                <h3>Ankit Patel</h3>
                                <h4>Web Developers</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
