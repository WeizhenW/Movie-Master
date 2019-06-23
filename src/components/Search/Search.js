import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Search.css';

//material ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import SearchIcon from '@material-ui/icons/Search';



const styles = {
    button: {
        margin: 20,
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        marginTop: 10,
        marginLeft: 10,
        color: 'blue',

    }
}
class Search extends Component {
    state = {
        movieName: '',
    }

    handleNameInput = (event) => {
        this.setState({
            movieName: event.target.value,
        })
    }

    handleSearch = () => {
        this.props.dispatch({
            type: 'GET_SEARCH_RESULT',
            payload: this.state.movieName,
        })
    };

    handleGoBack = () => {
        this.props.dispatch({
            type: 'FETCH_ALL_MOVIES',
          })
    }

    render() {
        return (
            <div className="searchDiv">
                {/* <SearchIcon style={styles.search}/> */}
                <TextField 
                variant="outlined"
                placeholder="search a movie by title" 
                value={this.state.movieName} 
                onChange={this.handleNameInput}
                fullWidth></TextField>
                <br />
                <Button style={styles.button} variant="contained" color="primary" onClick={this.handleSearch}>Search</Button>
                <Button style={styles.button} variant="contained" color="secondary" onClick={this.handleGoBack}>Go back</Button>
            </div>
        );
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapReduxStateToProps)(Search);
