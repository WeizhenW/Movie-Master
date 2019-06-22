import React, { Component } from 'react';
import { connect } from 'react-redux';
//router
import { HashRouter as Router, Route, Link } from 'react-router-dom'; //alias

import Detail from '../Detail/Detail';


class Edit extends Component {
    //initialize state with reducer state
    //oneMovie reducer state is an array with one obj
    state = {
        movie: this.props.reduxState.oneMovie[0],
    };

    //on click cancel button, go back to detail page
    //thanks to reducer the one movie information is still accessible
    handleCancel = () => {
        this.props.history.push('/details');
    }
    //function to get input and store information at local state
    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            movie: {
                ...this.state.movie,
                [propertyName]: event.target.value,
            }
        })
    }
    //function to dispatch the put route and redirect to /details
    handleSave = () => {
        this.props.dispatch({
            type: 'UPDATE_ONE_MOVIE',
            payload: this.state.movie,
        })
        this.props.history.push(`/details/${this.state.movie.id}`);
    }

    render() {
        return (
            <div>
                <input
                    placeholder="title"
                    value={this.state.movie.title}
                    onChange={this.handleChangeFor('title')} />
                <br />
                <textarea
                    // type="textarea" 
                    placeholder="description"
                    value={this.state.movie.description}
                    onChange={this.handleChangeFor('description')} />
                <br />
                <button onClick={this.handleCancel}>Cancel</button>
                <br />
                <button onClick={this.handleSave}>Save</button>

                <br />

                <img src={this.props.reduxState.oneMovie[0].poster} />
                <h3>{this.props.reduxState.oneMovie[0].title}</h3>
                <p>{this.props.reduxState.oneMovie[0].description}</p>
            </div>
        );
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapReduxStateToProps)(Edit);
