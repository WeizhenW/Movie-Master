import React, { Component } from 'react';
import { connect } from 'react-redux';
//router
import { HashRouter as Router, Route, Link } from 'react-router-dom'; //alias

import Edit from '../Edit/Edit';

import './Detail.css';

//material ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';



const styles = {
    card: {
        width: '60%',
        margin: '20px auto',
        padding: 10,
    },
    button: {
        margin: '20px',
    },
    grid: {
        width: '90%',
        margin: '20px auto',
    },
    menuItem: {
        width: 100,
    }
}


class Detail extends Component {
    //initialize local state with router params and empty string
    state = {
        movieId: this.props.match.params.id,
        genreId: '',
    }
    //after component mounted do a few dispatches
    componentDidMount() {
        //get the movie details (movie id decided by the params id)
        this.props.dispatch({
            type: 'FETCH_ONE_MOVIE',
            payload: this.props.match.params.id,
        })
        //get the genres for that particular movie (movie id decided by the params id)
        this.props.dispatch({
            type: 'FETCH_GENRES_ONE_MOVIE',
            payload: this.props.match.params.id,
        })
        //get all the genres for the ddl
        this.props.dispatch({
            type: 'FETCH_ALL_GENRES',
        })
    }
    //function to get the change
    handleChangeGenre = (event) => {
        this.setState({
            ...this.state,
            genreId: event.target.value,
        })
    }
    //function to dispatch to trigger the post route
    handleAddGenre = () => {
        this.props.dispatch({
            type: 'ADD_GENRE_TO_MOVIE',
            payload: this.state,
        }
        )
    }
    //function to dispatch to trigger the delete route
    handleDeleteGenre = (event) => {
        console.log(event.target)
        this.props.dispatch({
            type: 'REMOVE_GENRE_FROM_MOVIE',
            payload: {
                movieId: this.props.match.params.id,
                genreId: event.target.id,
            }
        })
    }

    render() {
        return (
            <div>
                <Router>
                    <Route path="/edit" component={Edit} />
                </Router>
                {/* buttons */}
                <Card style={styles.card}>
                    <Grid container style={styles.grid}>
                        <Grid item sm={12} md={8}>
                            <CardMedia>
                                <img src={this.props.reduxState.oneMovie[0].poster} />
                            </CardMedia>
                            <CardContent>

                                <h3>{this.props.reduxState.oneMovie[0].title}</h3>
                                <p>{this.props.reduxState.oneMovie[0].description}</p>
                            </CardContent>

                            <Link to="/"><Button style={styles.button} variant="outlined" color="primary">Back</Button></Link>
                            <Link to="/edit"><Button style={styles.button} variant="outlined" color="secondary">Edit</Button></Link>
                        </Grid>

                        {/* below display the genres */}
                        <Grid item sm={12} md={4}>
                            <h3>Add New Genres:</h3>

                            {/* create ddl */}
                            <FormControl>
                                <Select
                                    value={this.state.genreId}
                                    onChange={this.handleChangeGenre}>
                                    {/* default selection at page load => disabled so that won't be selected */}
                                    <MenuItem value=""><em></em></MenuItem>
                                    {this.props.reduxState.allGenres.map(genre => {
                                        // value used to pass the selected genre id to server
                                        return <MenuItem style={styles.menuItem} value={genre.id} key={genre.id}>{genre.name}</MenuItem>
                                    })}
                                </Select>
                                <Button style={styles.button} onClick={this.handleAddGenre} variant="contained" color="primary">Add</Button>
                            </FormControl>
                            <p>Click genre tag to remove</p>
                            <br />
                            {this.props.reduxState.oneMovieGenres.map(genre => {
                                return <button
                                    // display genre name
                                    key={genre.genre_id}
                                    // button click to delete
                                    onClick={this.handleDeleteGenre}
                                    id={genre.genre_id}
                                    className="genreTag">
                                    {genre.name}
                                </button>
                            })}


                        </Grid>
                    </Grid>


                    <br />
                    <br />
                </Card>
            </div>
        );
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapReduxStateToProps)(Detail);
