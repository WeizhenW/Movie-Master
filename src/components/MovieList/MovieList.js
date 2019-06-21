import React, { Component } from 'react';
import { connect } from 'react-redux';
import OneMovie from '../OneMovie/OneMovie';

class MovieList extends Component {
    //call getMovie function at page load
    componentDidMount() {
        this.getMovies();
    }

    //function to dispatch action to call generator function
    getMovies = () => {
        this.props.dispatch({
            type: 'FETCH_ALL_MOVIES',
        })
    }


  render() {
    return (
      <div>
        <pre>
            {JSON.stringify(this.props.reduxState.movies)}
        </pre>
        <ul>
            {this.props.reduxState.movies.map(movie => <OneMovie key={movie.id} movie={movie} />)}
        </ul>
      </div>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapReduxStateToProps)(MovieList);
