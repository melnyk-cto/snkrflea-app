// core
import React from "react";

// library
import { Provider } from 'react-redux'

// components
import { store } from '../redux';


// assets
import '../styles/globals.scss'
// Import Swiper styles
import 'swiper/swiper.scss';

// This component is needed for global styles on all pages
function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp
