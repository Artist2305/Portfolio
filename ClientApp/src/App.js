import React, { Component } from 'react';
import LogoBackground from './components/LogoBackground';


export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <LogoBackground />
    );
  }
}
