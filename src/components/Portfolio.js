import React, { Component } from "react"

class Portfolio extends Component {
    render () {
      console.log("about : "+this.props.data);
      if(this.props.data){
        var About = this.props.data;
      }
      return(
        <div className="container-fluid aboutme">
          <div className="row">
          <div className="col-md-3 ml-5">
          <h1>About Me</h1>
          </div>
          <div className="col-md-7 mt-2">
          <hr />
          </div>
          </div>
          <div className="row">
          <div className="col-md-3 mt-3">
          <img src="/img/profile.jpg" alt="Profile" className="imgProfile rounded-circle"/>
          </div>
          <div className="col-md-7 ml-5 mt-5">
          <h4>{About}</h4>
          </div>
          </div>
        </div>
      )
    }
  }
  
  export default Portfolio;
  