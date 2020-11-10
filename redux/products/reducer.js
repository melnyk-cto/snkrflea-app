import { handleActions } from 'redux-actions';
import { productsActions } from './actions';

const initialState = {
    items: [],
    error: false,
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
        [productsActions.setUserProductError]: (state, {payload}) => ({
            ...state,
            error: payload,
        }),
    },
    initialState,
);