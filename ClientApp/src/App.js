import React, { Component } from 'react';
import LogoBackground from './components/LogoBackground';
import Landing from './components/Landing';
import Projects from './components/Projects';
import './css/App.css';



export default class App extends React.Component {
  static displayName = App.name;

  render () {
      return (
          <React.Fragment>
              <LogoBackground />
              <div className="app-container center-all">
                  <div className="app-wrap">
                      <Landing />
                      <Projects />
                  </div>
              </div> 
          </React.Fragment>
    );
  }
}
