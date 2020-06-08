import React from 'react';
import shortid from 'shortid';
import './bootstrap.min.css';
import Card from './components/Card';
import CardContent from './components/CardContent';
import CardImg from './components/CardImg';
import data from './data/cards';

function App() {
    return (
        <div className="App">
            <div className="card" style={{width: '18rem'}}>
                {data.map(item => (
                    <Card key={shortid.generate()}>
                        {typeof item.img !== 'undefined' ? <CardImg item={item}/> : null}
                        <CardContent item={item}/>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default App;
