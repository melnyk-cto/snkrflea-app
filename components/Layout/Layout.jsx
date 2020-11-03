// core
import React, { useState } from 'react'

// library
import Head from 'next/head'
import PropTypes from 'prop-types'
import { useSelector } from "react-redux";

// components
import { Footer, Header, Login, PremiumPayment, Register, Plans, RegisterPremium } from "../../components";
import {
    showRegisterModal,
    showLoginModal,
    showPremiumPaymentModal,
    showPlansModal,
    showRegisterPremiumModal
} from "../../redux/auth/selectors";


export const Layout = ({children}) => {
    const showRegister = useSelector(showRegisterModal);
    const showLogin = useSelector(showLoginModal);
    const showPremiumPayment = useSelector(showPremiumPaymentModal);
    const showPlans = useSelector(showPlansModal);
    const showRegisterPremium = useSelector(showRegisterPremiumModal);
    return (
        <>
            <Head>
                <title>SNKRFLEA</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            {showRegister && <Register />}
            {showRegisterPremium && <RegisterPremium />}
            {showLogin && <Login />}
            {showPremiumPayment && <PremiumPayment />}
            {showPlans && <Plans />}
            {children}
            <Footer />
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};


