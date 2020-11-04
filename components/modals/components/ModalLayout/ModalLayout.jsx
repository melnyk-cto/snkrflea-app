// core
import React, { useEffect, useState } from 'react'

// library
import classNames from "classnames";

// assets
import styles from './ModalLayout.module.scss'

export const ModalLayout = ({children, maxWidth, showPopup, classname}) => {
    const [style, setStyle] = useState(null);

    useEffect(() => {
        if (classname === 'register') {
            setStyle(styles.register)
        } else if (classname === 'premium') {
            setStyle(styles.premium)
        }
    }, [classname]);

    return (
        <div className={classNames(styles.popup, style)}>
            <div className={styles.popupInner} style={{maxWidth: maxWidth}}>
                <span onClick={() => {
                    showPopup(false);
                }} className={styles.close} />
                {children}
            </div>
        </div>
    )
};

