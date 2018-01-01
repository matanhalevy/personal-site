import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import '../assets/stylesheets/main.scss';
import { BrowserRouter } from 'react-router-dom';

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