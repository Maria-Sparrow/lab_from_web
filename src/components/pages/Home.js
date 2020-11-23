import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../../App.css'
import Cards from '../elements/Cards';
import HeroSection from '../section/HeroSection'
import Footer from '../footer/Footer'

function Home () {
    return(
      <>
      <HeroSection />
      <Cards />
      <Router>
      <Switch>  
        <Route path='/' exact component={Footer} />     
      </Switch>
    </Router>
      </>  
    );
}

export default Home;