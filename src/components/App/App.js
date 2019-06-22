import React, { Component } from 'react';
import './App.css';

//router
import { HashRouter as Router, Route, Link } from 'react-router-dom'; //alias

import MovieList from '../MovieList/MovieList';
import Detail from '../Detail/Detail';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={MovieList} />
          <Route path="/details" component={Detail} />
          <Route path="/edit" component={Edit} />
        </Router>
        {/* <MovieList /> */}
      </div>
    );
  }
}

export default App;
