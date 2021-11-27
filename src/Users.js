import React from 'react'
import './Users.css'
import user from './images/user.png'
function Users() {
    return (
        <div className='users'>
            <div className='users__Cards'>

                <div className='users__Card'>
                    <div className='users__Icon'>
                        <img src={user} />
                    </div>
                    <div className='users__Details'>
                        <h3>90+</h3>
                        <p> Users</p>
                    </div>
                </div>
             
                <div className='users__Card'>
                    <div className='users__Icon'>
                        <img src={user} />
                    </div>
                    <div className='users__Details'>
                        <h3>30+</h3>
                        <p> Location</p>
                    </div>
                </div>
             
                <div className='users__Card'>
                    <div className='users__Icon'>
                        <img src={user} />
                    </div>
                    <div className='users__Details'>
                        <h3>50+</h3>
                        <p> Servers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Users
