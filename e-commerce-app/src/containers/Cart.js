import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { addQuantity, removeProduct } from '../actions/cartActions';

import { ProductCardE } from '../components/ProductCard';

const Cart = (props) => {
    const dispatch = useDispatch();
    const cart_products = useSelector(state => state.cart.products, shallowEqual);
    const product_count = useSelector(state => state.cart.product_count, shallowEqual);
    const total_price = useSelector(state => state.cart.total, shallowEqual);
    console.log(product_count);
    const quantityChangeHandler = (product_id, quantity) =>  dispatch(addQuantity(product_id, quantity));
    const removeHandler = (product) => dispatch(removeProduct(product));


    const productComps = cart_products.map((product) => <ProductCardE key={product.product_id} data={product} quantityChangeHandler={quantityChangeHandler} removable={true} removeHandler={removeHandler}/>);
    return(<div className="cart">
        <h1 style={{textAlign:'center',margin : '30px auto'}}>Cart</h1>
        { productComps }
        <div className="cart-checkout">
        <h4>Products : {product_count}</h4>
            <span>
                <strong>Total : $ {total_price.toFixed(2)}</strong>
                <button>Buy Now</button>
            </span>
        </div>
    </div>);
}


export default Cart;