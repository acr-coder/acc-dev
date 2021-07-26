import React from 'react'
import './sidebar.css';
import myimg from '../../img/my.jpeg'
import yazilim from '../../img/yazilim.jpg'
import react from '../../img/react.jpg'
import scratch from '../../img/scratch.jpg'
import javascript from '../../img/javascript.jpg'
import go from '../../img/go.jpg'
import java from '../../img/java.jpg'
import appInventor from '../../img/appInventor.jpg'

export default function Sidebar() {
    
    return (
        <div className="container sidebar">
            <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src={myimg} alt="" />
                <p>Hi. I'm a Full Stack developer. Also giving programming lessons. I have 
                    7 courses on Udemy. 
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">MY UDEMY COURSES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem"><a href="https://www.udemy.com/course/reactjs-temelleri-egitimi/?referralCode=655141A3FF8AA81737EC" target="_blank" rel="noreferrer">React and Next Js <br /><img className="sidebarSmallImage" src={react} alt="" /></a></li>
                    <li className="sidebarListItem"><a href="https://www.udemy.com/course/yazilim-temel-baslangic-egitimi/?referralCode=E204C3C2C629F18D4F31" target="_blank" rel="noreferrer">Software For Beginners <br /><img className="sidebarSmallImage" src={yazilim} alt="" /></a></li>
                    <li className="sidebarListItem"><a href="https://www.udemy.com/course/scratch-cocuklar-ve-yetiskinler-icin-kodlama-dersleri/?referralCode=64361BF170469F3272F1" target="_blank" rel="noreferrer">Scratch <br /><img className="sidebarSmallImage" src={scratch} alt="" /></a></li>
                    <li className="sidebarListItem"><a href="https://www.udemy.com/course/javascript-dili-temelleri/?referralCode=15DD5C75152B55E3012F" target="_blank" rel="noreferrer">Javascript For Beginners <br /><img className="sidebarSmallImage" src={javascript} alt="" /></a></li>
                    <li className="sidebarListItem"><a href="https://www.udemy.com/course/go-programlama-dili-temelleri/?referralCode=B692EDDE5F6474FFFC13" target="_blank" rel="noreferrer">Go Language For Beginners <br /><img className="sidebarSmallImage" src={go} alt="" /></a></li>
                    <li className="sidebarListItem"><a href="https://www.udemy.com/course/java-ile-nesne-tabanl-programlama-temelleri/?referralCode=5567B0934773D21E247B" target="_blank" rel="noreferrer">Java OOP <br /><img className="sidebarSmallImage" src={java} alt="" /></a></li>
                    <li className="sidebarListItem"><a href="https://www.udemy.com/course/android-uygulama-gelistirme-egitimi/?referralCode=404A0A6313312CF75FCA" target="_blank" rel="noreferrer">App Inventor <br /><img className="sidebarSmallImage" src={appInventor} alt="" /></a></li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-linkedin"></i>
                </div>
            </div>

        </div>
    )
}
