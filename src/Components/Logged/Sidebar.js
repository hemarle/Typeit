import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__Options">
                <Link to='/upload'>

                <div className="sidebar__Option">
                    <img src='' alt=''/>
                    <p className="sidebar__Link">Upload</p>
                </div>
                </Link>
               
               <Link to='/dashboard'>
                   
                <div className="sidebar__Option">
                    <img src='' alt=''/>
                    <p className="sidebar__Link">Dashboard</p>
                </div>
               </Link>
               <Link to='/payment'>
                <div className="sidebar__Option">
                    <img src='' alt=''/>
                    <p className="sidebar__Link">Payment</p>
                </div>

               </Link>
               <Link to='/profile'>
                <div className="sidebar__Option">
                    <img src='' alt=''/>
                    <p className="sidebar__Link">Profile</p>
                </div>

               </Link>
               <Link to='/faq'>
                <div className="sidebar__Option">
                    <img src='' alt=''/>
                    <p className="sidebar__Link">FAQ</p>
                </div>

               </Link>
               <Link to='/signOut'>
                <div className="sidebar__Option">
                    <img src='' alt=''/>
                    <p className="sidebar__Link">Sign Out</p>
                </div>

               </Link>
            </div>
        </div>
    )
}

export default Sidebar
