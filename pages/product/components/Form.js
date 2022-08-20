import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button, Input } from '../../../components/Form';
import { post } from '../../../services/helpers/api';
import { PaymentValidation, initialValues } from "./validations";
import { formatNumber, isLetter } from '../../../services/utils';

const MyForm = ({ paymentType, closeModal }) => {
    const { t } = useTranslation()
    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState('')
    const [show, setShow] = useState(false)


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
            setShow(true)
            setTimeout(() => {
                setShow(false)
            }, 2000);
            if (res.data.success) {
                setMessage('It is success')
                setSuccess(true)
                setTimeout(() => {
                    closeModal()
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
            {({ isSubmitting, values, setFieldValue }) => {
                return <Form > {
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
                        <Button className="btn btn-primary" htmlType="submit" text={isSubmitting ? '...loading' : t('submit')} />
                    </div>
                </Form>
            }}
        </Formik >
    </>
}


export default MyForm;