import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from '../../api/actions.js'
import { cabinetActions } from "./actions";
export const GET_PURCHASES_REQUEST = 'GET_PURCHASES_REQUEST';

function* getPurchases(action) { 
  const response = yield call(Api.getPurchasesRequest,action.payload);
  if (response.ok) {
    const purchases = yield call([response, response.json])
    yield put(cabinetActions.setPurchasesList(purchases));
  }
}

function* storeSaga() {
  yield takeEvery(GET_PURCHASES_REQUEST, getPurchases);
}

export default storeSaga;