import React from 'react'
import './Sidebar.css'
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__Options">
                <div className="sidebar__Option">
                    <img src='' alt=''/>
                    <p className="sidebar__Link">Upload</p>
                </div>
                <div className="sidebar__Option">
                    <img src='' alt=''/>
                    <p className="sidebar__Link">Dashboard</p>
                </div>
                <div className="sidebar__Option">
                    <img src='' alt=''/>
                    <p className="sidebar__Link">Payment</p>
                </div>
                <div className="sidebar__Option">
                    <img src='' alt=''/>
                    <p className="sidebar__Link">Profile</p>
                </div>
                <div className="sidebar__Option">
                    <img src='' alt=''/>
                    <p className="sidebar__Link">FAQ</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
