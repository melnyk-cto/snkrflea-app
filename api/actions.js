import fetchIntercept from 'fetch-intercept';
import { getAuthToken } from '../redux/localStorage'

const URL= 'https://snkrfleaapi.herokuapp.com/';
//const URL= 'http://localhost:4000/';

const paths = {
    'sellings': 'api/products/vendor',
    'purchases': 'api/purchases',
    'products': 'api/products',
    'sign_up_by_email': 'api/auth/email/sign-up',
    'sign_in_by_email': 'api/auth/email/sign-in',
    'sign_in_by_google': 'api/auth/google/sign-in',
    'sign_up_by_google': 'api/auth/google/sign-up',
    'sign_in_by_facebook': 'api/auth/facebook/sign-in',
    'addProduct': 'api/products',
    'createStore': 'api/store',
    'getStore': 'api/store',
    'subscripeToPremium': 'api/users/subscription/premium',
    'billings': 'api/users/subscription/billings'
}
const defaultRequestParams = {
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
}

const TOKEN = getAuthToken()


const unregister = fetchIntercept.register({
    request: function (url, config) {

        if (url.includes('api')) {
            // alert('4')
            const withDefaults = Object.assign({
                ...defaultRequestParams

            }, config);
            withDefaults.headers =  new Headers({
                'AUTHORIZATION': `Bearer ${TOKEN}`,
                ...config.headers,
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
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    ));

export const signUpByEmail = (data) => (
    fetch(paths.sign_up_by_email, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST', body: JSON.stringify(data)
        }
    ));

export const signInByGoogle = () => (
    fetch(paths.sign_in_by_google, { method: 'GET', headers: {
            'Content-Type': 'application/json'
        }, query: params }
    ));

export const signInByFacebook = (access_token) => (
    fetch(`${paths.sign_in_by_facabook}?access_token=${access_token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }
    ));

export const addNewProduct = (formData) => (
    fetch(paths.addProduct, { method: 'POST', body: formData }
    ));

export const subscripeToPremium = (paymentMethodId) => (
    fetch(`${paths.subscripeToPremium}/${paymentMethodId}`, { method: 'POST', headers: {
            'Content-Type': 'application/json'
        }, }
    ));

export const subscriptionBillings = () => (
    fetch(paths.billings, { method: 'GET',  headers: {
            'Content-Type': 'application/json'
        }, }
    ));

export const createMyStoreRequest = (formData) => (
    fetch(paths.createStore, { method: 'POST',
        ... defaultRequestParams ,
        body: formData}
    ));

export const getMyStoreRequest = () => (
    fetch(paths.getStore, { method: 'GET',  headers: {
            'Content-Type': 'application/json'
        }, }
    ));

export const getMarketplaceList = () => (
    fetch(paths.products, { method: 'GET',  headers: {
            'Content-Type': 'application/json'
        }, }
    ));

export const getSellingList = () => (
    fetch(paths.sellings, { method: 'GET',  headers: {
            'Content-Type': 'application/json'
        }, }
    ));

export const getPurchasesRequest = () => (
    fetch(paths.purchases, { method: 'GET',  headers: {
            'Content-Type': 'application/json'
        }, }
    ));

export const getStoreByIdRequest = (id) => (
    fetch(`${paths.getStore}/${id}`, { method: 'GET',  headers: {
            'Content-Type': 'application/json'
        }, }
    ));

export const getProductById = (id) => (
    fetch(`${paths.products}/${id}`, { method: 'GET',  headers: {
            'Content-Type': 'application/json'
        }, }
    ));
