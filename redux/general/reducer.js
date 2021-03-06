import { handleActions } from 'redux-actions';
import { generalActions } from './actions';

const initialState = {
    isLoading: false,
};

export const generalReducer = handleActions({
        [generalActions.showLoading]: (state, {payload}) => ({
            ...state,
            isLoading: payload,
        }),

    },
    initialState,
);