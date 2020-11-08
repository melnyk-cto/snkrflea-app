

const URL = 'https://snkrfleaapi.herokuapp.com/';
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

export const signInByFacebook = ({ access_token }) => (
    fetch(`${URL}api/auth/facebook`, {
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
  fetch(`${URL}api/products`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //  mode: '*cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ0ZXN0NTQ1NDVzZHNAZ21haWwuY29tIiwibmFtZSI6bnVsbCwiaWF0IjoxNjA0Nzg5NzQyfQ.-QEO_t5Ydlj5ktzF4VhfC9nts4zayLv6NGuAMv14xg8'
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
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ0ZXN0NTQ1NDVzZHNAZ21haWwuY29tIiwibmFtZSI6bnVsbCwiaWF0IjoxNjA0Nzg5NzQyfQ.-QEO_t5Ydlj5ktzF4VhfC9nts4zayLv6NGuAMv14xg8'
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
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ0ZXN0NTQ1NDVzZHNAZ21haWwuY29tIiwibmFtZSI6bnVsbCwiaWF0IjoxNjA0Nzg5NzQyfQ.-QEO_t5Ydlj5ktzF4VhfC9nts4zayLv6NGuAMv14xg8'
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
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ0ZXN0NTQ1NDVzZHNAZ21haWwuY29tIiwibmFtZSI6bnVsbCwiaWF0IjoxNjA0Nzg5NzQyfQ.-QEO_t5Ydlj5ktzF4VhfC9nts4zayLv6NGuAMv14xg8'
    },
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  }
));
// unregister();