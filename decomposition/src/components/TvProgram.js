// Вывод телепрограмм

import React from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import Widget from "./Widget";


export default function TvProgram({tvProgram}) {
    return (
        <Widget title="Телепрограмма">
            {tvProgram.map(item => (
                <p key={shortid.generate()}>
                    <b>
                        {item.time} {item.title}
                    </b> {item.channel}
                </p>
            ))}
        </Widget>
    );
};

TvProgram.propTypes = {
    tv: PropTypes.arrayOf(
        PropTypes.shape({
            time: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            channel: PropTypes.string.isRequired
        })
    )
};
