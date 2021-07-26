import React from 'react'
import './register.css'
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="box" >
        <div className="d-flex flex-column  container w-50">
            <form >
                <h1>Register</h1>
  <div className="d-flex flex-column form-group">
    
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username..."/>
    
  </div>
  <div className="d-flex flex-column form-group">
    
    <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email..."/>
    
  </div>
  <div className="d-flex flex-column form-group">
    
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password..."/>
  </div>
  
  <button type="submit" className="btn btn-primary form-control">Register</button>
  <button type="submit" className="btn btn-secondary form-control register">
  <Link className="nav-link" to="/login">LOGIN</Link>
  </button>
  
  
</form>
            
        </div>
        </div>
    )
}
