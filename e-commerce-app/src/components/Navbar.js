import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Navbar = () => {
    const product_count = useSelector(state => state.cart.product_count);
    const [ sidebar, toggleSidebar ] = useState('none');
    const toogleHandler = () => sidebar === 'none' ? toggleSidebar('block') : toggleSidebar('none');
    return(
    <div className="navbar">
        <i className="fa fa-bars nav-toggle" aria-hidden="true" onClick={toogleHandler}></i>
        <div className="navbar-brand">
        <Link to='/'><h1 className="heading">FlipMarket</h1></Link>
            <form className='search-bar'>
                <input type="text" placeholder="Search.."/>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
        <Sidebar toogleHandler={toogleHandler} sidebar={sidebar}/>
        <div className="navbar-links">
            <button>Login</button>
            <Link to='/cart'>
                <span className='cart-button'>
                    <i className="fa fa-shopping-cart" aria-hidden="true">
    <strong className='product-count'>{product_count === 0 ? null : product_count}</strong></i>Cart
                    </span>
                </Link>

        </div>
    </div>);
}



export const Sidebar = (props) => {
    return(<div className="nav-sidebar" style={{display : props.sidebar}}>
                <i className="fa fa-times sidebar-exit" aria-hidden="true" onClick={props.toogleHandler}></i>
                <h2 style={{textAlign : 'center'}}>FlipMarket</h2>
                <div className="nav-buttons">
                    <div>
                        <Link to='/'><button className='nav-button' onClick={props.toogleHandler}><i class="fa fa-home" aria-hidden="true"></i> Home</button></Link>
                        <button className='nav-button' onClick={props.toogleHandler}><i class="fa fa-sign-in" aria-hidden="true"></i> Login</button>
                        <Link to='/cart'><button className='nav-button' onClick={props.toogleHandler}><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</button></Link>
                    </div>

                    <h3>Categories</h3>
                    <button className='nav-category'>Shirts</button>
                    <button className='nav-category'>Trousers</button>
                </div>
            </div>);
}

export const CategoryNav = () => {
    return (<div className="category-bar">
        <span className="nav-category">Electronics<i className="fa fa-angle-down" aria-hidden="true"></i></span>
        <span className="nav-category">Electronics<i className="fa fa-angle-down" aria-hidden="true"></i></span>
        <span className="nav-category">Electronics<i className="fa fa-angle-down" aria-hidden="true"></i></span>
        <span className="nav-category">Electronics<i className="fa fa-angle-down" aria-hidden="true"></i></span>
        <span className="nav-category">Electronics<i className="fa fa-angle-down" aria-hidden="true"></i></span>
        <span className="nav-category">Electronics<i className="fa fa-angle-down" aria-hidden="true"></i></span>
        <span className="nav-category">Electronics<i className="fa fa-angle-down" aria-hidden="true"></i></span>
    </div>);
}