import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Search.css';

//material ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Search extends Component {
    state = {
        movieName: '',
    }

    handleNameInput = (event) => {
        this.setState({
            movieName: event.target.value,
        })
    }

    handleSearch = () => {
        this.props.dispatch({
            type: 'GET_SEARCH_RESULT',
            payload: this.state.movieName,
        })
    };

    handleGoBack = () => {
        this.props.dispatch({
            type: 'FETCH_ALL_MOVIES',
          })
    }

    render() {
        return (
            <div className="searchDiv">
                <TextField 
                variant="outlined"
                placeholder="search a movie" 
                value={this.state.movieName} 
                onChange={this.handleNameInput}></TextField>
                <Button variant="contained" color="primary" onClick={this.handleSearch}>Search</Button>
                <Button variant="contained" color="secondary" onClick={this.handleGoBack}>Go back</Button>
            </div>
        );
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapReduxStateToProps)(Search);
