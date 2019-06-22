import React, { Component } from 'react';
import { connect } from 'react-redux';
//router
import { HashRouter as Router, Route, Link } from 'react-router-dom'; //alias

import Edit from '../Edit/Edit';


class Detail extends Component {
    //initialize local state with router params and empty string
    state = {
        movieId: this.props.match.params.id,
        genreId: '',
    }
    //after component mounted do a few dispatches
    componentDidMount() {
        //get the movie details (movie id decided by the params id)
        this.props.dispatch({
            type: 'FETCH_ONE_MOVIE',
            payload: this.props.match.params.id,
        })
        //get the genres for that particular movie (movie id decided by the params id)
        this.props.dispatch({
            type: 'FETCH_GENRES_ONE_MOVIE',
            payload: this.props.match.params.id,
        })
        //get all the genres for the ddl
        this.props.dispatch({
            type: 'FETCH_ALL_GENRES',
        })
    }

    handleChangeGenre = (event) => {
        this.setState({
            ...this.state,
            genreId: event.target.value,
        })
    }
    
    handleAddGenre = () => {
        this.props.dispatch({
            type: 'ADD_GENRE_TO_MOVIE',
            payload: this.state,
            }
        )
    }

        
    

    render() {
        return (
            <div>
                {/* {JSON.stringify(this.props.match)} */}
                <Router>
                    <Route path="/edit" component={Edit} />
                </Router>
                {/* buttons */}
                <Link to="/"><button>Back</button></Link>
                <Link to="/edit"><button>Edit</button></Link>
                <br />
                <br />
                <img src={this.props.reduxState.oneMovie[0].poster} />
                <h3>{this.props.reduxState.oneMovie[0].title}</h3>
                <p>{this.props.reduxState.oneMovie[0].description}</p>

                {/* below display the genres */}
                <h3>This Movie's Genres</h3>
                <ul>
                    {this.props.reduxState.oneMovieGenres.map(genre => {
                        return <li key={genre.genre_id}>{genre.name}</li>
                    })}
                </ul>
                <h3>All Genres</h3>
                <select onChange={this.handleChangeGenre}>
                    <option selected disabled>Please select</option>
                {this.props.reduxState.allGenres.map(genre => {
                        return <option value={genre.id} key={genre.id}>{genre.name}</option>
                    })}
                </select>
                <button onClick={this.handleAddGenre}>Add Genre</button>
                <ul>
                    
                </ul>
            </div>
        );
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapReduxStateToProps)(Detail);
