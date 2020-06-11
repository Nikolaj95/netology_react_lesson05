// Эфир

import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import Widget from "./Widget";

export default function Radio({podcasts}) {
    return (
        <Widget title="Эфир">
            {podcasts.map(item => (
                <p key={shortid.generate()}>
                    <b>{item.title}</b> {item.station}
                </p>
            ))}
        </Widget>
    );
};

Radio.propTypes = {
    podcasts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            station: PropTypes.string.isRequired
        })
    )
};
