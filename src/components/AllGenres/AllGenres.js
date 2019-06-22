import React, { Component } from 'react';
import { connect } from 'react-redux';

//material ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = {
    table: {
        margin: 20,
    }
}
class AllGenres extends Component {
    render() {
        return (
            <div>
                <h3>All Genres per Movie</h3>
                <Table style={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Movie</TableCell>
                            <TableCell>Genres</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.reduxState.allGenresPerMovie.map(movie => {
                            return <TableRow key={movie.title}>
                                <TableCell>{movie.title}</TableCell>
                                <TableCell>
                                    {movie.genres.map(genre => {
                                        return <li key={genre}>{genre}</li>
                                    })}
                                </TableCell>
                            </TableRow>

                        })}
                    </TableBody>
                </Table>
            </div>


        );
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapReduxStateToProps)(AllGenres);
