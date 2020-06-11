// Вывод формы поиска

import React from "react";
import OtherService from "./OtherService"

export default function SearchPanel ({ otherService, searchExample }) {
    return (
        <>
            <OtherService link = {otherService}/>
            <div className='search'>
                <input type='text' placeholder='Поиск' />
                <a className='search-button'>Поиск</a>
            </div>
            <div className='searchExample'>{searchExample}</div>
        </>
    );
};
