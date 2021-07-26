import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './setting.css'
import myimg from '../../img/my.jpeg'

export default function Settings() {
    return (
        <div className="container settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="form-group settingsPP">
                        <img src={myimg} alt="" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fas fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"/>
                    </div>                    
                    
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
