// Другие сервисы

import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

export default function SubService({link}) {
    return (
        <div>
            {link.map(elem => (
                <a href={elem.url} key={shortid.generate()}>
                    {elem.title}
                </a>
            ))}
        </div>
    );
};

SubService.propTypes = {
    otherService: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    )
};