import { createActions } from 'redux-actions';


export const storeActions = createActions(
    {
        // Sync
        SET_SELECTED_STORE: store => store,

    },
    {
        prefix: 'Store',
        namespace: '.',
    },
);

