import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import img from "../../img/my.jpeg";

export default function Navbar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
        <span className="logo">
          <a className="logo" href="#">
            ACR-DEV
          </a>
        </span>
        <ul className="navbar-nav mr-auto ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              {user && "LOGOUT"}
            </a>
          </li>
          {/* {!user && <li className="nav-item"><Link className="nav-link" to="/login">LOGIN</Link></li>}
          {!user && <li className="nav-item"><Link className="nav-link" to="/register">REGISTER</Link></li>} */}
        </ul>
       
        {!user && <li className="topIcon"><Link className="nav-link" to="/login">LOGIN</Link></li>}
        {!user && <li className="topIcon"><Link className="nav-link" to="/register">REGISTER</Link></li>}
        {user && <img className="topImg" src={img} alt="" />}
        <i className="searchIcon fas fa-search"></i>
      </div>
    </nav>
  );
}
