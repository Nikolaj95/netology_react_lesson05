// Вывод курса валют

import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

export default function Currencies ({ сurrencies }) {
    return (
        <div className="сurrencies">
            {сurrencies.map(item => (
                <span className="item" key={shortid.generate()}>
                    <b>{item.title} {item.rate}</b> {item.growth}
                </span>
            ))}
        </div>
    );
};

Currencies.propTypes = {
    сurrencies: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            rate: PropTypes.string.isRequired,
            growth: PropTypes.string.isRequired
        })
    )
};
