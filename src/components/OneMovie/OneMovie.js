import React, { Component } from 'react';
import { connect } from 'react-redux';


class OneMovie extends Component {
    handleClickPoster = () => {
        this.props.history.push(`/details/${this.props.movie.id}`);
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
