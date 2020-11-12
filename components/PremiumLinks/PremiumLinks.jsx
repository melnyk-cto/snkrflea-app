// core
import React  from 'react'

// library
import Link from "next/link";
import classNames from "classnames";
import { useDispatch } from "react-redux";

// components
import { routes } from "../../constants/routes";
// import { GET_PLAN_REQUEST } from "../../redux/auth/sagas";
import { authActions } from "../../redux/auth/actions";

// assets
import styles from './PremiumLinks.module.scss'

export const PremiumLinks = ({mobile}) => {
    const dispatch = useDispatch();

    const showPremiumPayment = (state) => dispatch(authActions.showPremiumPaymentModal(state));

    // useEffect(() => {
    //     dispatch({type: GET_PLAN_REQUEST})
    // }, []);

    return (
        <div className={styles.premiumLinks}>
            <h3>View premium links</h3>
            <p>
                Get access to hundreds of discount links, monthly giveaways, and exclusive monthly
                hype drops.
            </p>
            <Link href={routes.marketplace}>
                <a className={classNames('btn-second', !mobile ? styles.mobile : '')}
                   onClick={() => showPremiumPayment(true)}>Get Premium</a>
            </Link>
        </div>
    )
};
