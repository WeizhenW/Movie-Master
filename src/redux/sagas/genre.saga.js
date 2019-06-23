import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

//generator to get genres for one movie
function* getGenresOneMovie(action) {
    try {
        const responseGenresOneMovie = yield axios.get(`/api/genres/${action.payload}`);
        yield put({
            type: 'SET_GENRES_ONE_MOVIE',
            payload: responseGenresOneMovie.data,
        })
    } catch (error) {
        console.log('error with getGenresOneMovie', error);
    }
}

//generator to get genres for all
function* getAllGenres() {
    try {
        const responseAllGenres = yield axios.get('/api/genres');
        yield put({
            type: 'SET_ALL_GENRES',
            payload: responseAllGenres.data,
        });
    } catch (error) {
        console.log('error with getAllGenres', error);
    }
}

//generator to add one genre to one movie
function* addGenreToMovie(action) {
    try {
        yield axios.post(`/api/genres/${action.payload.movieId}`, action.payload);
        yield put({
            type: 'FETCH_GENRES_ONE_MOVIE',
            payload: action.payload.movieId,
        })
    } catch (error) {
        console.log('error with addGenreToMovie', error);
    }
}

//generator to remove one genre from one movie
function* removeGenreFromMovie(action) {
    try {
        yield axios.delete(`/api/genres/${action.payload.movieId}/${action.payload.genreId}`);
        yield put({
            type: 'FETCH_GENRES_ONE_MOVIE',
            payload: action.payload.movieId,
        })
    } catch (error) {
        console.log('error with removeGenreFromMovie', error);
    }
}

//generator to get all genres per movie by using array agg
function* getAllGenresArrAgg() {
    const getAllGenresArrAggResponse = yield axios.get('/api/movies/allgenres');
    yield put({
        type: 'SET_GENRES_ARR_AGG',
        payload: getAllGenresArrAggResponse.data,
    })
}

//generator to post new genre to the db
function* postNewGenre(action) {
    try {
        yield axios.post('/api/genres/new', action.payload);
        yield put({
            type: 'FETCH_ALL_GENRES',
        })
    } catch (error) {
        console.log('error with postNewGenre', error);
    }
}

//function to delete genre from db table
function* deleteGenreFromDB(action) {
    try {
        yield axios.delete(`/api/genres/delete/${action.payload}`);
        yield put({
            type: 'FETCH_ALL_GENRES',
        })
    } catch (error) {
        console.log('error with deleteGenreFromDB', error);
    }
}

//create watcherSaga
function* watcherSaga() {
    yield takeEvery('FETCH_GENRES_ONE_MOVIE', getGenresOneMovie);
    yield takeEvery('FETCH_ALL_GENRES', getAllGenres);
    yield takeEvery('ADD_GENRE_TO_MOVIE', addGenreToMovie);
    yield takeEvery('REMOVE_GENRE_FROM_MOVIE', removeGenreFromMovie);
    yield takeEvery('GET_ALL_GENRES_ARR_AGG', getAllGenresArrAgg);
    yield takeEvery('POST_NEW_GENRE', postNewGenre);
    yield takeEvery('DELETE_GENRE_FROM_DB', deleteGenreFromDB);
}

export default watcherSaga;