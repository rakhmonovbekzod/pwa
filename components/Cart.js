import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import { Button } from "./Form";

const Cart = (props) => {

    const { show_payment_btn, show_delete_btn, onDelete, products } = props;
    const { t } = useTranslation()
    const [prices, setPrices] = useState(0)
    const history = useRouter()

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
    return <div>

        {
            products.length ? <>
                {
                    products.map((item, index) => {
                        return <>
                            <div className="d-flex mb-15 align-items-center" key={index}>
                                <img src={item.img} alt="img" />
                                <div className="ml-20">
                                    <h5>{item.brand}</h5>
                                    <p className="mb-0">{item.description}</p>
                                    <p>{item.price}</p>
                                    <button onClick={() => addPrices(item.price)} className="btn btn-primary mr-10" >{t('add')}</button>
                                    <button onClick={() => removePrices(item.price)} className="btn btn-primary">{t('minus')}</button>
                                    {
                                        show_delete_btn ? <div className="mt-15">
                                            <button className="btn btn-danger" onClick={() => deleteCart(item.id)}>{t('delete')}</button>
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
                    show_payment_btn ? <Button onClick={() => {
                        history.push('/payment')
                    }} className="btn btn-outline-success" text={t('payment')} /> : ''
                }
            </> : ''
        }
    </div >
}

Cart.propTypes = {
    show_delete_btn: PropTypes.bool,
    show_payment_btn: PropTypes.bool,
    products: PropTypes.array
}
Cart.defaultProps = {
    show_payment_btn: true,
    show_delete_btn: true,
    products: []
}



export default Cart;