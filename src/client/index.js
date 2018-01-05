import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import '../assets/stylesheets/main.scss';
import { BrowserRouter } from 'react-router-dom';


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
/*particlesJS.load('particles-js', '../assets/particlesjs.json', function() {
  console.log('callback - particles.js config loaded');
});*/

ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render((
        <BrowserRouter>
          <NextApp/>
        </BrowserRouter>
      ),
      document.getElementById('root')
    );
  });
}