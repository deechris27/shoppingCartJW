import React, { useState } from 'react';
import './Sort.styles.scss';


export default function Sort(){

    const [sortType, setSortType] = useState('');

    const sortPriceLH = () => {
        setSortType('priceLH');
        //sortPriceLowHigh();
    };
    const sortPriceHL = () => {
        setSortType('priceHL');
        //sortPriceHighLow();
    }
    const sortDisc = () => {
        setSortType('disc');
        //sortDiscount();
    }

    return (
        <div className="sort-wrapper">
            <p className="sort-text">
                Sort By:
                </p>
            <p className={`sort ${sortType === 'priceLH' ? 'active' : ''}`} onClick={sortPriceLH}>Price - Low High</p>
            <p className={`sort ${sortType === 'priceHL' ? 'active' : ''}`} onClick={sortPriceHL}>Price - High Low</p>
            <p className={`sort ${sortType === 'disc' ? 'active' : ''}`} onClick={sortDisc}>Discount</p>
        </div>
    )
}
