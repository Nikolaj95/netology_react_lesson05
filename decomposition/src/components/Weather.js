// Вывод погоды

import React from "react";
import PropTypes from "prop-types";
import Widget from "./Widget";

export default function Weather({weather, moment}) {
    const current = moment.hour() < 12 ? weather.night : weather.day;
    return (
        <Widget title="Погода">
            <p>
                <b>+{current}</b>
            </p>
            <p>День: +{weather.day}</p>
            <p>Ночь: +{weather.night}</p>
        </Widget>
    );
};

Weather.propTypes = {
    current: PropTypes.shape({
        day: PropTypes.number.isRequired,
        night: PropTypes.number.isRequired
    }),
    moment: PropTypes.object
};