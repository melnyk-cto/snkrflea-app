import { handleActions } from 'redux-actions';
import { cabinetActions } from './actions';

const initialState = {
    purchases: [],
    myStore: null
};

export const cabinetReducer = handleActions({
        [cabinetActions.setPurchasesList]: (state, { payload }) => ({
            ...state,
            purchases: [...payload],
        }),
        [cabinetActions.setMyStore]: (state, { payload }) => ({
            ...state,
            myStore: payload,
        }),
       
    },
    initialState,
);