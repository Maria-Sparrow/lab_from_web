
import {useState} from 'react'
import { Link } from "react-router-dom";
import { withRouter, Redirect } from "react-router";

import "./Login.css"

function setData(email,password){
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)
    localStorage.setItem("isActivated",true)
    return(
      <Redirect to="/login"/>)
}
function Registration (){
    const [email,setEmail] = useState(localStorage.getItem("email"))
    const [password,setPassword] = useState(localStorage.getItem("password"))

    return (
        <div className="Login">
          <h1 className="mainTitleSecond"> Registration Page </h1>
            <input className="login" placeholder="Email" onChange={(event)=>setEmail(event.target.value)}/>
            <input className="login" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/>
            <Link to="/login"><button className="buttonLogin" onClick={()=>setData(email,password)}>Submit</button></Link>
        </div>
      );
    }
export default Registration