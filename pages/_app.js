import { useEffect, useState } from 'react';
import { Provider, useDispatch, connect } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from "../services/language";
import { store, wrapper } from "../redux/index";
import { fetchProducts } from "../redux/slices/products/actions";
import { fetchPayments } from "../redux/slices/payments/actions";
import Layout from "../components/Layout";
import Modal from '../components/Modal';
import Cart from '../components/Cart';
import { removeSelectedProducts } from '../redux/slices/products/reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'


function MyApp({ Component, pageProps, selectedProducts }) {

  const [showing, setShowing] = useState(false);
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    if (selectedProducts.length) {
      setShowModal(true)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const deleteCart = (id) => {
    dispatch(removeSelectedProducts(id))
  }


  useEffect(() => {
    setShowing(true);
    dispatch(fetchProducts())
    dispatch(fetchPayments())

  }, [])

  return <>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Layout>
          <div className="b-cart" onClick={openModal}>Cart (<span className="b-cart__count">{selectedProducts.length}</span>)
          </div>
          <Modal show={showModal} handleClose={closeModal}>
            <Cart
              products={selectedProducts}
              onDelete={(id) => deleteCart(id)}
              closeModal={() => setShowModal(false)}
            />
          </Modal>
          <div className="layout_body">
            <Component {...pageProps} />
          </div>
        </Layout>
      </I18nextProvider>
    </Provider>
  </>



}
const mapStateToProps = (state) => ({
  loading: state.products.loading,
  selectedProducts: state.products.selectedProducts
})




export default wrapper.withRedux(connect(mapStateToProps, null)(MyApp));
