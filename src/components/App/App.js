import React, { Component } from 'react';
import './App.css';

//router
import { HashRouter as Router, Route, Link } from 'react-router-dom'; //alias

import MovieList from '../MovieList/MovieList';
import Detail from '../Detail/Detail';
import Edit from '../Edit/Edit';
import Admin from '../Admin/Admin';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

//material ui
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

const ourTheme = createMuiTheme({
  palette: { 
    primary: {
      main: '#3a4660',
    },
    secondary: {
      main: '#ed8a63', 
    },
    error: {
      main: '#c62828',
    }
  }

})

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <MuiThemeProvider theme={ourTheme}>

      <div className="App">
        <Header />
        <Router>
          <Route path="/" exact component={MovieList} />
          <Route path="/details/:id" exact component={Detail} />
          <Route path="/edit" component={Edit} />
          <Route path="/admin" component={Admin} />
        </Router>
        {/* <MovieList /> */}
        <Footer />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
