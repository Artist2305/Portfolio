import React, { Component } from 'react';
import LogoBackground from './components/LogoBackground';
import Landing from './components/Landing';
import Projects from './components/Projects';
import LastestOnBlog from './components/LastestOnBlog';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import './css/App.css';
import Logo from './components/Logo';
import NavButton from './components/NavButton';


export default class App extends React.Component {
  static displayName = App.name;

  render () {
      return (
          <React.Fragment>
              <LogoBackground />
              <div className="app-container center-all">
                  <div className="app-wrap">
                      <Logo />
                      <NavButton />
                      <div id="app-scroll-area">
                          <Landing />
                          <Projects />
                          <AboutMe />
                          <LastestOnBlog />
                          <ContactMe />
                          <Footer />
                      </div> 
                  </div>
              </div> 
          </React.Fragment>
    );
  }
}
