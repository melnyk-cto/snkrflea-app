import { handleActions } from 'redux-actions';
import { cabinetActions } from './actions';

const initialState = {
    purchases: [],
    myStore: [],
    storeCreated: false,
    billings: []
};

export const cabinetReducer = handleActions({
        [cabinetActions.setPurchasesList]: (state, {payload}) => ({
            ...state,
            purchases: [...payload],
        }),
        [cabinetActions.setMyStore]: (state, {payload}) => ({
            ...state,
            myStore: payload,
        }),
        [cabinetActions.setHistoryBilling]: (state, {payload}) => ({
            ...state,
            billings: payload,
        }),
        [cabinetActions.setMyStoreSuccessCreated]: (state, {payload}) => ({
            ...state,
            storeCreated: payload,
        }),

    },
    initialState,
);