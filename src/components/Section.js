import React, { Component } from 'react'
import Products from './section/Products'
import Details from './section/Details'
import {Route} from "react-router-dom"
import Cart from './section/Cart'
import './css/test.css'
export class Section extends Component {
    render() {
        return (
            <getSelection  >
                <Route exact path="/product" component={Products}/>
                <Route path="/product/info" component={Products}/>
                <Route path="/cart" component={Cart}/>
            </getSelection>
        )
    }
}

export default Section
