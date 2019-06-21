import React, { Component } from 'react';
import { connect } from 'react-redux';


class OneMovie extends Component {

  render() {
    return (
        <li>
        <img src={this.props.movie.poster} />
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
