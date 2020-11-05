import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './rootReducer';
import { enhancedStore } from './middleware/core';
import createSagaMiddleware from 'redux-saga'
import mySaga from './auth/sagas'

const sagaMiddleware = createSagaMiddleware()


// convert object to string and store in localStorage
function saveToLocalStorage(state) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }
  
  // load string from localStarage and convert into an Object
  // invalid output must be undefined
  function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("persistantState");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (e) {
      return { };
    }
}

  
export const store = createStore(rootReducer,compose(applyMiddleware(sagaMiddleware)));

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

sagaMiddleware.run(mySaga)
