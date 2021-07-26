import React from 'react'
import './login.css'
import { Link } from "react-router-dom";


export default function Login() {
    return (
        <div className="box" >
            
        <div className="d-flex flex-column  container w-50">
       
            <form >
                <h1>LOGIN</h1>
  <div className="d-flex flex-column form-group">
    
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username..."/>
    
  </div>
  <div className="d-flex flex-column form-group">
    
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password..."/>
  </div>
  <div className="d-flex flex-column form-group align-items-center">
  <button type="submit" className="btn btn-primary form-control ">Login</button>
  <button type="submit" className="btn btn-secondary form-control login">
  <Link className="nav-link" to="/register">REGISTER</Link>
  </button>
 
  </div>
  
</form>
            
        </div>
        </div>
    )
}
