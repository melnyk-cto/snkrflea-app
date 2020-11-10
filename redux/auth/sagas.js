import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from '../../api/actions.js'
import { authActions } from "./actions";
import { generalActions } from "../general/actions";

export const USER_SIGN_IN_BY_EMAIL_REQUEST = 'USER_SIGN_IN_BY_EMAIL_REQUEST';
export const USER_SIGN_IN_BY_FACEBOOK_REQUEST = 'USER_SIGN_IN_BY_FACEBOOK_REQUEST';
export const USER_LOG_OUT_REQUEST = 'USER_LOG_OUT_REQUEST';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* authByEmail(action) {
  const response = yield call(Api.signInByEmail, action.payload);
  if (response.ok) {
    const data = yield call([response, response.json]);
    yield put(authActions.userSignInSucceded(data));
    yield put(authActions.showLoginModal(false));
    yield put(authActions.showPremiumPaymentModal(true));
    yield put(authActions.showRegisterPremiumModal(false));
  } else {
    yield put(authActions.userUnauthorizedError(true));
      yield put(authActions.userAlreadyError(true));
  }
  yield put(generalActions.showLoading(false));
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


function*  logOut() {
  yield put(authActions.userLogOut());
  yield put(generalActions.showLoading(false));
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* authSaga() {
  yield takeEvery(USER_SIGN_IN_BY_EMAIL_REQUEST, authByEmail);
  yield takeEvery(USER_LOG_OUT_REQUEST,logOut);
  yield takeEvery(USER_SIGN_IN_BY_FACEBOOK_REQUEST,authByFacebook);
}




export default authSaga;