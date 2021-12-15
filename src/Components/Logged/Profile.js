import React from 'react'
import './Profile.css'
import alex from '.././images/alex.png'
function Profile() {
    return (
        <div className='profile'>
            <div className="profile__Image">
                <img src={alex} alt="" />
            </div>
            <h1>Profile</h1>
            <div className="profile__Content">
                <div className="profile__Details">
                    <div className="profile__Detail">
                        <h4 className="profile__Name">
                            Name:
                        </h4>
                        <p>Daramola Oli</p>
                    </div>
                    <div className="profile__Detail">
                        <h4 className="profile__Name">
                            Name:
                        </h4>
                        <p>Daramola Oluwafemi</p>
                    </div>
                    <div className="profile__Detail">
                        <h4 className="profile__Name">
                            Name:
                        </h4>
                        <p>Daramola Oluwafemi</p>
                    </div>
                    <div className="profile__Detail">
                        <h4 className="profile__Name">
                            Name:
                        </h4>
                        <p>Daramola Oluwafemi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile
