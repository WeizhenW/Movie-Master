import { combineReducers } from 'redux';

// reducer to store all movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// reducer to store one movie returned from the server
//- initialize the start state
const initialOneMovieState = [{
    id: '',
    title: '',
    poster: '',
    description: '',
}]
//- create the reducer
const oneMovie = (state = initialOneMovieState, action) => {
    switch (action.type) {
        case 'SET_ONE_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

//reducer to store information back from omdb
const movieOmdb = (state = [], action) => {
    switch (action.type) {
        case 'SET_OMDB_Movie':
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
const oneMovieGenres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES_ONE_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

//reducer to store all genres per movie by using array agg
const allGenresPerMovie = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES_ARR_AGG':
            return action.payload;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    movies,
    oneMovie,
    allGenres,
    oneMovieGenres,
    allGenresPerMovie,
    movieOmdb,
})

export default rootReducer;