// core
import React, { useState } from 'react'

// library
import Head from 'next/head'
import PropTypes from 'prop-types'
import { useSelector } from "react-redux";

// components
import { Footer, Header, Login, PremiumPayment, Register, Plans, RegisterPremium } from "../../components";
import { showRegisterModal } from "../../redux/auth/selectors";


export const Layout = ({children}) => {
    const [showLogin, setShowLogin] = useState(false);
    const [showPremiumPlan, setShowPremiumPlan] = useState(false);
    const [showPlans, setShowPlans] = useState(false);
    const [showRegisterPremium, setShowRegisterPremium] = useState(false);


    const showRegister = useSelector(showRegisterModal);
    return (
        <>
            <Head>
                <title>SNKRFLEA</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header
                setShowLogin={setShowLogin}
                setShowPremiumPlan={setShowPremiumPlan}
            />
            {showRegister && <Register setShowLogin={setShowLogin} />}
            {showRegisterPremium && <RegisterPremium setShowRegisterPremium={setShowRegisterPremium} />}
            {showLogin && <Login setShowLogin={setShowLogin} />}
            {showPremiumPlan && <PremiumPayment setShowPremiumPlan={setShowPremiumPlan} />}
            {showPlans && <Plans setShowPlans={setShowPlans} />}
            {children}
            <Footer setShowLogin={setShowLogin} />
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};


