// core
import React from 'react'

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
    return (
        <Layout>
            <section className={styles.product}>
                <div className="container">
                    <div className={styles.productInner}>
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
                </div>
            </section>
        </Layout>
    )
};

export default Home
