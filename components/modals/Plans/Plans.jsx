// core
import React from 'react'


// components
import { ModalDescription, ModalLayout } from "../../../components";

// assets
import styles from './Plans.module.scss'

export const Plans = ({setShowPlans}) => {
    return (
        <ModalLayout
            maxWidth='1301px'
            showPopup={setShowPlans}>
            <h1 className={styles.title}>Become a member</h1>
            <ModalDescription
                premium={true}
                title='Premium'
                subTitle='$99/month'
                showButton
            />
            <ModalDescription
                title='Starter'
                subTitle='Free'
                showButton
            />
        </ModalLayout>
    )
};
