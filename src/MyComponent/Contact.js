import React, { Component } from 'react'
import contact from '../Files/contact.png'
import phone from '../Files/phone.png'
import email from '../Files/email.png'

export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Name: '',
            Email: '',
            msg: '',
            successmsg: false,
            errormsg: ''
        }
    }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.setState({
                errormsg: ''
            })
        })
    }
    onsubmit = () => {
        var onlyString = `^[a-zA-Z]*$`
        var Email = `/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`
        if (this.state.Name === '') {
            this.setState({ errormsg: 'Please Enter Your Name' })
            return false
        }
        if (!this.state.Name.match(onlyString)) {
            this.setState({ errormsg: 'Please Enter Valid Name' })
            return false
        }
         if (this.state.Email === '') {
            this.setState({ errormsg: 'Please Enter Your Email' })
            return false
        } 
        if (!this.state.Email.match(Email)) {
            this.setState({ errormsg: 'Please Enter Valid Email' })
            return false
        }
        if (this.state.msg === "") {
            this.setState({ errormsg: 'Please Enter Your Message' })
            return false
        } else {
            this.setState({
                successmsg: true,
            }, () => {
                setInterval(() => {
                    this.setState({
                        successmsg: false,
                        Email: '',
                        Name: '',
                        msg: ''
                    })
                }, 3000);
            })
        }
    }

    render() {
        return (<>
            <div className="bg-dark p-4">
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <div className="text-center p-4 m-lg-5" data-aos="fade-up" >
                            <img src={contact} className="img-fluid w-100"/>
                        </div>
                        <div className="d-flex d-sm-flex justify-content-center text-warning">
                            <div className><img alt="email" src={phone} width="30" height="30" />ap278243@gmail.com</div>
                            <div className="px-1"><img alt="phone" src={email} width="30" height="30" />+91 8780811158</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="p-4 m-lg-5 p-sm-3 border border-warning rounded-3">
                            <div className="mb-3 text-center">
                                <span className="display-5 text-warning">GET IN TOUCH</span>
                            </div>
                            <hr className="bg-warning" />
                            <div className="text-danger text-center">{this.state.errormsg}</div>
                            <div className="mb-3 text-warning">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input type="Name" className="form-control bg-transparent border-warning text-warning" name="Name" value={this.state.Name} onChange={this.onChangeHandler} autocomplete="off" />
                            </div>
                            <div className="mb-3 text-warning">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control bg-transparent border-warning text-warning" name="Email" value={this.state.Email} onChange={this.onChangeHandler} autocomplete="off" />
                            </div>
                            <div className="mb-3 text-warning">
                                <label htmlFor="exampleInputEmail1" className="form-label">Message</label>
                                <textarea className="form-control bg-transparent border-warning text-warning" name="msg" value={this.state.msg} onChange={this.onChangeHandler} id="floatingTextarea2" style={{ height: "100px" }} autocomplete="off"></textarea>
                            </div>
                            {this.state.successmsg ?
                                <div className="text-center text-success mb-2">Thank You!!! {this.state.Name} We Contact You Soon...</div> : ''}
                            <div className="mb-3 text-center text-warning">
                                <button type="submit" className="btn btn-outline-warning btn-sm" onClick={() => this.onsubmit()}>Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }
}
