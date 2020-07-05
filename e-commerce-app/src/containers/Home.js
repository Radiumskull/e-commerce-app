import React from 'react';
import { useSelector, useDispatch } from "react-redux";

//Actions
import { addCart } from '../actions/cartActions';

//Components
import { ProductListView } from '../components/ProductView';
import { ProductCardL } from '../components/ProductCard';

import FilterColumn from '../components/FilterColumn';


const Home = () => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    const addToCartHandler = (product) => dispatch(addCart(product));
    const productComps = products.map((product) => <ProductCardL key={product.product_id} product={product} addCart={addToCartHandler}/>);

    return(
    <div>
        <div className="Home">
            <FilterColumn />
            <div className="home-content">
                <ProductListView title="Clocks" large={true}>
                    { productComps }
                </ProductListView>
            </div>
        </div>
    </div>);
}

export default Home;