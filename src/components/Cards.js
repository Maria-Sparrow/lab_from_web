import React from 'react'
import Carditem from './Carditem'
import './Cards.css';
function Cards() {
    return (
        <div className="cards">
            <h1>TEST</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards_items">
                        <Carditem 
                        src="images/image-2.png"
                        text="ANALGIN"
                        label='more info'
                        label_test='cart'
                        path='/list'
                        path_test='/cart'
                        />
                         <Carditem 
                        src="images/image-2.png"
                        text="NOSHPA"
                        label='more info'
                        label_test='cart'
                        path='/list'
                        path_test='/cart'
                        />
                         <Carditem 
                        src="images/image-2.png"
                        text="LINEX"
                        label='more info'
                        label_test='cart'
                        path='/list'
                        path_test='/cart'
                        />

                    </ul>
                </div>
            </div>

            
        </div>
    )
}

export default Cards;
