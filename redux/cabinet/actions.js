import { createActions } from 'redux-actions';


export const cabinetActions = createActions(
    {
        // Sync
        SET_PURCHASES_LIST: list => list,

    },
    {
        prefix: 'Cabinet',
        namespace: '.',
    },
);

