import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classnames from "classnames";
import { Button } from "./FormComponents";
import { formatNumber } from '../services/utils';

const ProductCard = ({ name, description, price, oldPrice, img, onSelect, id, size, ...rest }) => {
    const { t } = useTranslation();
    const classes = classnames(
        'card',
        `${size}`
    )
    return <>
        <div className={classes}>
            <img className='card_img' src={img} alt="card_img" />
            <div className='card_body'>
                <h4>{name}</h4>
                <p className='mb-0'>{description}</p>
                <div className="d-flex">
                    {oldPrice ? <span className='mr-20'><del>{formatNumber(oldPrice)}</del></span> : ''}
                    <span >{formatNumber(price)}</span>
                </div>
                <Button
                    className='btn btn-primary mt-10'
                    text={t('add to cart')}
                    onClick={(e) => {
                        e.preventDefault();
                        onSelect(e)
                    }}
                />
            </div>
        </div>
    </>
}

ProductCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    oldPrice: PropTypes.number,
    img: PropTypes.string,
    onSelect: PropTypes.func,
    size: PropTypes.oneOfType(['small', 'default', 'large'])
}

ProductCard.defaultProps = {
    onSelect: () => { },
    size: 'default'
};

export default ProductCard;