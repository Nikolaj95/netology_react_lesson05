//Вывод новостей

import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

export default function NewsList({news}) {
    return (
        <div className='news'>
            {news.map(item => (
                <p className='item' key={shortid.generate()}>
                    <img src={item.icon} alt=''/> <a href={item.url}>{item.text}</a>
                </p>
            ))}
        </div>
    );
};

NewsList.propTypes = {
    news: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    )
};