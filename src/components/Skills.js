import React, { Component } from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab)
class Skills extends Component {
    render () {
      if(this.props.skills){
        var skills = this.props.skills.map(function(skills){
            var skillsName = skills.skillname
            return <div className="row">
            <div className="col mt-5 ml-5">
              <FontAwesomeIcon key={skillsName} icon={['fab', skillsName]} size="4x"/>
            </div>
            <div className="col mt-5 ml-4">
              <h3 className="mt-4">{skillsName.toUpperCase()}</h3>
            </div>
            </div>
          })
      }
      return(
        <section id="skills">
        <div className="container-fluid skills">
          <div className="row">
          <div className="col-md-3 ml-5">
          <h1>Skills</h1>
          </div>
          <div className="col-md-7 mt-2">
          <hr />
          </div>
          </div>
          <div className="row">
          {skills}
          </div>
        </div>
        </section>
      )
    }
  }
  
  export default Skills;
  