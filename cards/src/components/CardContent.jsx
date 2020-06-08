import React from 'react';
import PropTypes from 'prop-types';
import CardBtn from './CardBtn';

export default function CardContent(props) {
    let {item} = props;
    return (
        <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.text}</p>
            <CardBtn url={item.url}/>
        </div>
    );
};

CardContent.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }),
};
