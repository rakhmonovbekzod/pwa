import Link from "next/link";
import { connect, useSelector } from 'react-redux';
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { setselectProducts } from "../redux/slices/products/reducers";


function Home(props) {

  const { loading, setSelectProducts } = props;
  const all_products = useSelector(state => state.products.all_products)

  const selectProducts = (item) => {
    setSelectProducts(item)
  }


  return (
    <div className="home mt-50 mb-50">

      <div className="container">
        <div className="row  ">
          {
            loading ? <div className="d-flex justify-content-center">
              <Loader />
            </div> : <></>
          }
          {
               all_products.map((item, index) => {
                  return <>
                    <div className="col-xl-3 col-md-12 justify-self-md-center " key={index}>
                      <Link href={`/product/${item.id}`}  >
                        <a className="card_link" >
                          <ProductCard
                            id={item.id}
                            name={item.brand}
                            description={item.title}
                            price={item.price}
                            oldPrice={item.oldPrice}
                            img={item.img}
                            onSelect={() => selectProducts(item)}
                          />
                        </a>
                      </Link>
                    </div>
                  </>
                }) 
              }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.products.loading,
  selectedProducts: state.products.selectedProducts
})

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectProducts: (item) => dispatch(setselectProducts(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)





