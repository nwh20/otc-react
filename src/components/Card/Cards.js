import React from 'react';

const Cards = (props) => {
    let itemURL = props.item.viewItemURL;
    let price = props.item.sellingStatus[0].currentPrice[0]['__value__'];
    
    if (/\.\d$/.test(price)) price -= '0';
    
    const toPage = (props) => {
        window.open(itemURL, 'newWindow');
    }
    
    const mouseoverCard = (e) => {
        e.target.style.opacity = '.5';
    }
    
    const mouseleaveCard = (e) => {
        e.target.style.opacity = '1';
    }
    
    return (
        <div className="cards">
            <img className="cards-img" src={props.item.galleryURL[0]} alt="thumbnail" onClick={toPage} onMouseOver={mouseoverCard} onMouseLeave={mouseleaveCard} />
            <div className="cards-title">{props.item.title[0]}</div>
            <span className="cards-price">${price}</span>
        </div>
    );
}

export default Cards;