// Вывод промо

import React from "react";

export default function Promo({item}) {
    return (
        <div className='promo'>
            <div className='image-promo'>
                <img src={item.img} alt=''/>
            </div>
            <div className='content'>
                <p className='title'>{item.title}</p>
                <div className='desc'>{item.desc}</div>
            </div>
        </div>
    );
};

