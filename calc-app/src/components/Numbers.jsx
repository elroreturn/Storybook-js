import React from 'react';
import Boton from './Button/Boton';
import PropTypes from 'prop-types';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const renderButtons = onClickNumber => {
    const renderButton = number => <Boton type="boton" key={number} text={number.toString()} clickHandler={onClickNumber} />;
    return numbers.map(renderButton);                                          
}

const Numbers = ({ onClickNumber }) => (
    <section className="numbers">
        { renderButtons(onClickNumber) }
    </section>
);

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
};

export default Numbers;