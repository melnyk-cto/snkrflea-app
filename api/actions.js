import fetchIntercept from 'fetch-intercept';
import { getAuthToken } from '../redux/localStorage'

//const URL= 'https://snkrfleaapi.herokuapp.com/api/';
const URL= 'http://localhost:4000/api/';

const paths = {
  'sellings': 'products/vendor',
  'purchases': 'purchases',
  'products': 'products',
  'sign_up_by_email': 'auth/email/sign-up',
  'sign_in_by_email': 'auth/email/sign-in',
  'sign_in_by_google': 'auth/google/sign-in',
  'sign_up_by_google': 'auth/google/sign-up',
  'sign_in_by_facebook': 'auth/facebook/sign-in',
  'addProduct': 'products',
  'createStore': 'store',
  'getStore': 'store', 
  'subscripeToPremium': 'users/subsciption/premium',
  'billings': 'users/subscription/billings'
}


const TOKEN = getAuthToken()

const unregister = fetchIntercept.register({
  request: function (url, config) {
    if (Object.values(paths).includes(url)) {
        const withDefaults = Object.assign({     
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin', 
        redirect: 'follow', 
        referrerPolicy: 'no-referrer'}, config);
        withDefaults.headers =  new Headers({
          'AUTHORIZATION': `Bearer ${TOKEN}`,
          'Content-Type': 'application/json'
        });
       return [`${URL}${url}`, withDefaults];
    } else {
       return [url, config];
    }
  },

  requestError: function (error) {
      // Called when an error occured during another 'request' interceptor call
      return Promise.reject(error);
  },

  response: function (response) {
      // Modify the reponse object
      return response;
  },

  responseError: function (error) {
      // Handle an fetch error
      return Promise.reject(error);
  }
});


export const signInByEmail = (data) => (
  fetch(paths.sign_in_by_email, {
    method: 'POST', 
    body: JSON.stringify(data) 
  }
));

export const signUpByEmail = (data) => (
  fetch(paths.sign_up_by_email, {
    method: 'POST', body: JSON.stringify(data) 
  }
));

export const signInByGoogle = () => (
    fetch(paths.sign_in_by_google, { method: 'GET', query: params }
));

export const signInByFacebook = (access_token) => (
    fetch(`${paths.sign_in_by_facabook}?access_token=${access_token}`, {
        method: 'GET',
    }
));

export const addNewProduct = (formData) => (
  fetch(paths.addProduct, { method: 'POST', body: formData }
));

export const subscripeToPremium = (paymentMethodId) => (
  fetch(`${paths.subscripeToPremium}/${paymentMethodId}`, { method: 'POST' }
));

export const subscriptionBillings = () => (
  fetch(paths.billings, { method: 'GET' }
));

export const createMyStoreRequest = (formData) => (
    fetch(paths.createStore, { method: 'POST',  body: formData}
));

export const getMyStoreRequest = () => (
    fetch(paths.getStore, { method: 'GET' }
));

export const getMarketplaceList = () => (
  fetch(paths.products, { method: 'GET' }
));

export const getSellingList = () => (
  fetch(paths.sellings, { method: 'GET' }
));

export const getPurchasesRequest = () => (
  fetch(paths.purchases, { method: 'GET' }
));

export const getStoreByIdRequest = (id) => (
  fetch(`${paths.getStore}/${id}`, { method: 'GET' }
));

export const getProductById = (id) => (
  fetch(`${paths.products}/${id}`, { method: 'GET' }
));
