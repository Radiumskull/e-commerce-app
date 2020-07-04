import React from 'react';
import './assets/css/main.scss';
import { Switch, Route } from 'react-router-dom';


//Components
import Home from './containers/Home';
import Cart from './containers/Cart';
import ProductPage from './containers/ProductPage'

import { Navbar } from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
          <Switch>
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/product' component={ProductPage}/>
            <Route exact path='/' component={Home}/>
          </Switch>
        <Footer />


    </div>
  );
}

export default App;
