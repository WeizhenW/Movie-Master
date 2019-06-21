import React, { Component } from 'react';
import { connect } from 'react-redux';
import { throwStatement } from '@babel/types';


class OneMovie extends Component {
    handleClickPoster = () => {
        console.log('poster clicked with title', this.props.movie.title );
        this.props.dispatch({
            type: 'FETCH_ONE_MOVIE',
            payload: this.props.movie.id,
        })
    }

  render() {
    return (
        <li>
        <img src={this.props.movie.poster} onClick={this.handleClickPoster} />
        <h3>{this.props.movie.title}</h3>
        <p>{this.props.movie.description}</p>
        </li>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapReduxStateToProps)(OneMovie);
