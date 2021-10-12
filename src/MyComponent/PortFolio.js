import React, { Component } from 'react'

export default class PortFolio extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             img:"https://cdn.pixabay.com/photo/2020/05/10/06/26/coming-soon-5152487_1280.png",
             title:'Coming Soon...'
        }
    }
    
    render() {
        return (<>
            <div className='mt-5'>
                <div className="text-center ">
                    <h2><strong><u>FEATURED WORKS</u></strong></h2>
                </div>
            </div>
            <div className="p-5 mb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                    <div className="col">
                        <div className="card">
                            <img src={this.state.img} className="card-img-top img-fluid" alt="..." />
                            <div className ="card-body">
                            <h5 className ="card-title">{this.state.title}</h5>
                            <p className ="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={this.state.img} className="card-img-top" alt="..." />
                            <div className ="card-body">
                            <h5 className ="card-title">{this.state.title}</h5>
                            <p className ="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={this.state.img} className="card-img-top" alt="..." />
                            <div className ="card-body">
                            <h5 className ="card-title">{this.state.title}</h5>
                            <p className ="card-text"></p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
       </> )
    }
}
