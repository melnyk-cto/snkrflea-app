import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga'
import authSaga from './auth/sagas'
import productsSaga from './products/sagas'

const sagaMiddleware = createSagaMiddleware()




  
export const store = createStore(rootReducer,compose(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(productsSaga);
