import {combineReducers} from 'redux';

import {authReducer as auth} from './auth/reducer';
import {productsReducer as products} from './products/reducer';

export const rootReducer = combineReducers({auth,products});