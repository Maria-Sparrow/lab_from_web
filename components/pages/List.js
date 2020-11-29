import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import '../../App.css'
import Footer from '../footer/Footer'
import Cards from '../elements/Cards'


export default function List() {
    return (
        <>
         <Router>
      <Switch> 
          <Route  path='/list' component={Cards} />  
      </Switch>
    </Router>
    <Router>
      <Switch> 
          <Route  exact path='/list'  component={Footer} />  
             
      </Switch>
    </Router>
        </>
    );}
