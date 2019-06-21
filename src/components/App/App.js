import React, { Component } from 'react';
import './App.css';

import MovieList from '../MovieList/MovieList';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <MovieList />
      </div>
    );
  }
}

export default App;
