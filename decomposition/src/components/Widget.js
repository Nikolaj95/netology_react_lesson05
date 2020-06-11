// Обертка для виджета

import React from "react";
import PropTypes from "prop-types";

export default function Widget(props) {
    return (
        <div className='widget'>
            <a href='#'>{props.title}</a>
            {props.children}
        </div>
    );
};

Widget.propTypes = {
    title: PropTypes.string.isRequired
};
