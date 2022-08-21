import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button, Input } from '../../FormComponents';
import { post } from '../../../services/helpers/api';
import { PaymentValidation, initialValues } from "./validations";
import { isLetter, formatNumber } from '../../../services/utils';
import { useRouter } from 'next/router';
import Loader from '../../Loader';

const PaymentForm = ({ paymentType, setBack }) => {
    const { t } = useTranslation()
    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState('')
    const [show, setShow] = useState(false)
    const [isSubmitting, setsubmitting] = useState(false)
    const history = useRouter()

    const back_to_step = () => {
        setBack()
    }

    const getValues = (e, item, setFieldValue) => {
        let value = e.target.value.slice(-1)
        if (item == 'phone' || item == 'amount') {
            if (!isLetter(value)) {
                setFieldValue(`${item}`, Number(e.target.value))
                if (item == 'amount') {
                    setFieldValue(`${item}`, formatNumber(e.target.value))
                }
            }
        } else {
            setFieldValue(`${item}`, e.target.value)
        }
    }


    const payForProduct = (data) => {
        post('/pay', data).then(res => {
            setsubmitting(true)
            setShow(true)
            setTimeout(() => {
                setShow(false)
            }, 2000);
            if (res.data.success) {
                setMessage('It is success')
                setSuccess(true)
                setTimeout(() => {
                    history.push("/")
                }, 2000);
            }
            else {
                setSuccess(false)
                setMessage('You have error')
            }
        })
            .catch(err => {
                setShow(true)
                setTimeout(() => {
                    setShow(false)
                }, 2000);
                setSuccess(false)
                setMessage('error message')
            })
    }



    return <>
        <div className={`notification ${show ? 'show' : ''} ${success ? 'success' : 'danger'}`} >
            This is a {message}
        </div>
        <Formik
            initialValues={initialValues[paymentType]}
            validationSchema={PaymentValidation[paymentType]}
            onSubmit={(values, { resetForm }) => {
                payForProduct({ ...values, amount: Number(values.amount.replaceAll(" ", "")), payment: paymentType })
                resetForm()
            }}
        >
            {({ values, setFieldValue }) => {
                return <>
                    {
                        isSubmitting ? <>
                            <Loader />
                        </> : ''
                    }
                    <Form > {
                        Object.keys(initialValues[paymentType]).map((item, index) => (
                            <Field
                                maxLength={item == 'phone' ? '9' : false}
                                key={index}
                                placeholder={t(item)}
                                name={item}
                                component={Input}
                                onChange={(e) => getValues(e, item, setFieldValue)}
                                value={values[item] || ''}
                            />
                        ))
                    }
                        <div className="d-flex justify-content-end">
                            <Button
                                className="btn  btn-outline-secondary mr-30" onClick={back_to_step}
                                type="button"
                                text={t("back")}
                            />
                            <Button
                                className="btn btn-primary"
                                type="submit"
                                text={t('submit')}
                            />
                        </div>
                    </Form>
                </>
            }}
        </Formik >
    </>
}

export default PaymentForm;