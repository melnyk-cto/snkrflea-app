// core
import React, { useState } from 'react'

// library
import Head from 'next/head'
import PropTypes from 'prop-types'

// components
import { Footer, Header, Login, PremiumPayment, Register } from "../../components";


export const Layout = ({children}) => {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showPremiumPlan, setShowPremiumPlan] = useState(false);

    return (
        <>
            <Head>
                <title>SNKRFLEA</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header setShowLogin={setShowLogin} setShowPremiumPlan={setShowPremiumPlan}/>
            {showRegister && <Register setShowRegister={setShowRegister} setShowLogin={setShowLogin} />}
            {showLogin && <Login setShowLogin={setShowLogin} setShowRegister={setShowRegister} />}
            {showPremiumPlan && <PremiumPayment setShowPremiumPlan={setShowPremiumPlan} />}
            {children}
            <Footer setShowLogin={setShowLogin} />
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

