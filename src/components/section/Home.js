import React, { Component } from 'react'
import {DataContext} from '../Context'

export class Home extends Component {
    static contextType = DataContext;

    render() {
        return (
            <div>
                HHHO
            </div>
        )
    }
}

export default Home
