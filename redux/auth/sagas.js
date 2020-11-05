import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as Api from '../../api/actions.js'
import { authActions } from "./actions";


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* authByEmail(action) { 
  const response = yield call(Api.signInByEmail, action.payload);
  if (response.ok) {
    const data = yield call([response, response.json])
    yield put(authActions.userSignInSucceded(data));
    yield put(authActions.showLoginModal(false));
  } else {
      yield put(authActions.userUnauthorizedError(true));
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("USER_SIGN_IN_BY_EMAIL_REQUEST", authByEmail);
}




export default mySaga;