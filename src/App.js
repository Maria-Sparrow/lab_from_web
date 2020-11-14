import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import List from './components/pages/List';
import Cart from './components/pages/Cart';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/list' exact component={List} />
        <Route path='/cart' exact component={Cart} />      
      </Switch>
    </Router>
    </>
  );
}

export default App;
