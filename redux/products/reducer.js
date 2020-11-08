import { handleActions } from 'redux-actions';
import { productsActions } from './actions';

const initialState = {
    items: [],
    product: null,
    marketPlace: []
};

export const productsReducer = handleActions({
        [productsActions.addNewProduct]: (state, {payload}) => ({
            ...state,
            items: [...state.items,payload],
        }),
        [productsActions.setAllProducts]: (state, {payload}) => ({
            ...state,
            items: [...payload],
        }),
        [productsActions.setSelectedProduct]: (state, {payload}) => ({
            ...state,
            product: {...payload},
        }),
        [productsActions.setMarketPlace]: (state, {payload}) => ({
            ...state,
            marketPlace: [...payload],
        }),
    },
    initialState,
);