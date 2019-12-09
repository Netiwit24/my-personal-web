import React,{Component} from 'react';
import './App.css';
import './js/scroll.js';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      infoData: {}
    };
  }

  getResumeData(){
    fetch('./infoData.json')
    .then(response => {
      return response.json()
    })
    .then(data => {
    // Work with JSON data here
    //console.log(data)
    this.setState({ infoData: data})
    })
    .catch(err => {
      console.log("Error")
    })
  }

  componentDidMount(){
    this.getResumeData();
  }

  render () {
    // console.log(this.state.infoData.skills)
    return(
      <div className="main">
        <Header home={this.state.infoData.home} />
        <About about={this.state.infoData.aboutme} education={this.state.infoData.education} work={this.state.infoData.work}/>
        <Skills skills={this.state.infoData.skills}/>
        <Footer footer={this.state.infoData.socialLinks}/> 
      </div>
    )
  }
}

export default App;
