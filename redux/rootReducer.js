import {combineReducers} from 'redux';

import {authReducer as auth} from './auth/reducer';
import {productsReducer as products} from './products/reducer';
import {generalReducer as general} from './general/reducer';
import {storeReducer as store} from './store/reducer';
import {cabinetReducer as cabinet} from './cabinet/reducer';


export const rootReducer = combineReducers({ auth,products, general, store, cabinet });