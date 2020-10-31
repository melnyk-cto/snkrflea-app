// core
import React, { useState } from 'react'

// library
import Head from 'next/head'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

// components
import { Footer, Header, Login, Register } from "../../components";


export const Layout = ({children}) => {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const router = useRouter();
    const handleSuccess = () => {
        return router.push('/').then(() => window.scrollTo(0, 0))
    };

    return (
        <>
            <Head>
                <title>SNKRFLEA</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header setShowLogin={setShowLogin} />
            {showRegister && <Register
                onSuccess={handleSuccess}
                setShowRegister={setShowRegister}
                setShowLogin={setShowLogin} />}
            {showLogin && <Login
                onSuccess={handleSuccess}
                setShowLogin={setShowLogin}
                setShowRegister={setShowRegister} />}
            {children}
            <Footer setShowLogin={setShowLogin} />
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};


