import { useTranslation } from "react-i18next";

const Cart = (items = []) => {

    const { t } = useTranslation()

    return <div>
        {
            items.map((item, index) => {
                return <>
                    <div key={index}>
                        <img src={item.img} alt="img" />
                        <div>
                            <h5>{item.brand}</h5>
                            <p className="mb-0">{item.description}</p>
                            <button>add</button>
                            <button>minus</button>
                        </div>
                    </div>
                </>
            })
        }
        <p>{t('Жами  xarajat')}{items.map(item => item.price).reduce((a, b) => a + b)}</p>
    </div>
}

export default Cart;