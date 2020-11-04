// core
import React, { useState } from 'react'

// components
import { CustomSelect, DropZone, Layout } from "../components";

// assets
import styles from '../styles/Product.module.scss'

const optionsValue = [
    {value: 'title_1', label: 'Title 1'},
    {value: 'title_2', label: 'Title 2'},
    {value: 'title_3', label: 'Title 3'},
];

const sizesValue = [
    {value: '5', label: '5'},
    {value: '6', label: '6'},
    {value: '7', label: '7'},
    {value: '8', label: '8'},
    {value: '9', label: '9'},
];
const conditionValues = [
    {value: 'like_new', label: 'Like New'},
    {value: 'lightly_worn', label: 'Lightly worn'},
    {value: 'worn', label: 'Worn'},
    {value: 'torn_down', label: 'Torn down'},
];
const Home = () => {
    const [success, setSuccess] = useState(false);

    return (
        <Layout>
            <section className={styles.product}>
                <div className="container">
                    {!success ? <div className={styles.productInner}>
                            <h1>List your product</h1>
                            <ul className={styles.productList}>
                                <li>
                                    <h6>Listing title</h6>
                                    <CustomSelect options={optionsValue} placeholder='Enter a title' />
                                </li>
                                <li>
                                    <h6>Category</h6>
                                    <CustomSelect options={optionsValue} placeholder='Choose a category' />
                                </li>
                                <li>
                                    <h6>Main Brand</h6>
                                    <CustomSelect options={optionsValue} placeholder='Choose a brand' />
                                </li>
                                <li>
                                    <h6>Sub Brand</h6>
                                    <CustomSelect options={optionsValue} placeholder='Choose a brand' />
                                </li>
                                <li>
                                    <h6>Size</h6>
                                    <CustomSelect options={sizesValue} placeholder='Choose Size' />
                                </li>
                                <li>
                                    <h6>Condition</h6>
                                    <CustomSelect options={conditionValues} placeholder='Choose an option' />
                                </li>
                                <li>
                                    <h6>Price</h6>
                                    <CustomSelect options={conditionValues} placeholder='Enter a price' />
                                </li>
                                <li>
                                    <h6>Available for</h6>
                                    <CustomSelect options={conditionValues} placeholder='Choose an option' />
                                </li>
                                <li>
                                    <h6>Photos</h6>
                                    <DropZone />
                                </li>
                            </ul>
                            <button type='button' className='btn-second'>Continue</button>
                        </div>
                        : <div className={styles.success}>
                            <h1>Congratulations on creating your listing!</h1>
                            <h3 className={styles.subTitle}>Now share your product to start getting purchases</h3>
                            <img src='/images/home/slider/boots.png' alt='' />
                            <h3>Dunk High SP Retro 'Michigan' 2020</h3>
                            <button type='button' className='btn-primary'>List another product</button>
                            <button type='button' className='btn-second'>View product on the marketplace</button>
                        </div>}
                </div>
            </section>
        </Layout>
    )
};

export default Home
