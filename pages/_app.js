// core
import React from "react";

// assets
import '../styles/globals.scss'

// This component is needed for global styles on all pages
function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}

export default MyApp
