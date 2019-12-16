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
           <nav className="navbar navbar-expand-sm nav-container navbar-dark fixed-top navbar-scrolled">
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item active nav-item-menu">
                    <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item active nav-item-menu">
                    <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item active nav-item-menu">
                    <a className="nav-link" href="#education">Education</a>
                </li>
                <li className="nav-item active nav-item-menu">
                    <a className="nav-link" href="#work">Work</a>
                </li>
                <li className="nav-item active nav-item-menu">
                    <a className="nav-link" href="#skills">Skills</a>
                </li>
            </ul>
            </div>
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
  