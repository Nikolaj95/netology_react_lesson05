import React from 'react';
import PropTypes from 'prop-types';

export default function Card(props) {
    return <div className="ui card">{props.children}</div>;
};

Card.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
};
