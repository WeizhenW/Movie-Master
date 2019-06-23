import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './AdminComponent.css';

const styles = {
    table: {
        width: '50%',
        margin: '20px auto',
        fontSize: '16px',
        textAlign: 'center',
    },
    button: {
        marginLeft: 30,
    },
    paper: {
        width: '75%',
        margin: '20px auto',
        padding: 20,
    }
}

class AdminComponent extends Component {
    state = {
        genre: '',
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_ALL_GENRES'
        })
    };

    handleChange = (event) => {
        this.setState({
            genre: event.target.value,
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'POST_NEW_GENRE',
            payload: this.state,
        })
    }

    handleDelete = (event) => {
        console.log(event.target);
        this.props.dispatch({
            type: 'DELETE_GENRE_FROM_DB',
            payload: event.target.id,
        })
    }

    render() {
        return (
            <Paper style={styles.paper}>
                <TextField
                    placeholder="add genre"
                    variant="outlined"
                    onChange={this.handleChange} />

                <Button
                    variant="contained"
                    color="primary"
                    style={styles.button}
                    onClick={this.handleClick}>
                    Add
                </Button>
                <Table style={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Genre</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.reduxState.allGenres.map(genre => {
                            return <TableRow key={genre.id}>
                                <TableCell>{genre.name}</TableCell>
                                <TableCell><button className="deleteButton" id={genre.id} onClick={this.handleDelete}>X</button></TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapReduxStateToProps)(AdminComponent);
