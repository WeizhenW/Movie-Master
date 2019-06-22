import React, { Component } from 'react';
import { connect } from 'react-redux';
import OneMovie from '../OneMovie/OneMovie';

class MovieList extends Component {
  //call getMovie function at page load
  componentDidMount() {
    this.getMovies();
    this.getAllGenresArrayAgg();
  }

  //function to dispatch action to get all movies from db
  getMovies = () => {
    this.props.dispatch({
      type: 'FETCH_ALL_MOVIES',
    })
  }
  //function to dispatch action to get all genres per movie from db
  getAllGenresArrayAgg = () => {
    this.props.dispatch({
      type: 'GET_ALL_GENRES_ARR_AGG'
    })
  }

  render() {
    return (
      <div>
        <h1>Movie Master</h1>
        <ul>
          {this.props.reduxState.movies.map(movie => <OneMovie history={this.props.history} key={movie.id} movie={movie} />)}
        </ul>

        {/* {JSON.stringify(this.props.reduxState.allGenresPerMovie)} */}
        {/* display movie genres by using array agg */}
        <ul>
          {this.props.reduxState.allGenresPerMovie.map(movie => {
            return <li key={movie.title}>{movie.title}
              <ul>
                {movie.genres.map(genre => {
                  return <li key={genre}>{genre}</li>
                })}
              </ul>
            </li>
          })}
        </ul>

      </div>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState,
});
export default connect(mapReduxStateToProps)(MovieList);
