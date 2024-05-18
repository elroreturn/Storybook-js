import React from 'react';
import PropTypes from 'prop-types';

import './Boton.css';

const Boton = ({ type, text, clickHandler }) => (
    <button className={type} onClick= {() => clickHandler(text)}>
        <span>{text}</span>
    </button>
);

Boton.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    clickHandler: PropTypes.func.isRequired
};

export default Boton;