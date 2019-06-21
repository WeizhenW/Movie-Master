import React, { Component } from 'react';
import { connect } from 'react-redux';


class Detail extends Component {

  render() {
    return (
        <div>
            <button>Back</button>
            <button>Edit</button>
            <img src={this.props.oneMovie.poster} onClick={this.handleClickPoster} />
            <h3>{this.props.oneMovie.title}</h3>
            <p>{this.props.oneMovie.description}</p>
        </div>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapReduxStateToProps)(Detail);
