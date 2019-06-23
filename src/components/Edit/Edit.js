import React, { Component } from 'react';
import { connect } from 'react-redux';
//router
import { HashRouter as Router, Route, Link } from 'react-router-dom'; //alias

import Detail from '../Detail/Detail';

//material ui
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = {
    card: {
        width: '50%',
        margin: '20px auto',
        padding: 20,
    },
    button: {
        margin: '20px',
    },
    textfield: {
        margin: '20px auto',
    }
}

class Edit extends Component {
    //initialize state with reducer state
    //oneMovie reducer state is an array with one obj
    state = {
        movie: this.props.reduxState.oneMovie[0],
    };

    //on click cancel button, go back to detail page
    //thanks to reducer the one movie information is still accessible
    handleCancel = () => {
        this.props.history.push(`/details/${this.state.movie.id}`);
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
                <Card style={styles.card}>
                    <TextField style={styles.textfield}
                        fullWidth
                        variant="outlined"
                        placeholder="title"
                        value={this.state.movie.title}
                        onChange={this.handleChangeFor('title')} />
                    <br />
                    <TextField style={styles.textfield}
                        fullWidth
                        multiline
                        variant="outlined"
                        placeholder="description"
                        value={this.state.movie.description}
                        onChange={this.handleChangeFor('description')} />
                    <br />
                    <Button style={styles.button} variant="outlined" color="secondary" onClick={this.handleCancel}>Cancel</Button>
                    <Button style={styles.button} variant="outlined" color="primary" onClick={this.handleSave}>Save</Button>
                </Card>
            </div>
        );
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapReduxStateToProps)(Edit);
