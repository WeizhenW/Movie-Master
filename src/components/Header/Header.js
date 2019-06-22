import React, { Component } from 'react';
import './Header.css';

//router
import { HashRouter as Router, NavLink, } from 'react-router-dom'; //alias

import Admin from '../Admin/Admin';

class App extends Component {
    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <div className="header">
                    <h1>Movie Master</h1>
                    <Router>
                        <nav>
                            <NavLink activeClassName="active" exact to="/">Home</NavLink>
                            <NavLink activeClassName="active" to="/admin" >Admin</NavLink >
                        </nav>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
