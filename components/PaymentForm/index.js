import { useState } from "react";
import { useTranslation } from "react-i18next";
import PaymentTypes from "./components/paymentTypes";
import PaymentForm from "./components/paymentForm";
import { Button } from "../FormComponents";
import Cart from "../Cart";

const Index = ({ product }) => {

    const [paymentType, setPaymentType] = useState(null)
    const [step, setStep] = useState(1)
    const { t } = useTranslation()
    const back_to_first = () => {
        setPaymentType(null)
        setStep(1)
    }

    return <>
        {
            step == 1 ?
                <div className="p-15">
                    <PaymentTypes
                        setPayment_type={(value) => setPaymentType(value)}
                    />
                    <Button
                        disabled={!paymentType}
                        onClick={() => setStep(2)}
                        className="btn btn-danger mt-30"
                        text={t("next_step")}
                    />
                </div> :
                <div className="row">
                    <div className="col-md-12 col-xl-6">
                        <PaymentForm
                            setBack={back_to_first}
                            paymentType={paymentType}
                        />
                    </div>
                    <div className="col-md-12 col-xl-6 order">
                        <Cart
                            products={product}
                            show_delete_btn={false}
                            show_payment_btn={false}
                        />
                    </div>
                </div>
        }
    </>
}

export default Index;