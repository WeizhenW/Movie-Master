import React, { Component } from 'react';
import { connect } from 'react-redux';

//material ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const styles = {
    card: {
        margin: '20px auto',
        width: '60%',
        padding: 20
    }
}

class OmdbSearch extends Component {
    state = {
        title: '',
        display: false,
    }

    handleChange = (event) => {
        this.setState({
            title: event.target.value,
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'GET_OMDB_RESULT',
            payload: this.state.title,
        })
        this.setState({
            display: true,
        })
    }

    render() {
        return (
            <div>
                <Card style={styles.card}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="search OMDB by movie title"
                        onChange={this.handleChange} />
                    <br />
                    <br />
                    <Button variant="contained" color="primary" onClick={this.handleClick}>Search OMDB</Button>

                    {this.state.display ?
                        <>
                            {/* <pre> */}
                            {/* {JSON.stringify(this.props.reduxState.movieOmdb, null, 2)} */}
                            {/* </pre> */}
                            <br />

                            <h3>{this.props.reduxState.movieOmdb.Title}</h3>
                            <img src={this.props.reduxState.movieOmdb.Poster}></img>
                            <p>Year: {this.props.reduxState.movieOmdb.Year}</p>
                            <p>Released Date: {this.props.reduxState.movieOmdb.Released}</p>
                            <p>Director: {this.props.reduxState.movieOmdb.Director}</p>
                        </>
                        :
                        <>
                        </>

                    }
                    <br />

                </Card>


            </div>
        );
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapReduxStateToProps)(OmdbSearch);
