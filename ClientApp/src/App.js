import React, { Component } from 'react';
import LogoBackground from './components/LogoBackground';
import Landing from './components/Landing';



export default class App extends React.Component {
  static displayName = App.name;

  render () {
      return (
          <React.Fragment>
              <LogoBackground />
              <Landing />
          </React.Fragment>
    );
  }
}
