import React, { Component } from 'react';
import './Header.css';

//router
import { HashRouter as Router, NavLink, } from 'react-router-dom'; //alias

import Admin from '../Admin/Admin';

class Header extends Component {
    // Renders the entire app on the DOM
    render() {
        return (
                <div className="header">
                    <h1>Movie Master</h1>
                    <Router>
                        <nav>
                            <NavLink activeClassName="active" exact to="/">Home</NavLink>
                            <NavLink activeClassName="active" to="/admin" >Admin</NavLink >
                            <NavLink activeClassName="active" to="/omdbsearch" >Search OMDB</NavLink >
                        </nav>
                    </Router>
                </div>
        );
    }
}

export default Header;
