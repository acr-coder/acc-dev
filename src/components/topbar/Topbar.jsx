import React from 'react'
import './topbar.css'
import img from '../img/my.jpeg'

export default function Topbar() {
    return (
        <div className="top">
            <div className="topLeft">
                <span className="logo">ACR-DEVELOPMENT</span>
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-linkedin"></i>
                </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src={img} alt="" />
                <i className="searchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
