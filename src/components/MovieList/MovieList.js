import React, { Component } from 'react';
import { connect } from 'react-redux';
//component
import OneMovie from '../OneMovie/OneMovie';
import Search from '../Search/Search';
import AllGenres from '../AllGenres/AllGenres';
import './MovieList.css'
//material ui
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';


const styles = {
  card: {
    width: '80%',
    margin: '20px auto',
  },
  paper: {
    width: '78%',
    margin: '20px auto',
    padding: 20,
  }
}
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
        <Card style={styles.card}>
        <Search />
        </Card>
        <Paper style={styles.paper}>
        <Grid container spacing={3}>
          <Grid item sm={12} md={8}>
            <Grid container>
              {this.props.reduxState.movies.map(movie => <OneMovie history={this.props.history} key={movie.id} movie={movie} />)}
            </Grid>
          </Grid>
          <Grid item sm={12} md={4}>
            {/* display movie genres by using array agg */}
            <AllGenres />
          </Grid>
        </Grid>
        </Paper>
      </div>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState,
});
export default connect(mapReduxStateToProps)(MovieList);
