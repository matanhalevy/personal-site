import React, { Component } from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

/* TODO:
* Wrap h4 and p onto same line
* particles js backdrop focus on right
* fix vertical scroll
*
 */

export default class Home extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="home-container">
        <div className='header-container'>
          <img src={'/src/assets/images/matan_headshot.jpg'} className='headshot'/>
          <Typist className="typist" cursor={{hideWhenDone: true}}>
            Hi there, welcome to my website!
          </Typist>
        </div>
        <div className="intro-container">
          <h4>Nice to meet you, I'm Matan Halevy.</h4>
          <p>
            I always hated the tell me about yourself question so bare with me. I love developing, statistics, dogs,
            photography, music, basketball, and travelling. I hate chicken liver.
            <br/> <br/>
            I'm a software developer at Amazon and a 2017 UBC Graduate where I studied Computer Science and Statistics.
          </p>
        </div>
        <div>
          <h2>Find me online on:</h2>
          <div className="platform-links">
            <a href="https://www.github.com/matanhalevy">
              <img src={'/src/assets/images/github.svg'} className='platform-img'/>
            </a>
            <a href="https://www.linkedin.com/in/mhalevy/">
              <img src={'/src/assets/images/linkedin.svg'} className='platform-img'/>
            </a>
            <a href="https://www.flickr.com/photos/mbh159/">
              <img src={'/src/assets/images/flickr.svg'} className='platform-img'/>
            </a>
          </div>
        </div>
      </div>
    );
  }
};

/*hmr:
hot reloads sometimes, not scss. console does hot reload the css indicating it gets a change.

 */