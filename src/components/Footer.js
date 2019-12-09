import React, { Component } from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab)
class Footer extends Component {
    render () {
      if(this.props.footer){
        var github = this.props.footer[0].name;
        var githuburl = this.props.footer[0].url;
        var facebook = this.props.footer[1].name;
        var facebookurl = this.props.footer[1].url;
      }
      return(
        <section id="footer">
        <div className="container-fluid Footer">
        <hr />
        <div className="text-center text-uppercase">
        <span className="text-color-lightGreen">Powered By Netiwit |  React & Bootstrap </span>
        <br/>
        <div className="container-fluid">
        <div className="row justify-content-md-center">
        <div className="col col-lg-1 ml-6">
          <a href={githuburl}>
          <FontAwesomeIcon className="text-color-lightGreen" icon={['fab', 'github-square']} size="3x"/>
          </a>
        </div>
        <div className="col col-lg-1 mr-6">
        <a href={facebookurl}>
          <FontAwesomeIcon className="text-color-lightGreen" icon={['fab', 'facebook']} size="3x"/>
          </a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
      )
    }
  }
  
  export default Footer;
  