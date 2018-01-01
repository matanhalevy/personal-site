import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import '../assets/stylesheets/main.scss';

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <Main />
      </div>
    );
  }
};