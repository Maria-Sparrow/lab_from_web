import {useState} from 'react'
import { Link } from "react-router-dom";
import { withRouter, Redirect } from "react-router";
import "./Login.css"

function checkData(email,password){
    if (localStorage.getItem("email")==email && localStorage.getItem("password")==password ){
        localStorage.setItem("isActivated",true)
    return(
        <Redirect to="/"/>)
}}
function Login (){
    const [email,setEmail] = useState(localStorage.getItem("email"))
    const [password,setPassword] = useState(localStorage.getItem("password"))
       if (localStorage.getItem("email")==email && localStorage.getItem("password")==password ){
        localStorage.setItem("isActivated",true)
    return(<div className="Login">
    <h1 className="mainTitleSecond"> Login Page </h1>
    <h5 onClick={()=>(localStorage.setItem("isActivated",false))}>Logout</h5>
      <input className="login" placeholder="Email" onChange={(event)=>setEmail(event.target.value)}/>
      <input className="login" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/>
     <Link to="/"><button className="buttonLogin">Submit</button></Link>
      <Link to="/registration" ><h1 className="text">Don't have acc?</h1></Link>
  </div>)}
    return (
        <div className="Login">
          <h1 className="mainTitleSecond"> Login Page </h1>
          <h1 onClick={()=>(localStorage.setItem("isActivated",false))}>Clean</h1>
            <input className="login" placeholder="Email" onChange={(event)=>setEmail(event.target.value)}/>
            <input className="login" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/>
            <button className="buttonLogin">Submit</button>
            <Link to="/registration" ><h1 className="text">Don't have acc?</h1></Link>
        </div>
      );
    }
export default Login