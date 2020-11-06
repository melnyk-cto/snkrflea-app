// core
import React  from 'react'

// library
import styles from "./ProductItem.module.scss";


export const ProductItem = ({product}) => {

    return (
        <div  className={styles.productItem}>
            <div className={styles.image}>
                <img src={product.image} alt='' />
            </div>
            <div className={styles.description}>
                <h6>{product.title}</h6>
                <p>{product.name}</p>
                <p className={styles.price}>{product.price}</p>
            </div>
        </div>
    )
};
