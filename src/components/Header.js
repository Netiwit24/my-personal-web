import React, { Component } from "react"

class Header extends Component {
    render () {
        if(this.props.home){
            var name = this.props.home[0].name;
            var role = this.props.home[0].role;
          }
      return(
          <section id="home">
        <div className="container-fluid title home">
           <nav className="navbar navbar-expand-sm nav-container navbar-dark bg-transparent fixed-top navbar-scrolled">
            <ul className="navbar-nav justify-content-center">
                <li className="nav-item nav-item-menu">
                    <a className="nav-link active" href="#home">Home</a>
                </li>
                <li className="nav-item nav-item-menu">
                    <a className="nav-link active" href="#about">About</a>
                </li>
                <li className="nav-item nav-item-menu">
                    <a className="nav-link active" href="#education">Education</a>
                </li>
                <li className="nav-item nav-item-menu">
                    <a className="nav-link active" href="#work">Work</a>
                </li>
                <li className="nav-item nav-item-menu">
                    <a className="nav-link active" href="#skills">Skills</a>
                </li>
            </ul>
            </nav>
            <div className="home-text text-color-lightGreen">
            <span >Hi, My name is
            <h1>{name}</h1>
            </span>
            <span>
                <h4>{role}</h4>
            </span>
            </div>
        </div>
        </section>
      )
    }
  }
  
  export default Header;
  