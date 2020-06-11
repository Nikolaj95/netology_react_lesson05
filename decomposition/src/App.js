import React from "react";
import moment from "moment";

import Banner from "./components/Banner";
import Promo from "./components/Promo";
import NewsList from "./components/NewsList";
import * as data from "./data/Data";
import Currencies from "./components/Currencies";
import SearchPanel from "./components/SearchPanel";
import OtherService from "./components/OtherService"
import Map from "./components/Map";
import TvProgram from "./components/TvProgram"
import Weather from  "./components/Weather"
import Popular from  "./components/Popular"
import Radio from  "./components/Radio"


const today = moment();

function App() {
    return (
        <div className="App">
            <OtherService link={data.newsTabs}/> <span>{today.format('MMMM Do YYYY, h:mm:ss a')}</span>
            <div className="news segment">
                <NewsList news={data.news}/>
                <Currencies сurrencies={data.сurrencies}/>
            </div>
            <div className="banner">
                <Banner banner={data.banner}/>
            </div>
            <div className="promo">
                <Promo item={data.promoItem}/>
            </div>
            <div className="serachPanel">
                <SearchPanel otherService={data.otherService} searchExample={data.searchExample}/>
            </div>
            <div className="widget">
                <Weather weather={data.currentWeather} moment={today}/>
                <Popular popular={data.popular}/>
                <Map/>
                <TvProgram tvProgram={data.tvProgram}/>
                <Radio podcasts={data.podcasts}/>
            </div>
        </div>
    );
}

export default App;