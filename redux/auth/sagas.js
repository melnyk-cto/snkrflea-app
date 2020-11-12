import { call, put, takeEvery, select } from 'redux-saga/effects'

import * as Api from '../../api/actions.js'
import { authActions } from "./actions";
import { generalActions } from "../general/actions";
import * as selectors from './selectors';
import { cabinetActions } from "../cabinet/actions";
import { productsActions } from "../products/actions";

export const USER_SIGN_IN_BY_EMAIL_REQUEST = 'USER_SIGN_IN_BY_EMAIL_REQUEST';
export const USER_SIGN_IN_BY_FACEBOOK_REQUEST = 'USER_SIGN_IN_BY_FACEBOOK_REQUEST';
export const USER_LOG_OUT_REQUEST = 'USER_LOG_OUT_REQUEST';
export const GET_PLAN_REQUEST = 'GET_PLAN_REQUEST';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* authByEmail(action) {
    const premiumPaymentModal = yield select(selectors.showRegisterPremiumModal);

    const response = yield call(Api.signInByEmail, action.payload);
    if (response.ok) {
        const data = yield call([response, response.json]);
        yield put(authActions.userSignInSucceded(data));
        yield put(authActions.showLoginModal(false));
        if (premiumPaymentModal) {
            yield put(authActions.showPremiumPaymentModal(true));
            yield put(authActions.showRegisterPremiumModal(false));
        }
    } else {
        yield put(authActions.userUnauthorizedError(true));
        yield put(authActions.userAlreadyError(true));
    }
    yield put(generalActions.showLoading(false));
    window.location.reload();
}

function* authByFacebook(action) {
    const response = yield call(Api.signInByFacebook, action.payload);
    if (response.ok) {
        const data = yield call([response, response.json]);
        yield put(authActions.userSignInSucceded(data));
        yield put(authActions.showLoginModal(false));
    } else {
        yield put(authActions.userUnauthorizedError(true));
        yield put(authActions.userAlreadyError(true));
    }
}


function* logOut() {
    yield put(authActions.userLogOut());
    yield put(generalActions.showLoading(false));
    yield put(cabinetActions.setHistoryBilling(false));
    yield put(cabinetActions.setMyStore(false));
    yield put(productsActions.setMarketPlace([]));
    yield put(productsActions.setSelectedProduct([]));
}


function* getPlan() {
    const response = yield call(Api.getSubscriptionPlan);
    console.log(response, 'response');
    if (response.ok) {
        const plan = yield call([response, response.json]);
        console.log(plan, 'plan');
        // yield put(authActions.setUserPlan(plan));
    } else {
        // yield put(authActions.setUserPlan(null));
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* authSaga() {
    yield takeEvery(USER_SIGN_IN_BY_EMAIL_REQUEST, authByEmail);
    yield takeEvery(USER_LOG_OUT_REQUEST, logOut);
    yield takeEvery(USER_SIGN_IN_BY_FACEBOOK_REQUEST, authByFacebook);
    yield takeEvery(GET_PLAN_REQUEST, getPlan);
}


export default authSaga;