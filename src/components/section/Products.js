import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'
import '../css/Products.css'
import { useList } from "react-firebase-hooks/database";
import TutorialDataService from "../section/service";

// export class Products extends Component {

//     static contextType = DataContext;

//     constructor(props) {
//         super(props)
//         this.state = {
//             poetFilter: "",
//             filter: ""

//         }
//     }

//     handleChange = (e) => {
//         this.setState({
//             poetFilter: e.target.value
//         })
//     }
//     filterChange = (e) => {
//         this.setState({
//            filter: e.target.value
//         })
//     }


//     render() {
//         console.log(this.state.poetFilter)
//         let { products } = this.context;
//         var test = products.filter(product => product.title.toLowerCase().includes(this.state.poetFilter))
//         products = test;
//         var testFilter = products.filter(product => product.country.includes(this.state.filter))
//         products = testFilter;
//         return (
//             <div id="product">
//                 <p className="find-text">Filter:</p>
//                 <select name="filter" class="filter-block" onChange={this.filterChange}>
//                     <option id="sortOption"></option>
//                     <option id="sortOption" value="USA">USA</option>
//                     <option id="sortOption" value="India">India</option>
//                     <option id="sortOption" value="Ukraine" >Ukraine</option>
//                 </select>
//                 <p className="find-text">Find:</p>
//                 <input type="text" id="filter"

//                     onChange={this.handleChange} />
//                 {
//                     products.map(product => (
//                         <div className="card" key={product._id}>
//                             <Link to={`/product/${product._id}`}>
//                                 <img src={product.src} ></img>
//                             </Link>
//                             <div className="content">
//                                 <h3>
//                                     <Link to={`/product/${product._id}`}>{product.title}</Link>
//                                 </h3>
//                                 <span>${product.price}</span>
//                                 <p>{product.descrition}</p>
//                                 <button onClick={() => this.context.addCart(product._id)}>Add to cart</button>
//                             </div>
//                         </div>

//                     ))
//                 }
//             </div>
//         )
//     }
// }

// export default Products
function Products() {
    var [tutorials, loading] = useList(TutorialDataService.getAll());
    const [title, setTitle] = useState('')

  const [filter, setFilter] = useState('')
  console.log(filter)
  var test = tutorials.filter(tutorial => tutorial.val().name.toLowerCase().includes(title))
  tutorials = test;

  var testFilter = tutorials.filter(tutorial => tutorial.val().rating.includes(filter))
  tutorials = testFilter;
    return (


        <div id="product">
            <p className="find-text">Filter:</p>
            <select name="filter" class="filter-block" onChange={event => setFilter(event.target.value)}>
                <option id="sortOption"></option>
                <option id="sortOption" value="USA">USA</option>
                <option id="sortOption" value="India">India</option>
                <option id="sortOption" value="Ukraine" >Ukraine</option>
            </select>
            <p className="find-text">Find:</p>
            <input type="text" id="filter"

                onChange={event => setTitle(event.target.value)} />
            {
                tutorials.map(product => (
                    <div className="card" key={product._id}>
                        <Link to={`/product/${product.key}`}>
                            <img src={product.val().src} ></img>
                        </Link>
                        <div className="content">
                            <h3>
                                <Link to={`/product/${product.key}`}>{product.val().title}</Link>
                            </h3>
                            <span>${product.val().price}</span>
                            <p>{product.val().descrition}</p>
                            {/* <button onClick={() => this.context.addCart(product._id)}>Add to cart</button> */}
                        </div>
                    </div>

                ))
            }
        </div>
    );
}
export default Products