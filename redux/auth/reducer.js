import { handleActions } from 'redux-actions';
import { authActions } from './actions';

const initialState = {
    registerModalShowing: false,
    loginModalShowing: false,
    premiumPlanModalShowing: false,
    plansModalShowing: false,
    registerPremiumModalShowing: false,
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
        [authActions.showPremiumPlanModal]: (state, {payload}) => ({
            ...state,
            premiumPlanModalShowing: payload,
        }),
        [authActions.showPlansModal]: (state, {payload}) => ({
            ...state,
            plansModalShowing: payload,
        }),
        [authActions.showRegisterPremiumModal]: (state, {payload}) => ({
            ...state,
            registerPremiumModalShowing: payload,
        }),
    },
    initialState,
);