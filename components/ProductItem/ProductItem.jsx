// core
import React from 'react'

// library
import styles from "./ProductItem.module.scss";
import Link from "next/link";
import { routes } from "../../constants/routes";


export const ProductItem = ({product}) => {
    return (
        <Link href={`${routes.product}/${product.id || ''}`}>
            <a href='' className={styles.productItem}>
                <div className={styles.image}>
                    {product.img ? <img src={product.img} alt='' /> :
                        <img src='/images/placeholder-image.png' alt='' />}
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
            </a>
        </Link>
    )
};
