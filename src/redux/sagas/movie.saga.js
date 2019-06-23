import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

//generator to get all movies
function* getAllMovies() {
    try {
        const allMoviesResponse = yield axios.get('/api/movies');
        yield put({
            type: 'SET_MOVIES',
            payload: allMoviesResponse.data,
        })
    } catch (error) {
        console.log('error with getAllMovies', error);
    }
}

//generator to get one movie
function* getOneMovie(action) {
    try {
        const oneMovieResponse = yield axios.get(`/api/movies/${action.payload}`);
        yield put({
            type: 'SET_ONE_MOVIE',
            payload: oneMovieResponse.data,
        })
    } catch (error) {
        console.log('error with getOneMovie', error);
    }
}

//generator to update one movie
function* putOneMovie(action) {
    try {
        yield axios.put('/api/movies', action.payload)
        yield put({
            type: 'FETCH_ONE_MOVIE',
            payload: action.payload.id,
        })
    } catch (error) {
        console.log('error with putOneMovie', error);
    }
}

//generator to get one specific movie
function* searchOneMovie(action) {
    try {
        console.log(action);
        const oneMovieResponse = yield axios.get(`/api/movies/search?title=${action.payload}`)
        console.log(oneMovieResponse);
        yield put({
            type: 'SET_MOVIES',
            payload: oneMovieResponse.data,
        })
    } catch (error) {
        console.log('error with getAllMovies', error);
    }
}

//create watcherSaga
function* watcherSaga() {
    yield takeEvery('FETCH_ALL_MOVIES', getAllMovies);
    yield takeEvery('FETCH_ONE_MOVIE', getOneMovie);
    yield takeEvery('UPDATE_ONE_MOVIE', putOneMovie);
    yield takeEvery('GET_SEARCH_RESULT', searchOneMovie);
}

export default watcherSaga;