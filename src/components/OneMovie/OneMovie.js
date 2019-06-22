import React, { Component } from 'react';
import { connect } from 'react-redux';


class OneMovie extends Component {
    handleClickPoster = () => {
        //dispatch action to trigger the get request on one movie information from db
        this.props.dispatch({
            type: 'FETCH_ONE_MOVIE',
            payload: this.props.movie.id,
        })
        //dispatch action to trigger the get request on genres for one movie from db
        this.props.dispatch({
            type: 'FETCH_GENRES_ONE_MOVIE',
            payload: this.props.movie.id,
        })
        //reroute to /details
        this.props.history.push('/details');
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
