//Вывод банера

import React from "react";

export default function Baner({banner}) {
    return (
        <div className='banner'>
            <img src={banner.img} alt=''/>
        </div>
    );
};
