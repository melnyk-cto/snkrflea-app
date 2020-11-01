// core
import React from 'react'

// assets
import styles from './ModalLayout.module.scss'

export const ModalLayout = ({children, maxWidth, setShowLogin, setShowRegister}) => {
    return (
        <div className={styles.popup}>
            <div className={styles.popupInner} style={{maxWidth: maxWidth}}>
                <span onClick={() => {
                    setShowLogin(false);
                    setShowRegister(false)
                }} className={styles.close} />
                {children}
            </div>
        </div>
    )
};

