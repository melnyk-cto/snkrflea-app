import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './rootReducer';
import  rootSaga  from './rootSaga';
import createSagaMiddleware from 'redux-saga'
import { loadState, saveState } from './localStorage'

const sagaMiddleware = createSagaMiddleware()
const persistedState = loadState();
  
export const store = createStore(rootReducer,persistedState,applyMiddleware(sagaMiddleware));

store.subscribe(() => {
    saveState(store.getState())
})

sagaMiddleware.run(rootSaga);
