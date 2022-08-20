
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import styles from "./Product.module.scss";
import { Button, Radio } from '../../components/Form';
import Modal from '../../components/Modal';
import MyForm from './components/form';
import { useTranslation } from 'react-i18next';
import Loader from '../../components/Loader';

const Product = () => {
    const [payment_type, setPayment_type] = useState()
    const [showmodal, set_showmodal] = useState(false)
    const [loading, setLoading] = useState(true)
    const { t } = useTranslation()
    const selector = useSelector(state => state.products)
    const payments = useSelector(state => state.payments?.payments)
    const router = useRouter()
    const { id } = router.query
    const product = selector.all_products.find(item => item.id == id)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    const closeModal = () => {
        set_showmodal(false)
    }

    return <>
        <div className="container">
            <Modal title="Modaltitle" show={showmodal} handleClose={closeModal}>
                <MyForm paymentType={payment_type} closeModal={closeModal} />
            </Modal>
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
                                {
                                    payments.length && payments.map((item, index) => (

                                        <div className={`custom-control custom-radio ${styles.custom_radio}`} key={index}>
                                            <Radio

                                                name="payment"
                                                value={item.payment}
                                                onChange={(e) => {
                                                    setPayment_type(e.target.value)
                                                }}
                                                id={`customRadio${index}`}
                                                label={item.payment}
                                                labelfor={`customRadio${index}`}
                                            />
                                        </div>

                                    ))
                                }
                                <Button disabled={!payment_type} onClick={() => set_showmodal(true)} className='btn btn-danger mt-30' text={t('Sotib olish')} />
                            </div>
                        </div>
                    }
                </>
            }
        </div>
    </>
}

export default Product;