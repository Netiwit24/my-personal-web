import React, { Component } from "react"

class About extends Component {
    render () {
      if(this.props.about && this.props.education && this.props.work){
        var About = this.props.about;
        var Education = this.props.education.map(function(education){
          var universityName = education.universityName
          var branch = education.branch
          var MonthOfStart = education.monthOfStart
          var start = education.start
          var Achievements = education.achievements
          return <div className="row ">
          <div className="col-md-6 mt-5 ml-5 ">
          {universityName}
          </div>
          <div className="row">
          <div className="col mt-5 ml-1">
          <h5>Branch : {branch}</h5>
          <h5>Start : {MonthOfStart} {start}</h5>
          <h5>Achievements : {Achievements}</h5>
          </div>
          </div>
          </div>
        })
        var Work = this.props.work.map(function(work){
          var companyName = work.companyName
          var position = work.position
          var monthOfStart = work.monthOfStart
          var start = work.start
          var jobDetail = work.jobDetail
          return <div className="row ">
          <div className="col mt-5 ml-5 ">
          {companyName}
          </div>
          <div className="row">
          <div className="col-md6 mt-5 ml-1">
          <h5>Position : {position}</h5>
          <h5>Start : {monthOfStart} {start} - Present</h5>
          <h5>Job Detail : {jobDetail.substring(0,41)}</h5>
          <h5>{jobDetail.substring(41)}</h5>
          </div>
          </div>
          </div>
        })
      }
      return(
        <div className="container-fluid">
          <section id="about">
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
          <img src="img/profile.jpg" alt="Profile" className="imgProfile rounded-circle"/>
          </div>
          <div className="col-md-7 ml-5 mt-5">
          <h4>{About}</h4>
          </div>
          </div>
          </div>
          </section>
          <section id="education">
          <div className="container-fluid education">
          <div className="row">
          <div className="col-md-3 ml-5">
          <h1>Education</h1>
          </div>
          <div className="col-md-7 mt-2">
          <hr />
          </div>
          </div>
          <h4>{Education}</h4>
          </div>
          </section>
          <section id="work">
          <div className="container-fluid education">
          <div className="row">
          <div className="col-md-3 ml-5">
          <h1>Experience Work</h1>
          </div>
          <div className="col-md-7 mt-2">
          <hr />
          </div>
          </div>
          <h4>{Work}</h4>
          </div>
          </section>
        </div>
      )
    }
  }
  
  export default About;
  