import { createActions } from 'redux-actions';


export const cabinetActions = createActions(
    {
        // Sync
        SET_PURCHASES_LIST: list => list,
        SET_MY_STORE: store => store,
        SET_HISTORY_BILLING: history => history,

    },
    {
        prefix: 'Cabinet',
        namespace: '.',
    },
);

