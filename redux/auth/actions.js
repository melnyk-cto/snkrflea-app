import { createActions } from 'redux-actions';


export const authActions = createActions(
    {
        // Sync
        SHOW_REGISTER_MODAL: status => status,
        SHOW_LOGIN_MODAL: status => status,
        SHOW_PREMIUM_PAYMENT_MODAL: status => status,
        SHOW_PLANS_MODAL: status => status,
        SHOW_REGISTER_PREMIUM_MODAL: status => status,

        // Async
        SHOW_REGISTER_MODAL_ASYNC: void 0,
        SHOW_LOGIN_MODAL_ASYNC: void 0,
        SHOW_PREMIUM_PAYMENT_MODAL_ASYNC: void 0,
        SHOW_PLANS_MODAL_ASYNC: void 0,
        SHOW_REGISTER_PREMIUM_MODAL_ASYNC: void 0,

    },
    {
        prefix: 'Auth',
        namespace: '.',
    },
);
