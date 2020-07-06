import React from 'react';
import './assets/css/main.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


//Components
import Home from './containers/Home';
import Cart from './containers/Cart';
import Auth from './containers/Auth';
import LandingPage from './containers/LandingPage';
import ProductPage from './containers/ProductPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import productReducer from './reducers/productReducer';


const App = () => {
  const authUser = useSelector(state => state.auth.user);
  return (
    <div className="App">
        <Navbar />
          <Switch>
            { authUser === null ? <Redirect from="/cart" to="login"/> : <Route exact path='/cart' component={Cart}/> }
            { authUser !== null ? <Redirect from="/login" to='/' /> : <Route exact path='/login' component={Auth} />}
            <Route exact path='/product/:id' component={ProductPage}/>
            <Route path='/search' component={Home}/>
            <Route exact path='/' component={LandingPage} />
            <Redirect to='/' />
          </Switch>
        <Footer />


    </div>
  );
}

export default App;
