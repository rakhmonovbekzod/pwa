import { useSelector } from "react-redux"
import PropTypes from 'prop-types';
import {  Radio } from "../../FormComponents";
import { useTranslation } from "react-i18next";

const PaymentTypes = ({ setPayment_type }) => {

    const paymentTypes = useSelector(state => state.payments.payments)
    const { t } = useTranslation()
    return <>
        <div className={`custom-control mt-50 `}>
            <h2>{t("all_payment_types")}</h2>
            {
                paymentTypes.length && paymentTypes.map((item, index) => (
                    <Radio
                        key={index}
                        name="payment"
                        value={item.payment}
                        onChange={(e) => {
                            setPayment_type(e.target.value)
                        }}
                        id={`customRadio${index}`}
                        label={item.payment}
                        labelfor={`customRadio${index}`}
                    />
                ))
            }
            
        </div>
    </>
}

PaymentTypes.propTypes = {
    setPayment_type: PropTypes.func.isRequired
}
PaymentTypes.defaultProps = {
    setPayment_type: () => { }
}

export default PaymentTypes;