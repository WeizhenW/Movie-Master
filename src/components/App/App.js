import React, { Component } from 'react';
import './App.css';

//router
import { HashRouter as Router, Route, Link } from 'react-router-dom'; //alias

import MovieList from '../MovieList/MovieList';
import Detail from '../Detail/Detail';
import Edit from '../Edit/Edit';
import Admin from '../Admin/Admin';
import Header from '../Header/Header';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
       <Header />
        <Router>
          <Route path="/" exact component={MovieList} />
          <Route path="/details/:id" exact component={Detail} />
          <Route path="/edit" component={Edit} />
          <Route path="/admin" component={Admin} />
        </Router>
        {/* <MovieList /> */}
      </div>
    );
  }
}

export default App;
