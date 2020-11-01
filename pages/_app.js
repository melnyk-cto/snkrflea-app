// core
import React from "react";

// assets
import '../styles/globals.scss'
// Import Swiper styles
import 'swiper/swiper.scss';

// This component is needed for global styles on all pages
function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}

export default MyApp
