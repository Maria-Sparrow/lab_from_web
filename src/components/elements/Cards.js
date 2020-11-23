import React, { useState } from 'react'
import Carditem from './Carditem'
import '../Cards.css';
import {Button} from './Button'
function Cards() {
    var[item] = useState([
        {src: 'https://assets.pinterest.com/ext/embed.html?id=693554411352085071', text: 'PARACETAMOL', label: 'more info', label_test:'cart', path: '/list', path_test: '/cart'},
        {src: 'https://assets.pinterest.com/ext/embed.html?id=4151824646229832', text: 'NOSHPA', label: 'more info', label_test:'cart', path: '/list', path_test: '/cart'},
        {src: 'https://assets.pinterest.com/ext/embed.html?id=21744010688124068', text: 'LINEX', label: 'more info', label_test:'cart', path: '/list', path_test: '/cart'},
        {src: 'https://assets.pinterest.com/ext/embed.html?id=235594624240913024', text: 'PAPAVIRIN', label: 'more info', label_test:'cart', path: '/list', path_test: '/cart'},
        {src: 'https://assets.pinterest.com/ext/embed.html?id=150589181266521962', text: 'DIMEDROL', label: 'more info', label_test:'cart', path: '/list', path_test: '/cart'},
        {src: 'https://assets.pinterest.com/ext/embed.html?id=234257618090840020', text: 'MAGNESIA', label: 'more info', label_test:'cart', path: '/list', path_test: '/cart'}
    ]);
    const [title, setTitle] = useState('')
    var test = item.filter(item => item.text.toLowerCase().includes(title))
    item = test;
    return(
        <div className="list">
            <div className="input-areas">
                    <form>
                        <input
                            type="text"
                            name="search"
                            placeholder="Enter medicine name..."
                            className="footer-input" onChange={event => setTitle(event.target.value)} />
                    </form>
                </div>
            <div className="cards__container">
            
            <div className="items">
                <ul className={"item_cards"}>
                  {item.map(cards__item => (
                       <Carditem src={cards__item.src} text={cards__item.text} label={cards__item.label} label_test={cards__item.label_test} path={cards__item.path} path_test={cards__item.path_test}
                  /> ))}
                </ul>
            </div>
            </div>
        </div>
    );
}

export default Cards;
