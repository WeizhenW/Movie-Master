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

import axios from 'axios';

//generator to get all movies
function* getAllMovies() {
    const allMoviesResponse = yield axios.get('/api/movies');
    yield put({
        type: 'SET_MOVIES',
        payload: allMoviesResponse.data,
    })
}

//generator to get one movie
function* getOneMovie(action) {
    const oneMovieResponse = yield axios.get(`/api/movies/${action.payload}`);
    yield put({
        type: 'SET_ONE_MOVIE',
        payload: oneMovieResponse.data,
    })
}

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_ALL_MOVIES', getAllMovies);
    yield takeEvery('FETCH_ONE_MOVIE', getOneMovie);

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store one movie returned from the server
const oneMovie = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ONE_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        oneMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
