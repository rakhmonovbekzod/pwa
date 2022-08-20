import { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from "../services/language";
import { store, wrapper } from "../redux/index";
import { fetchProducts } from "../redux/slices/products/actions";
import { fetchPayments } from "../redux/slices/payments/actions";
import Layout from "../components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

  const [showing, setShowing] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    setShowing(true);
    dispatch(fetchProducts())
    dispatch(fetchPayments())
  }, [])

  return <>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </I18nextProvider>
    </Provider>
  </>



}

export default wrapper.withRedux(MyApp);
