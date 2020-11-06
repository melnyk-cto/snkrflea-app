import { handleActions } from 'redux-actions';
import { authActions } from './actions';

const initialState = {
    registerModalShowing: false,
    loginModalShowing: false,
    premiumPaymentModalShowing: false,
    plansModalShowing: false,
    registerPremiumModalShowing: false,
    contactModalShowing: false,
    reportModalShowing: false,
};

export const authReducer = handleActions({
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
    },
    initialState,
);