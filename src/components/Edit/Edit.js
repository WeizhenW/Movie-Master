import React, { Component } from 'react';
import { connect } from 'react-redux';
//router
import { HashRouter as Router, Route, Link } from 'react-router-dom'; //alias

import Detail from '../Detail/Detail';


class Edit extends Component {

    state = {};

    componentDidMount() {
        this.setState({
            ...this.state,
            ...this.props.reduxState.oneMovie[0]
        })
    }

    handleCancel = () => {
        this.props.history.push('/details');
    }

    handleChangeFor = (propertyName) => (event) => {
        // console.log('handlechange', propertyName);
        // console.log(event.target.value);
        this.setState({
            [propertyName]: event.target.value,
        })
    }

    handleSave = () => {
        this.props.dispatch({
            type: 'UPDATE_ONE_MOVIE',
            payload: this.state,
        })
    }

  render() {
    return (
        <div>
            <input 
                placeholder="title" 
                value={this.state.title}
                onChange={this.handleChangeFor('title')}></input>
            <input
                // type="textarea" 
                placeholder="description"
                value={this.state.description}
                onChange={this.handleChangeFor('description')}></input>
            <button onClick={this.handleCancel}>Cancel</button>
            <button onClick={this.handleSave}>Save</button>
            {JSON.stringify(this.state)}

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
