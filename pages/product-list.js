// core
import React, { useEffect, useState } from 'react'

// library
import { useDispatch, useSelector } from "react-redux";

// components
import { DropZone, GuardLayout } from "../components";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { isEmpty } from "../constants/isEmpty/isEmpty";
import { getSelectedItem } from "../redux/products/selectors";
import { generalActions } from "../redux/general/actions";
import { productsActions } from "../redux/products/actions";
import { productSchema } from '../schemas/index'
import { ADD_NEW_PRODUCT_REQUEST } from "../redux/products/sagas";

// assets
import styles from '../styles/ProductList.module.scss'

const ProductList = () => {
    const dispatch = useDispatch();

    const [images, setImages] = useState([]);
    const [showCurrentProduct, setShowCurrentProduct] = useState();

    const showLoading = (state) => dispatch(generalActions.showLoading(state));
    const selectedProduct = (state) => dispatch(productsActions.setSelectedProduct(state));

    const currentProduct = useSelector(getSelectedItem);

    useEffect(() => {
        setShowCurrentProduct(currentProduct)
    }, [currentProduct]);

    return (
        <GuardLayout>
            <section className={styles.product}>
                <div className="container">
                    {isEmpty(showCurrentProduct) ? <div className={styles.productInner}>
                            <h1>List your product</h1>
                            <Formik
                                initialValues={{title: '', description: '', price: 0}}
                                validationSchema={productSchema}
                                onSubmit={async (values, {setSubmitting}) => {
                                    setSubmitting(false);
                                    showLoading(true);
                                    dispatch({type: ADD_NEW_PRODUCT_REQUEST, payload: {...values, images}})
                                }}>
                                {({isSubmitting}) => (
                                    <Form>

                                        <label>
                                            <span>Title</span>
                                            <Field type="text" name="title" placeholder='Title' />
                                            <ErrorMessage className='error' name="title" component="div" />
                                        </label>
                                        <label>
                                            <span>Description</span>
                                            <Field type="textarea" component="textarea" name="description"
                                                   placeholder='Description' />
                                            <ErrorMessage className='error' name="description" component="div" />
                                        </label>
                                        <label>
                                            <span>Price</span>
                                            <Field type="number" name="price" placeholder='Title' />
                                            <ErrorMessage className='error' name="price" component="div" />
                                        </label>
                                        <DropZone files={images} setFiles={setImages} />
                                        <button type="submit" className='btn-second' disabled={isSubmitting}>
                                            Continue
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                        : (!isEmpty(showCurrentProduct) && <div className={styles.success}>
                            <h1>Congratulations on creating your listing!</h1>
                            <h3 className={styles.subTitle}>Now share your product to start getting purchases</h3>
                            {showCurrentProduct.images.length !== 0 ?
                                <img src={showCurrentProduct.images[0].url} alt='' /> :
                                <img src='/images/placeholder-image.png' alt='' />}
                            <h3>{showCurrentProduct.title}</h3>
                            <button type='button' className='btn-primary'
                                    onClick={() => {
                                        selectedProduct({});
                                        setImages([])
                                    }}>List
                                another product
                            </button>
                            <button type='button' className='btn-second'>View product on the marketplace</button>
                        </div>)}
                </div>
            </section>
        </GuardLayout>
    )
};

export default ProductList
