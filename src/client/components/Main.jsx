import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume'

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/resume' component={Resume}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </main>
  )
};

export default Main;

//https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf