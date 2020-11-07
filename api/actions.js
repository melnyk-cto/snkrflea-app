


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


export const requestAuthInterceptor = (data) => (
    fetch("api/auth/sign-in", {
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
  fetch("api/auth/email/sign-in", {
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
  fetch("api/auth/email/sign-up", {
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

export const signInByGoogle = (data) => (
    fetch("api/auth/google", {
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

export const signInByFacebook = ({ access_token }) => (
    fetch("api/auth/facebook", {
        method: 'GET',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        query: { access_token },
    }
));

export const addNewProduct = (formData) => (
  fetch("http://localhost:4000/api/products", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //  mode: '*cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbnRvbm5ldHJlYmVua290NDE5QGdtYWlsLmNvbSIsIm5hbWUiOm51bGwsImN1c3RvbWVySWQiOiJjdXNfSUtXVWJaZ3Y0ZjFIbEkiLCJmYWNlYm9va0lkIjpudWxsLCJlbWFpbFRva2VuIjpudWxsLCJ2ZXJpZmllZCI6ZmFsc2UsImNyZWF0ZWRBdCI6IjIwMjAtMTEtMDVUMDM6MTQ6MzguNjg1WiIsInRpbWVzdGFtcCI6bnVsbCwiaWF0IjoxNjA0NTE3Mjg2fQ.1sOgjqFVQhZufYUKsKLJ_bQ82zqj-RAStpcFE6lxGDE'
    },
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: formData // body data type must match "Content-Type" header
  }
));


export const getSellingList = () => (
  fetch("http://localhost:4000/api/products", {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //  mode: '*cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  }
));
// unregister();