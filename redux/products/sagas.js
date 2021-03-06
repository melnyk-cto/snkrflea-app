import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from '../../api/actions.js'
import { productsActions } from "./actions";
import { generalActions } from "../general/actions";

export const ADD_NEW_PRODUCT_REQUEST = 'ADD_NEW_PRODUCT_REQUEST';
export const GET_SELLING_LIST_REQUEST = 'GET_SELLING_LIST_REQUEST';
export const GET_PRODUCT_ITEM_REQUEST = 'GET_PRODUCT_ITEM_REQUEST';
export const GET_MARKET_PLACE_REQUEST = 'GET_MARKET_PLACE_REQUEST';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* addNewProduct(action) {

    const {title, description, price, images} = action.payload;

    let formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', Number(price));
    Object.entries(images).forEach(([key, value]) => {
        formData.append('images[]', value);
    });

    const response = yield call(Api.addNewProduct, formData);
    if (response.ok) {
        const product = yield call([response, response.json]);
        yield put(productsActions.addNewProduct(product));

        const responseProduct = yield call(Api.getProductById, product.id);
        if (responseProduct.ok) {
            const currentProduct = yield call([responseProduct, responseProduct.json]);
            yield put(productsActions.setSelectedProduct(currentProduct));
        }
    } else if (response.status === 400) {
        yield put(productsActions.setUserProductError(true));

    }

    yield put(generalActions.showLoading(false));
}

function* getMarketplace() {
    const response = yield call(Api.getMarketplaceList);
    if (response.ok) {
        const list = yield call([response, response.json]);
        yield put(productsActions.setMarketPlace(list));
    }
}

function* getSellingList() {
    const response = yield call(Api.getSellingList);
    if (response.ok) {
        const products = yield call([response, response.json]);
        yield put(productsActions.setAllProducts(products));
    }
}

function* getProduct(action) {
    const response = yield call(Api.getProductById, action.payload);
    if (response.ok) {
        const product = yield call([response, response.json]);
        yield put(productsActions.setSelectedProduct(product));
    }
}

function* productsSaga() {
    yield takeEvery(ADD_NEW_PRODUCT_REQUEST, addNewProduct);
    yield takeEvery(GET_SELLING_LIST_REQUEST, getSellingList);
    yield takeEvery(GET_PRODUCT_ITEM_REQUEST, getProduct);
    yield takeEvery(GET_MARKET_PLACE_REQUEST, getMarketplace);
}


export default productsSaga;