import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


import Nav from './MyComponent/Nav'
import main from './Files/main.gif'

// import Navbar from './MyComponent/Navigation'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loader: true,
      img4: 'https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif'
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        loader: false
      })
    }, 1700);
    AOS.init({duration:2000});
  }


  render() {

    const my = {
      position: "absolute",
      backgroundColor: "#ffffff",
      top: "0",
      bottom: " 0",
      left: "0",
      right: "0",
      margin: "auto"
    }
    return (<>
      {this.state.loader ?
        <div style={my}>
          <img src={main} alt="" className="" width="400px" height="300px" style={my} />
        </div>
        : <Nav />
      }

    </>)
  }
}
