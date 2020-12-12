import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'
import '../css/Products.css'
import '../css/loader.css'
import { Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
import InfoItem from './InfoItem'
import { useList } from "react-firebase-hooks/database";
import TutorialDataService from "../section/service";

function Products() {

    let [tutorials, loading] = useList(TutorialDataService.getAllShow());
    let [tutorialsShow] = useList(TutorialDataService.getAll());
    
    const [title, setTitle] = useState('')

    const [filter, setFilter] = useState('')
    let [showMore, setShowMore] = useState('')
  
    if(showMore=="1"){
            console.log(showMore)
            tutorials=tutorialsShow
    }
    console.log(filter)
    tutorials = tutorials.filter(tutorial => tutorial.val().name.toLowerCase().includes(title))


    tutorials = tutorials.filter(tutorial => tutorial.val().producer.includes(filter))

    return (
    <>  <>{loading&&<div class="loader">Loading...</div>}</>
 <>


        <div id="product">
         
            <BrowserRouter>
                <Route path={["/product/info"]} >
                    <InfoItem medicine={tutorials} />

                </Route>
                <Route exact path={["/product"]}>
           
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
                         <button className="show_more" value='1' onClick={event => setShowMore(event.target.value)}>Show more</button>

                    {!loading &&
                        tutorials &&
                        
                        tutorials.map(product => (
                            <div className="card" >

                                <img src={product.val().img} ></img>

                                <div className="content">
                                    <h3>
                                        <Link to={"/product/info/" + product.key}>{product.val().name}</Link>
                                    </h3>
                                    <span>${product.val().price}</span>
                                    <p>{product.val().producer}</p>
                                    <button >Add to cart</button>
                                </div>
                            </div>

                        ))
                    }
                           
                 
                </Route>
            </BrowserRouter>

        </div>

        </>
        </>
    );
}
export default Products