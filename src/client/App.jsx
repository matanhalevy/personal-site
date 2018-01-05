import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import '../assets/stylesheets/main.scss';

import 'particles.js/particles';

const particlesJS = window.particlesJS;


export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    particlesJS.load('particles-js', '../src/assets/particlesjs.json', null);
  }

  render() {
    return (
      <div className="container">
        <Navbar/>
        <div>
          <div id="particles-js" className='particle-container'></div>
          <div className='overlay'>
            <Main/>
          </div>
        </div>
      </div>
    );
  }
};