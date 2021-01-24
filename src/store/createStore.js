import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import executePlaceholdersReducer from '../components/execute-placeholder/redux/executePlaceholderReducer';
import executePlaceholderSaga from '../components/execute-placeholder/redux/executePlaceholderSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(executePlaceholdersReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(executePlaceholderSaga);


export default store;
