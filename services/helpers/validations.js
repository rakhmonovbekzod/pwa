import * as Yup from 'yup';


const PaymentValidation = {
    zoodpay: Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .required('Required'),
        phone: Yup.string().min(9, 'Too Short!').required('Required'),
        amount: Yup.number().integer().min(50000).required('Required'),
        address: Yup.string().required('Required'),
        zipcode: Yup.string().required('Required'),
    }),
    payme: Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .required('Required'),
        amount: Yup.number().integer().min(100).required('Required'),
        phone: Yup.string().min(9, 'Too Short!').required('Required'),
    }),
    click: Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .required('Required'),
        amount: Yup.number().integer().min(500).required('Required'),
        phone: Yup.string().min(9, 'Too Short!').required('Required'),
    })
}

const initialValues = {
    zoodpay: {
        firstName: '',
        lastName: '',
        phone: '',
        zipcode: '',
        address: '',
        amount: null,
    },
    payme: {
        firstName: '',
        lastName: '',
        amount: null,
        phone: '',
    },
    click: {
        firstName: '',
        lastName: '',
        phone: '',
        amount: null,
    }
}


export {
    PaymentValidation,
    initialValues
};