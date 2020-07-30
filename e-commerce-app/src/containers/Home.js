import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import queryString from 'query-string';

//Actions
import { addCart } from '../actions/cartActions';
//Components
import { ProductListView } from '../components/ProductView';
import { ProductCardL } from '../components/ProductCard';
import FilterColumn from '../components/FilterColumn';

import { populateProducts } from '../actions/productActions';


const Home = (props) => {
    const [pageTitle, setTitle] = useState('All')
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();
    // console.log(products)
    
    useEffect(() => {
        const query = queryString.parse(props.location.search)
        if(query.category !== undefined){
            setTitle(query.category.charAt(0).toUpperCase() + query.category.slice(1))
        } else{
            if(query.search !== undefined){
                setTitle(query.search)
            } else {
                setTitle('All')
            }
        }
        dispatch(populateProducts(query.category, query.search))
    }, [dispatch, props.location.search])
    const addToCartHandler = (product) => dispatch(addCart(product));
    
    return(
    <div>
        <div className="Home">
            <FilterColumn history={props.history} location={props.location}/>
            <div className="home-content">
                <ProductListView title={pageTitle} large={true}>
                    { products.map((product) => <ProductCardL key={product._id} product={product} addCart={addToCartHandler}/>) }
                </ProductListView>
            </div>
        </div>
    </div>);
}

export default Home;