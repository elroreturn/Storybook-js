import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ resultado }) => {
    return (
        <section className="result">
            <span>{ resultado }</span>
        </section>
    )
};

Result.propTypes = {
    resultado: PropTypes.string.isRequired
};

Result.defaultProps = {
    resultado: '0'
}

export default Result;