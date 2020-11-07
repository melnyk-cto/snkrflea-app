import { handleActions } from 'redux-actions';
import { authActions } from './actions';

const initialState = {
    user: null,
    unauthorizedError: false,
    registerModalShowing: false,
    loginModalShowing: false,
    premiumPaymentModalShowing: false,
    plansModalShowing: false,
    registerPremiumModalShowing: false,
    contactModalShowing: false,
    reportModalShowing: false,
    createStoreModalShowing: true,
};

export const authReducer = handleActions({
        [authActions.userSignInSucceded]: (state, {payload}) => ({
            ...state,
            user: payload,
        }),
        [authActions.userUnauthorizedError]: (state, {payload}) => ({
            ...state,
            unauthorizedError: payload,
        }),
        [authActions.showRegisterModal]: (state, {payload}) => ({
            ...state,
            registerModalShowing: payload,
        }),
        [authActions.showLoginModal]: (state, {payload}) => ({
            ...state,
            loginModalShowing: payload,
        }),
        [authActions.showPremiumPaymentModal]: (state, {payload}) => ({
            ...state,
            premiumPaymentModalShowing: payload,
        }),
        [authActions.showPlansModal]: (state, {payload}) => ({
            ...state,
            plansModalShowing: payload,
        }),
        [authActions.showRegisterPremiumModal]: (state, {payload}) => ({
            ...state,
            registerPremiumModalShowing: payload,
        }),
        [authActions.showContactModal]: (state, {payload}) => ({
            ...state,
            contactModalShowing: payload,
        }),
        [authActions.showReportModal]: (state, {payload}) => ({
            ...state,
            reportModalShowing: payload,
        }),
        [authActions.showCreateStoreModal]: (state, {payload}) => ({
            ...state,
            createStoreModalShowing: payload,
        }),
    },
    initialState,
);