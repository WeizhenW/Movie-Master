import React, { Component } from 'react';
import { connect } from 'react-redux';

//material ui
import Grid from '@material-ui/core/Grid';

class OneMovie extends Component {
    handleClickPoster = () => {
        this.props.history.push(`/details/${this.props.movie.id}`);
    }

    render() {
        return (
            <>
                <Grid item sm={12} md={4}>
                <img src={this.props.movie.poster} onClick={this.handleClickPoster} />
                </Grid>
                <Grid item sm={12} md={8}>
                <h3>{this.props.movie.title}</h3>
                <p>{this.props.movie.description}</p>
                </Grid>
            </>
        );
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapReduxStateToProps)(OneMovie);
