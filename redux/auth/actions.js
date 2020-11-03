import { createActions } from 'redux-actions';


export const authActions = createActions(
    {
        // Sync
        SHOW_REGISTER_MODAL: status => status,

        // Async
        SHOW_REGISTER_MODAL_ASYNC: void 0,

    },
    {
        prefix: 'Auth',
        namespace: '.',
    },
);
