import React, { useState } from 'react'
import placeholder from '../assets/images/placeholder.png';

export const ProductCard = () => {
    return(
    <div className="product-card">
        <img src={placeholder} className="card-image" alt="product"/>
        <div className="product-details">
            <p className="product-name">Sports Toys, Boxers</p>
            <p className="product-offer">Upto 60% + Extra 10% Off</p>
            <p className="product-category">Marvel, Barbie & More</p>
        </div>
    </div>);
}



export const ProductCardL = (props) => {
    const [overlay, changeOverlay ] = useState('none');
    const overlayHandler = (s) => changeOverlay(s);
    const product = props.product;
    return(
        <div className="product-card product-card-large" onClick={() => overlayHandler('flex')} onMouseLeave={() => overlayHandler('none')}>
        <div className="overlay" style={{display : overlay}}>
            <button onClick={() => props.addCart(product)}>Add Cart</button>
        </div>
        <div className="card-image">
        <img src={placeholder} alt="product"/>
        {/* <i className="fa fa-heart" color="white"></i> */}
        </div>
        <div className="product-details">
            <div>
    <h4 className="product-name">{product.product_name}</h4>
                <sub>This is a awesome product</sub>
            </div>
            <Rating rating={product.rating}/>
    <strong>$ {product.price}</strong> <del>$ {product.price + 2}</del>
        </div>
    </div>);
}

export const ProductCardE = (props) => {
    const product = props.data;

    return(<div>
        <div className="product-card product-card-extended">
        <img src={placeholder} className="card-image" alt="product"/>
        <div className="product-details">
        {props.removable ? <i className="fa fa-times" aria-hidden="true" onClick={() => props.removeHandler(product)}></i> : null}
            <div className="product-features">
                <p className="product-name">{product.product_name}</p>
                <sub>This is a awesome product</sub>
                <ul style={{listStyle : 'dots'}}>
                    <li><h5>Very good product</h5></li>
                    <li><h5>Very good product</h5></li>
                    <li><h5>Very good product</h5></li>
                    <li><h5>Very good product</h5></li>
                    <li><h5>Very good product</h5></li>
                    <li><h5>Very good product</h5></li>
                </ul>
            </div>
            <div className='product-action'>
                <select size='1' value={product.quantity} onChange={(event) => props.quantityChangeHandler(product.product_id, parseInt(event.currentTarget.value))} >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                </select>
                <div>
                    <Rating rating={product.rating}/>
                </div>
                <div><strong>${product.price.toFixed(2)}</strong> &nbsp; <del>${product.price + 2}</del></div>
            </div>

        </div>
    </div>
    </div>);

}


export const Rating = (props) => {
    let rating = "";
    for(let i = 1; i <= 5; i++){
        if(i <= Math.round(props.rating % 5)) rating += '★';
        else rating += '☆';
    }
    return(
    <div className="rating">
        {rating}
    </div>
    );
}