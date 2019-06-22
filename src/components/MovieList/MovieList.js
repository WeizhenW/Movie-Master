import React, { Component } from 'react';
import { connect } from 'react-redux';
//component
import OneMovie from '../OneMovie/OneMovie';
import Search from '../Search/Search';
import './MovieList.css'
//material ui
import Grid from '@material-ui/core/Grid';
//router
import { Link } from 'react-router-dom'; //alias

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
        <Search />
        <Link to="/admin">Go to Admin</Link>
        <Grid container spacing={2}>
          <Grid item sm={12} md={8}>
            <Grid container>
              {this.props.reduxState.movies.map(movie => <OneMovie history={this.props.history} key={movie.id} movie={movie} />)}
            </Grid>
          </Grid>
          <Grid item sm={12} md={4}>
            {/* display movie genres by using array agg */}
            <h3>All Genres per Movie</h3>
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
          </Grid>
        </Grid>
      </div>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState,
});
export default connect(mapReduxStateToProps)(MovieList);
