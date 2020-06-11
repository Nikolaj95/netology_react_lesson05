// Вывод самый посещаемых

import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import Widget from "./Widget";

export default function Popular({popular}) {
    return (
        <Widget title="Посещаемое">
            {popular.map(item => (
                <p key={shortid.generate()}>
                    <b>{item.title}</b> {item.subtitle}
                </p>
            ))}
        </Widget>
    );
};

Popular.propTypes = {
    popular: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string.isRequired
        })
    )
};