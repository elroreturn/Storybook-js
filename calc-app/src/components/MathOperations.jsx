import React from 'react';
import Boton from './Button/Boton';
import PropTypes from 'prop-types';

const MathOperations = ({onClickOperation, onClickEqual}) => {

    return (
        <section className="math-operations">
            <Boton text="+" clickHandler={onClickOperation} />
            <Boton text="-" clickHandler={onClickOperation} />
            <Boton text="*" clickHandler={onClickOperation} />
            <Boton text="/" clickHandler={onClickOperation} />
            <Boton text="=" clickHandler={onClickEqual} />
        </section>
    )
};

MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
};

export default MathOperations;