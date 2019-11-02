import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header'
import Home from '../Home/Home'
import PageOne from '../PageOne/PageOne'
import PageTwo from '../PageTwo/PageTwo'
import PageThree from '../PageThree/PageThree'
import PageFour from '../PageFour/PageFour'
import Review from '../Review/Review'
import Success from '../Success/Success'
import Admin from '../Admin/Admin'

import { HashRouter as Router, Route } from 'react-router-dom'




class App extends Component {
  render() {
    return (
      <Router>

      <Header />

      <Route path="/" exact component={Home} />
      <Route path="/PageOne" component={PageOne} />
      <Route path="/PageTwo" component={PageTwo} />
      <Route path="/PageThree" component={PageThree} />
      <Route path="/PageFour" component={PageFour} />
      <Route path="/Review" component={Review} />
      <Route path="/Success" component={Success} />
      <Route path="/Admin" component={Admin} />
  
      </Router>
    );
  }
}

export default App;
