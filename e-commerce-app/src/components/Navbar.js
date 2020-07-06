import React, { useState, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { authLogout } from '../actions/authActions';

const Navbar = (props) => {
    const inputTarget = useRef();
    const authUser = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const product_count = useSelector(state => state.cart.product_count);
    const [ sidebar, toggleSidebar ] = useState('none');
    const toogleHandler = () => sidebar === 'none' ? toggleSidebar('block') : toggleSidebar('none');
    const submitHandler = (event) => {
        event.preventDefault();
        const input = inputTarget.current.value;
        console.log(props.history.push('/search/q=?' + input));
    }

    const loginButtonHandler = () => {
        if(authUser === null) props.history.push('/login')  
        else {
            dispatch(authLogout());
            props.history.push('/');
        }
    }
    
    return(
    <div className="navbar">
        <i className="fa fa-bars nav-toggle" aria-hidden="true" onClick={toogleHandler}></i>
        <div className="navbar-brand">
        <Link to='/'><h1 className="heading">FlipMarket</h1></Link>
            <form className='search-bar' onSubmit={submitHandler}>
                <input type="text" placeholder="Search.." ref={inputTarget}/>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
        <Sidebar toogleHandler={toogleHandler} sidebar={sidebar}/>
        <div className="navbar-links">
    <button onClick={loginButtonHandler}>{authUser === null ? 'Login' : 'Log Out'}</button>
            <Link to='/cart'>
                <span className='cart-button'>
                    <i className="fa fa-shopping-cart" aria-hidden="true">
    <strong className='product-count'>{product_count === 0 ? null : product_count}</strong></i>Cart
                    </span>
                </Link>

        </div>
    </div>);
}



const Sidebar = (props) => {
    return(<div className="nav-sidebar" style={{display : props.sidebar}}>
                <i className="fa fa-times sidebar-exit" aria-hidden="true" onClick={props.toogleHandler}></i>
                <h2 style={{textAlign : 'center'}}>FlipMarket</h2>
                <div className="nav-buttons">
                    <div>
                        <Link to='/'><button className='nav-button' onClick={props.toogleHandler}><i className="fa fa-home" aria-hidden="true"></i> Home</button></Link>
                        <Link to='/cart'><button className='nav-button' onClick={props.toogleHandler}><i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart</button></Link>
                        <Link to='/login'><button className='nav-button' onClick={props.toogleHandler}><i className="fa fa-sign-in" aria-hidden="true"></i> Login</button></Link>
                        
                    </div>

                    <h3>Categories</h3>
                    <button className='nav-category'>Shirts</button>
                    <button className='nav-category'>Trousers</button>
                </div>
            </div>);
}

export default withRouter(Navbar);