import Link from "next/link";
import { useRef } from "react";
import { connect, useSelector } from 'react-redux';
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";


function Home(props) {

  const selector = useSelector(state => state.products)

  return (
    <div className="home mt-50 mb-50">
      <div className="b-cart">Cart (<span className="b-cart__count">0</span>)</div>
      <div className="container">
        <div className="row">
          {
            props.loading ? <div className="d-flex justify-content-center">
              <Loader />
            </div> : <>
              {
                selector.all_products.length ? selector.all_products.map((item, index) => {
                  return <>
                    <div className="col-3" key={index}>
                      <Link href={`/product/${item.id}`}  >
                        <a >
                          <ProductCard
                            id={item.id}
                            name={item.brand}
                            description={item.title}
                            price={item.price}
                            oldPrice={item.oldPrice}
                            img={item.img}
                          />
                        </a>
                      </Link>
                    </div>
                  </>
                }) : ''
              }
            </>
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.products.loading
})

export default connect(mapStateToProps, null)(Home)





