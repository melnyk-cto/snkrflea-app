import { createActions } from 'redux-actions';


export const productsActions = createActions(
    {
        // Sync
        ADD_NEW_PRODUCT: product => product,
        SET_ALL_PRODUCTS: products => products,
        SET_SELECTED_PRODUCT: product => product,
        SET_USER_PRODUCT_ERROR: product => product,

        SET_MARKET_PLACE: list => list,

        ADD_NEW_PRODUCT_REQUEST: body => body
    },
    {
        prefix: 'Products',
        namespace: '.',
    },
);

