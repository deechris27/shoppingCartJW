import React, { useRef, useState } from 'react';

const Filter = () => {
    const maxPrice = useRef(null);
    const [maxRange, setMaxRange] = useState(100000);
    const [minRange, setMinRange] = useState(0);

    const updateMaxRange = (e) => {
        setMaxRange(e.target?.value);
    }
    const updateMinRange = (e) => {
        setMinRange(e.target?.value);
    }
    return (
        <div className="filter-section">
            <h3>Filters</h3>
            <div className="filter-type">
                <label>Min Price</label>
                <input type="range" min="1" max="100000" value={minRange} ref={maxPrice} onChange={(e) => updateMinRange(e)} />
                <p>{minRange}</p>
                <br />
                <label>Max Price</label>
                <input type="range" min="1" max="100000" value={maxRange} ref={maxPrice} onChange={(e) => updateMaxRange(e)} />
                <p>{maxRange}</p>
            </div>

            <button>Apply</button>
          
        </div>
    )
}

export default Filter;