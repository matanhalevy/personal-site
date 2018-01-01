import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="navbar-component">
        <div className="navbar area">
          <a className="brand"><Link to='/'>LOGO</Link> </a>
          <nav role="navigation" className="list">
            <a className="item -link">
              <Link to='/about'>
                About Me
              </Link>
            </a>
            <a className="item -link">
              <Link to='/projects'>
                Projects
              </Link>
            </a>
            <a className="item -link">
              <Link to='/resume'>
                Resume
              </Link>
            </a>
            <a className="item -link">
              <Link to='/contact'>
                Contact Me
              </Link>
            </a>
          </nav>
        </div>
      </div>
    )
  }
}

/*
https://codepen.io/danbuda/pen/mAVALa
https://codepen.io/mrmlnc/pen/gpKbXM
 */