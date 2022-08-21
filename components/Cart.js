import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import { Button } from "./FormComponents";
import { maketJsonSrting } from "../services/utils";

const Cart = (props) => {

    const { show_payment_btn, show_delete_btn, onDelete, products, closeModal } = props;
    const { t } = useTranslation()
    const [prices, setPrices] = useState(0)
    const router = useRouter()
    

    const addPrices = (price) => {
        setPrices(prices + price)
    }
    const deleteCart = (id) => {
        onDelete(id)
    }
    const removePrices = (price) => {
        if (prices != 0) {
            setPrices(prices - price)
        }
    }
    const closemyModal = () => {
        closeModal()
        router.push({
            pathname:'/payment',
            query: {
                items:maketJsonSrting(products)
            }
        },'/payment')
    }
    return <div>

        {
            products.length ? <>
                {
                    products.map((item, index) => {
                        return <>
                            <div className="d-flex mb-15 align-items-center card_link" key={index}>
                                <img src={item.img} alt="img" />
                                <div className="ml-20">
                                    <h5>{item.brand}</h5>
                                    <p className="mb-0">{item.description}</p>
                                    <p>{item.price}</p>
                                    <Button
                                        onClick={() => addPrices(item.price)} className="btn btn-primary mr-10"
                                        text={t('add')}
                                    />
                                    <Button
                                        onClick={() => removePrices(item.price)} className="btn btn-primary"
                                        text={t('minus')}
                                    />
                                    {
                                        show_delete_btn ? <div className="mt-15">
                                            <Button
                                                className="btn btn-danger"
                                                onClick={() => deleteCart(item.id)}
                                                text={t('delete')}
                                            />
                                        </div> : ''
                                    }
                                </div>
                            </div>
                        </>
                    })
                }
            </> : ''
        }


        {
            products.length ? <>
                <p>{t('Жами  xarajat')}  {products.map(item => item.price).reduce((a, b) => a + b) + prices}</p>
                {
                    show_payment_btn ? <Button onClick={closemyModal} className="btn btn-outline-success" text={t('payment')} /> : ''
                }
            </> : ''
        }
    </div >
}

Cart.propTypes = {
    show_delete_btn: PropTypes.bool,
    show_payment_btn: PropTypes.bool,
    products: PropTypes.array,
    closeModal: PropTypes.func
}
Cart.defaultProps = {
    show_payment_btn: true,
    show_delete_btn: true,
    products: [],
    closeModal: () => { }
}



export default Cart;