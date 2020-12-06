import React, { Component } from 'react'
import {DataContext} from '../Context'
import '../css/Details.css'
import '../css/Cart.css'

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }

    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        return (
            <>
            {
                cart.map(item =>(
                    <div className="details cart" key = {item._id}>
                       <img src={item.src}  alt="tabletka"></img>
                        <div className="box">
                            <div className="row">
                                <h2>{item.title}</h2>
                                <span>${item.price * item.count}</span>
                            </div>
                            <p>{item.description}</p>
                             <div className="amount">
                               <button className="count" onClick={() => reduction(item._id)}>-</button>
                                <span>{item.count}</span>
                                <button className="count" onClick={() => increase(item._id)}>+</button>
                             </div>
                        </div>
                        <div className="delete" onClick={() =>removeProduct(item._id)}>x</div>
                    </div>
                ))
            }
            <div className="total">
        <h3>Total: ${total}</h3>
            </div>
            </>
        )
    }
}

export default Cart
 