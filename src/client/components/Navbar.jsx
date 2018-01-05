import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='nav'>
        <div className="navbar-component">
          <div className="navbar area">
            <Link to='/' className="brand">LOGO</Link>
            <nav role="navigation" className="list">
              <Link to='/about' className="item -link">
                About Me
              </Link>
              <Link to='/projects' className="item -link">
                Projects
              </Link>
              <Link to='/resume' className="item -link">
                Resume
              </Link>
              <Link to='/contact' className="item -link">
                Contact Me
              </Link>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

/*
https://codepen.io/danbuda/pen/mAVALa
https://codepen.io/mrmlnc/pen/gpKbXM
 */