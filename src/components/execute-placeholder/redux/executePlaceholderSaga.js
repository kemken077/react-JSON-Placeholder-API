import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

export const getPlaceholders = 'WATCH_GET_PLACEHOLDERS';
export const setPlaceholders = "SET_PLACEHOLDERS";


export const getPlaceholdersAction = () => ({
    type: getPlaceholders
});

export const setPlaceholdersAction = (placeholders) => ({
    type: setPlaceholders,
    placeholders
});

/**
 * <---- Enhancement ---->
 * TODO: getPlaceholdersApiCall could/should be in a different file.
 */
function* getPlaceholdersApiCall() {
    const data = yield axios.get('http://jsonplaceholder.typicode.com/users');
    yield put(setPlaceholdersAction(data.data));
}

function* setExecutePlaceholderSaga() {
    yield call(getPlaceholdersApiCall);
}

function* watchExecutePlaceholderSaga() {
    yield takeLatest(getPlaceholders, setExecutePlaceholderSaga);
}

export default watchExecutePlaceholderSaga;