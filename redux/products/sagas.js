import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from '../../api/actions.js'
import { productsActions } from "./actions";
export const ADD_NEW_PRODUCT_REQUEST = 'ADD_NEW_PRODUCT_REQUEST';
export const GET_SELLING_LIST_REQUEST = 'GET_SELLING_LIST_REQUEST';
export const GET_PRODUCT_ITEM_REQUEST = 'GET_PRODUCT_ITEM_REQUEST';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* addNewProduct(action) { 
  
    const { title, description, price, images } = action.payload;

    let formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', Number(price));
    Object.entries(images).forEach(([key,value]) => {
      formData.append('images[]', value);
    })

    const response = yield call(Api.addNewProduct, formData);
  if (response.ok) {
    const product = yield call([response, response.json])
    yield put(productsActions.addNewProduct(product));
    window.location = "http://localhost:3000/account/selling";
  } else {

  }
}

function* getSellingList() { 
  const response = yield call(Api.getSellingList);
  if (response.ok) {
    const products = yield call([response, response.json])
    yield put(productsActions.setAllProducts(products));
  }
}

function* getProduct(action) { 
  const response = yield call(Api.getProductById,action.payload);
  if (response.ok) {
    const product = yield call([response, response.json])
    yield put(productsActions.setSelectedProduct(product));
  }
}

function* productsSaga() {
  yield takeEvery(ADD_NEW_PRODUCT_REQUEST, addNewProduct);
  yield takeEvery(GET_SELLING_LIST_REQUEST, getSellingList);
  yield takeEvery(GET_PRODUCT_ITEM_REQUEST, getProduct);
}

export default productsSaga;