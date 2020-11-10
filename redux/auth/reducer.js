import { handleActions } from 'redux-actions';
import { authActions } from './actions';

const initialState = {
    user: null,
    plan: null,
    alreadyError: false,
    unauthorizedError: false,
    registerModalShowing: false,
    loginModalShowing: false,
    premiumPaymentModalShowing: false,
    premiumPaymentSuccessModalShowing: false,
    plansModalShowing: false,
    registerPremiumModalShowing: false,
    contactModalShowing: false,
    reportModalShowing: false,
    createStoreModalShowing: false,
};


export const authReducer = handleActions({
        [authActions.userSignInSucceded]: (state, {payload}) => ({
            ...state,
            user: payload,
        }),
        [authActions.userLogOut]: (state) => ({
            ...state,
            user: null,
        }),
        [authActions.setUserPlan]: (state, {payload}) => ({
            ...state,
            plan: payload,
        }),
        [authActions.userUnauthorizedError]: (state, {payload}) => ({
            ...state,
            unauthorizedError: payload,
        }),
        [authActions.userAlreadyError]: (state, {payload}) => ({
            ...state,
            alreadyError: payload,
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
        [authActions.showPremiumPaymentSuccessModal]: (state, {payload}) => ({
            ...state,
            premiumPaymentSuccessModalShowing: payload,
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