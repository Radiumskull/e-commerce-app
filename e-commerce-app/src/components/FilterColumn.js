import React from 'react';

const FilterColumn = (props) => {
    const categoryChangeHandler = (category) => {
        props.history.push('/search/?category=' + category);
    }
    return(<div className="filter-column">
        <h1>Filters</h1>
        <div>
            <button className='nav-category' onClick={() => categoryChangeHandler('televisions')}>Televisions</button>
            <button className='nav-category' onClick={() => categoryChangeHandler('mobiles')}>Mobiles</button>
            <button className='nav-category' onClick={() => categoryChangeHandler('air conditioner')}>Air Conditioner</button>
        </div>
    </div>);
}


export default FilterColumn;