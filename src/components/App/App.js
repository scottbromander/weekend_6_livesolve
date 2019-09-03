import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import { HashRouter as Router, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import FeelingPage from '../pages/FeelingPage/FeelingPage';
import UnderstandPage from '../pages/UnderstandingPage/UnderstandPage';
import SupportedPage from '../pages/SupportedPage/SupportedPage';
import CommentsPage from '../pages/CommentsPage/CommentsPage';
import OverviewPage from '../pages/OverviewPage/OverviewPage';
import AdminPage from '../pages/AdminPage/AdminPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>

        <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/feeling" component={FeelingPage} />
          <Route exact path="/understanding" component={UnderstandPage} />
          <Route exact path="/supported" component={SupportedPage} />
          <Route exact path="/comments" component={CommentsPage} />
          <Route exact path="/overview" component={OverviewPage} />
          <Route exact path="/admin" component={AdminPage} />
        </Router>
      </div>
    );
  }
}

export default App;
