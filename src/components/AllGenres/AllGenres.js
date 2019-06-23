import React, { Component } from 'react';
import { connect } from 'react-redux';

//material ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = {
    tableHead: {
        fontSize: 20,
        textAlign: 'center',
    },
    tableBody1: {
        fontSize: 16,
        width: '30%',
    },
    tableBody2: {
        fontSize: 16,
        width: '70%',
    }
}
class AllGenres extends Component {
    render() {
        return (
            <div>
                <h3>All Genres per Movie</h3>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={styles.tableHead}>Movie</TableCell>
                            <TableCell style={styles.tableHead}>Genres</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.reduxState.allGenresPerMovie.map(movie => {
                            return <TableRow key={movie.title}>
                                <TableCell style={styles.tableBody1}>{movie.title}</TableCell>
                                <TableCell style={styles.tableBody2}>
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
