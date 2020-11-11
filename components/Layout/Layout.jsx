// core
import React, { useEffect } from 'react'

// library
import Head from 'next/head'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from "react-redux";

// components
import {
    Footer,
    Header,
    Login,
    PremiumPayment,
    Register,
    Plans,
    RegisterPremium,
    Contact,
    Report,
    CreateStore, Loading
} from "../../components";
import {
    showRegisterModal,
    showLoginModal,
    showPremiumPaymentModal,
    showPlansModal,
    showRegisterPremiumModal,
    showContactModal,
    showReportModal,
    showCreateStoreModal,
    getUserState
} from "../../redux/auth/selectors";
import { getIsLoading } from "../../redux/general/selectors";
import { generalActions } from "../../redux/general/actions";


export const Layout = ({children}) => {
    const dispatch = useDispatch();

    const showRegister = useSelector(showRegisterModal);
    const showLogin = useSelector(showLoginModal);
    const showPremiumPayment = useSelector(showPremiumPaymentModal);
    const showPlans = useSelector(showPlansModal);
    const showRegisterPremium = useSelector(showRegisterPremiumModal);
    const showContact = useSelector(showContactModal);
    const user = useSelector(getUserState);
    const showReport = useSelector(showReportModal);
    const showCreateStore = useSelector(showCreateStoreModal);
    const isLoading = useSelector(getIsLoading);

    const showLoading = (state) => dispatch(generalActions.showLoading(state));

    useEffect(()=> {
        showLoading(false)
    },[]);

    return (
        <>
            <Head>
                <title>SNKRFLEA</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header user={user}/>
            {isLoading && <Loading />}
            {showRegister && <Register classname='register' />}
            {showRegisterPremium && <RegisterPremium classname='premium' />}
            {showLogin && <Login />}
            {showPremiumPayment && <PremiumPayment classname='payment' />}
            {showPlans && <Plans classname='plans' />}
            {showContact && <Contact />}
            {showReport && <Report />}
            {showCreateStore && <CreateStore />}
            {children}
            <Footer />
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};


