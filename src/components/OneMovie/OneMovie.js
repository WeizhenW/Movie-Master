import React, { Component } from 'react';
import { connect } from 'react-redux';

import './OneMovie.css';

//material ui
import Grid from '@material-ui/core/Grid';

const styles = {
    grid: {
        paddingRight: 20,
    }
}

class OneMovie extends Component {
    handleClickPoster = () => {
        this.props.history.push(`/details/${this.props.movie.id}`);
    }

    render() {
        return (
            <>
                <Grid item sm={12} md={4}>
                <img className="poster" src={this.props.movie.poster} onClick={this.handleClickPoster} />
                </Grid>
                <Grid style={styles.grid} item sm={12} md={8}>
                <h3>{this.props.movie.title}</h3>
                <p>{this.props.movie.description}</p>
                <hr />
                </Grid>
            </>
        );
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapReduxStateToProps)(OneMovie);
