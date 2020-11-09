// core
import React, { useState } from 'react'

// components
import { AccountTabs, GuardLayout, PremiumLinks } from "../../components";

// assets
import styles from '../../styles/Account.module.scss'
import Link from "next/link";


const billingItems = [
    {date: 'July 15 2020', price: '$99.00'},
    {date: 'July 15 2020', price: '$99.00'},
    {date: 'July 15 2020', price: '$99.00'},
];
const Membership = () => {
    const [isStarter, setIsStarter] = useState(false);
    return (
        <GuardLayout>
            <section className={styles.account}>
                <div className="container">
                    <div className={styles.content}>
                        <h1>My Account</h1>
                        <AccountTabs activeMenu='Membership' />
                        <div className={styles.membershipTitle}>
                            {isStarter ? <h3>You are on the <span>Starter Membership</span></h3>
                                : <h3>You are on the <span>Premium Membership</span></h3>
                            }
                        </div>
                        {isStarter ? <div className={styles.membershipStarter}><PremiumLinks mobile /></div>
                            : <div className={styles.membershipPremium}>
                                <p>
                                    Your membership will renew on December 11, 2020. <Link href=''><a>Change
                                    this</a></Link>
                                </p>
                                <div className={styles.membershipHistory}>
                                    <h5>Billing History</h5>
                                    <ul className={styles.list}>
                                        {billingItems.map((item, index) => (
                                            <li key={index}>
                                                <span>{item.date}</span>
                                                <span className={styles.price}>{item.price}</span>
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                            </div>}
                    </div>
                </div>
            </section>
        </GuardLayout>
    )
};

export default Membership
