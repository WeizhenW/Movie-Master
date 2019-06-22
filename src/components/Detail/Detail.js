import React, { Component } from 'react';
import { connect } from 'react-redux';
//router
import { HashRouter as Router, Route, Link } from 'react-router-dom'; //alias

import Edit from '../Edit/Edit';


class Detail extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_ONE_MOVIE',
            payload: this.props.match.params.id,
        })
        this.props.dispatch({
            type: 'FETCH_GENRES_ONE_MOVIE',
            payload: this.props.match.params.id,
        })
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
            <ul>
                {this.props.reduxState.oneMovieGenres.map(genre => {
                   return <li key={genre.genre_id}>{genre.name}</li>
                })}
            </ul>
        </div>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapReduxStateToProps)(Detail);
