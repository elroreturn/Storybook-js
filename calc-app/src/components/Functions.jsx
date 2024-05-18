import React from 'react';
import Boton from './Button/Boton';
import PropTypes from 'prop-types';

const Functions = ({onContentClear, onDelete}) => {
    return (
        <section className="functions">
            <Boton type="button-long-text" text="&larr;" clickHandler={onContentClear} />
            <Boton text="Reset" clickHandler={onDelete} />
        </section>
    )
};

Functions.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
};

export default Functions;