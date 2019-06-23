import { all } from 'redux-saga/effects';
import movieSaga from './movie.saga';
import genreSaga from './genre.saga';

function* rootSaga() {
    yield all([
        movieSaga(),
        genreSaga()
    ])
}

export default rootSaga;