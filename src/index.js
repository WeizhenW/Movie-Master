import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
//import axios
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
    } catch(error) {
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
    } catch(error) {
        console.log('error with putOneMovie', error);
    }
}

//generator to get genres for one movie
function* getGenresOneMovie(action) {
    try {
        const responseGenresOneMovie = yield axios.get(`/api/genres/${action.payload}`);
        // console.log(responseGenresOneMovie);
        yield put({
            type: 'SET_GENRES_ONE_MOVIE',
            payload: responseGenresOneMovie.data,
        })
    } catch(error) {
        console.log('error with getGenresOneMovie', error);
    }
}

//generator to get genres for all
function* getAllGenres() {
    try{
        const responseAllGenres = yield axios.get('/api/genres');
        yield put ({
            type: 'SET_ALL_GENRES',
            payload: responseAllGenres.data,
        })
    } catch(error) {
        console.log('error with getAllGenres', error);
    }
}

//generator to add one genre to one movie
function* addGenreToMovie(action) {
    try{
        yield axios.post(`/api/genres/${action.payload.movieId}`, action.payload);
        yield put({
            type:'FETCH_GENRES_ONE_MOVIE',
            payload: action.payload.movieId,
        })
    } catch(error) {
        console.log('error with addGenreToMovie', error);
    }
}

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_ALL_MOVIES', getAllMovies);
    yield takeEvery('FETCH_ONE_MOVIE', getOneMovie);
    yield takeEvery('UPDATE_ONE_MOVIE', putOneMovie);
    yield takeEvery('FETCH_GENRES_ONE_MOVIE', getGenresOneMovie);
    yield takeEvery('FETCH_ALL_GENRES', getAllGenres);
    yield takeEvery('ADD_GENRE_TO_MOVIE', addGenreToMovie);

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// reducer to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// reducer to store one movie returned from the server
//initialize the start state
const initialOneMovieState = [{
    id: '',
    title: '',
    poster: '',
    description: '',
}]

const oneMovie = (state = initialOneMovieState, action) => {
    switch (action.type) {
        case 'SET_ONE_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

// reducer to store the genres for all movies
const allGenres = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_GENRES':
            return action.payload;
        default:
            return state;
    }
}

//reducer to store the genres for one movie
const oneMovieGenres = (state=[], action) => {
    switch(action.type) {
        case 'SET_GENRES_ONE_MOVIE':
            return action.payload;
        default:
            return state;
    }
}



// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        allGenres,
        oneMovie,
        oneMovieGenres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
