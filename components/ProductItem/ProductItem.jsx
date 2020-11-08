// core
import React from 'react'

// library
import styles from "./ProductItem.module.scss";


export const ProductItem = ({product}) => {

    return (
        <div className={styles.productItem}>
            <div className={styles.image}>
                <img src={product.img} alt='' />
            </div>
            <div className={styles.description}>
                <h6>{product.title}</h6>
                <p>@{product.instagram}</p>
                {product.discount ? <div className={styles.discount}>
                        <p><span>{product.price}</span></p>
                        <p className={styles.price}><span>{product.discount}</span></p>
                    </div>
                    : <p className={styles.price}><span>${product.price}</span></p>
                }
            </div>
        </div>
    )
};
