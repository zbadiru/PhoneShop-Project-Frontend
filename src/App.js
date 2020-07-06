import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import './App.css';

import PhoneCollection from './containers/PhoneCollection'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Error from './components/Error'


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar />
        <Switch >
          <Route exact path='/' component={ProductList}/>
          <Route path='/details' component={Details}/>
          <Route path='/cart' component={Cart}/>
          <Route component={Error}/>
        </Switch>
      </React.Fragment>
    </div>
  );
}

export default App;
