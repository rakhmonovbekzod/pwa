import PropTypes from 'prop-types';
import classnames from "classnames";

const Radio = ({ size, className, id, label, labelfor, ...rest }) => {

    const classes = classnames(
        'form_button',
        `${size}`,
        className
    )
    return <div>
        <input className={classes} type="radio" id={id} {...rest} />
        <label className="ml-10" htmlFor={labelfor} >{label}</label>
    </div>
}

Radio.propTypes = {
    size: PropTypes.oneOfType(['small', 'default', 'large']),
    className: PropTypes.string,
    label: PropTypes.string,
    labelfor: PropTypes.string,
    id: PropTypes.string
}

Radio.defaultProps = {
    size: 'default',
    id: 'radio_input',
    labelfor: 'radio_input'
};

export default Radio;