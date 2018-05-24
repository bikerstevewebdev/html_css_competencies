import React, { Component } from 'react'
import logo from './favicon.ico'
import './reset.css'
import './App.css'
import About from './About'
import TakeAction from './TakeAction'
import LoginNav from './LoginNav'

class App extends Component {
  constructor(){
    super()
    this.state = {
      shouldDisplay: "none"
    }
    this.scrollToggle = this.scrollToggle.bind(this)
  }

  scrollToggle(){
    const { shouldDisplay } = this.state
    if(window.pageYOffset > window.innerHeight && shouldDisplay !== "block"){
      this.setState({ shouldDisplay: "block" })
    }else if(window.pageYOffset < window.innerHeight && shouldDisplay !== "none"){
      this.setState({ shouldDisplay: "none" })
    }
  }
  
  render() {
    window.onscroll = this.scrollToggle
    // const bgImg = document.registerElement('background-image', {
    //   prototype: Object.create(HTMLElement.prototype)
    // })
    return (
        <section id="app" >
          <LoginNav shouldDisplay={this.state.shouldDisplay} />
          <div className="bg-image"/>
          <main role="main" className="main">
            <img role="img" src={logo} className="logo" alt="Balanced LIFE Logo" />
            <h1 className="brand-name">Welcome to Balanced LIFE</h1>
            <p className="welcome-msg">
            </p>
          </main>
          <About />
          <TakeAction />
        </section>
    );
  }
}

export default App;
