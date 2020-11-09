import { getAuthToken } from '../redux/localStorage'

//const URL = 'http://localhost:4000/';
const URL = 'https://snkrfleaapi.herokuapp.com/';
const TOKEN = getAuthToken()
// import fetchIntercept from 'fetch-intercept';


// const unregister = fetchIntercept.register({
//   request: function (url, config) {
//     console.log(config)

//       return [`http://localhost:4000/${url}`, config];
//   },

//   requestError: function (error) {
//       // Called when an error occured during another 'request' interceptor call
//       return Promise.reject(error);
//   },

  
//   response: function (response) {
//       // Modify the reponse object
//       return response;
//   },

//   responseError: function (error) {
//       // Handle an fetch error
//       return Promise.reject(error);
//   }
// });


// {
//   "id": 17,
//   "email": "purchasestest@gmail.com",
//   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsImVtYWlsIjoicHVyY2hhc2VzdGVzdEBnbWFpbC5jb20iLCJuYW1lIjpudWxsLCJpYXQiOjE2MDQ4Mjk0MjN9.pNJ4a9qwj9yb3w0AGSnJjcTwcwF2n0ft1uTNO3Rt0mE"
// }

// {
//   "id": 18,
//   "email": "purchasestest2@gmail.com",
//   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImVtYWlsIjoicHVyY2hhc2VzdGVzdDJAZ21haWwuY29tIiwibmFtZSI6bnVsbCwiaWF0IjoxNjA0ODI5NDUzfQ.kaAYO6RSIzsq1ZoF4azAVyTo3r7wDAYjGA_N7GiHgqw"
// }

export const requestAuthInterceptor = (data) => (
    fetch(`${URL}api/auth/sign-in`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }
));

export const signInByEmail = (data) => (
  fetch(`${URL}api/auth/email/sign-in`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }
));

export const signUpByEmail = (data) => (
  fetch(`${URL}api/auth/email/sign-up`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }
));


export const signInByGoogle = () => (
    fetch(`${URL}api/auth/google`, {
        method: 'GET',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        query: params,
    }
));

export const signInByFacebook = (access_token) => (
    fetch(`${URL}api/auth/facebook/sign-in?access_token=${access_token}`, {
        method: 'GET',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }
));

export const addNewProduct = (formData) => (
  fetch(`${URL}api/products`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //  mode: '*cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      Authorization: `Bearer ${TOKEN}`
    },
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: formData // body data type must match "Content-Type" header
  }
));


export const getMarketplaceList = () => (
  fetch(`${URL}api/products`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //  mode: '*cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      Authorization: `Bearer ${TOKEN}`
    },
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  }
));

export const getSellingList = () => (
  fetch(`${URL}api/products/vendor`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //  mode: '*cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      Authorization: `Bearer ${TOKEN}`
    },
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  }
));

export const getPurchasesRequest = () => (
  fetch(`${URL}api/purchases`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //  mode: '*cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      Authorization: `Bearer ${TOKEN}`
    },
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  }
));

export const getStoreByIdRequest = (id) => (
  fetch(`${URL}api/store/${id}`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //  mode: '*cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      Authorization: `Bearer ${TOKEN}`
    },
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  }
));

export const getProductById = (id) => (
  fetch(`${URL}api/products/${id}`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //  mode: '*cors', // no-cors, *cors, same-origin
    headers: {
      Authorization: `Bearer ${TOKEN}`
    },
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  }
));
// unregister();