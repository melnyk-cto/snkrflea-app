import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from '../../api/actions.js'
import { cabinetActions } from "./actions";
export const GET_PURCHASES_REQUEST = 'GET_PURCHASES_REQUEST';
export const GET_MY_STORE_REQUEST = 'GET_MY_STORE_REQUEST';
export const CREATE_MY_STORE_REQUEST = 'CREATE_MY_STORE_REQUEST';
export const GET_HISTORY_BILLING_REQUEST = 'GET_HISTORY_BILLING_REQUEST';

function* getPurchases(action) {
    const response = yield call(Api.getPurchasesRequest, action.payload);
    if (response.ok) {
        const purchases = yield call([response, response.json]);
        yield put(cabinetActions.setPurchasesList(purchases));
    }
}

function* getMyStore() {
    const response = yield call(Api.getMyStoreRequest);
    if (response.ok) {
        const store = yield call([response, response.json]);
        yield put(cabinetActions.setMyStore(store));
    }
}

function* createMyStore(action) {

    let formData = new FormData();
    Object.entries(action.payload).map(([key, value]) => {
        formData.append(key, value);
    });

    const response = yield call(Api.createMyStoreRequest, formData);
    if (response.ok) {
        const store = yield call([response, response.json]);
        yield put(cabinetActions.setMyStore(store));
    }
}

function* getHistoryBillings() {
    const response = yield call(Api.subscriptionBillings);
    if (response.ok) {
        const history = yield call([response, response.json]);
        yield put(cabinetActions.setHistoryBilling(history));
    }
}


function* storeSaga() {
    yield takeEvery(GET_PURCHASES_REQUEST, getPurchases);
    yield takeEvery(GET_HISTORY_BILLING_REQUEST, getHistoryBillings);
    yield takeEvery(GET_MY_STORE_REQUEST, getMyStore);
    yield takeEvery(CREATE_MY_STORE_REQUEST, createMyStore);
}

export default storeSaga;