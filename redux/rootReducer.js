import {combineReducers} from 'redux';

import {authReducer as auth} from './auth/reducer';
import {productsReducer as products} from './products/reducer';
import {generalReducer as general} from './general/reducer';
import {storeReducer as store} from './store/reducer';


export const rootReducer = combineReducers({ auth,products, general, store });