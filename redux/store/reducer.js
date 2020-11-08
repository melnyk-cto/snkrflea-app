import { handleActions } from 'redux-actions';
import { storeActions } from './actions';

const initialState = {
    selectedStore: null,
};

export const storeReducer = handleActions({
        [storeActions.setSelectedStore]: (state, { payload }) => ({
            ...state,
            selectedStore: {...payload},
        }),
       
    },
    initialState,
);