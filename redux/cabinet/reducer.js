import { handleActions } from 'redux-actions';
import { cabinetActions } from './actions';

const initialState = {
    purchases: [],
};

export const cabinetReducer = handleActions({
        [cabinetActions.setPurchasesList]: (state, { payload }) => ({
            ...state,
            purchases: [...payload],
        }),
       
    },
    initialState,
);