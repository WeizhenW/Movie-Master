import React, { Component } from 'react';
import { connect } from 'react-redux';


class Search extends Component {
    state = {
        movieName: '',
    }

    handleNameInput = (event) => {
        // console.log(event.target.value);
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
            <div>
                <input 
                placeholder="search a movie" 
                value={this.state.movieName} 
                onChange={this.handleNameInput}></input>
                <button onClick={this.handleSearch}>Search</button>
                <button onClick={this.handleGoBack}>Go back</button>
            </div>
        );
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapReduxStateToProps)(Search);
