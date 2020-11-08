import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './rootReducer';
import  rootSaga  from './rootSaga';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

  
export const store = createStore(rootReducer,compose(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(rootSaga);
