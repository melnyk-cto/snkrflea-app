import { handleActions } from 'redux-actions';
import { authActions } from './actions';

const initialState = {
    registerModalShowing: false,
};

export const authReducer = handleActions({
        [authActions.showRegisterModal]: (state, {payload}) => ({
            ...state,
            registerModalShowing: payload,
        })
    },
    initialState,
);