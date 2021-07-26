import React from 'react'
import './navbar.css'
import img from '../../img/my.jpeg'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span> 
  </button>
             
  <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
  <span className="logo"><a className="logo"  href="#">ACR-DEV</a></span>
    <ul className="navbar-nav mr-auto ml-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">ABOUT</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">CONTACT</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">WRITE</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">LOGOUT</a>
      </li>
    </ul>
    <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-linkedin"></i>
    <img className="topImg" src={img} alt="" />
                <i className="searchIcon fas fa-search"></i>
  </div>
</nav>
    )
}
