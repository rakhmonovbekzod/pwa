
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';
import Loader from '../../components/Loader';
import { Button } from '../../components/Form';
import styles from "./Product.module.scss";

const Product = () => {
    const [loading, setLoading] = useState(true)
    const { t } = useTranslation()
    const selector = useSelector(state => state.products)
    const router = useRouter()
    const { id } = router.query
    const product = selector.all_products.find(item => item.id == id)

    const add_product = (item) => {
        router.push({
            pathname: '/payment',
            query: item
        }, '/payment')
    }
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    return <>
        <div className="container">
            {
                loading ? <div className='d-flex justify-content-center mt-50'>
                    <Loader />
                </div> : <>
                    {
                        product && <div className={styles.product}>
                            <div className={styles.product_left}>
                                <img src={product.img} alt="product_img" />
                            </div>
                            <div className={styles.product_right}>
                                <h4>{t('Характеристики')}</h4>
                                <div>
                                    <h5>{product.brand}</h5>
                                    <p>{product.title}</p>
                                    <div>
                                        <span className='mr-20'><del>{product.oldPrice}</del></span>
                                        <span>{product.price}</span>
                                    </div>
                                </div>
                                <Button className="btn btn-outline-success mt-20" onClick={() => add_product(product)} text={t('payment')} />
                            </div>
                        </div>
                    }
                </>
            }
        </div>
    </>
}

export default Product;