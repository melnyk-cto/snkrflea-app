import React from 'react'
import Head from 'next/head'
import { Footer, Header } from "../components";


const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>SNKRFLEA</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossOrigin="anonymous" />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
};

export default Layout
