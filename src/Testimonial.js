import React from 'react'
import './Testimonial.css'
import alex from './images/alex.png'
import star from './images/star.png'
function Testimonial() {
    return (
        <div className='testimonial'>
            <h1 className='testimonial__Title'>
                Trusted by Thousands of happy customer
            </h1>
            <p className='testimonial__About'>   Hear what our customers have to say.</p>
            <div className='testimonial__Cards'>
                <div className='testimonial__Card'>

                    <div className='testimonial__CardHeader'>
                        <div className='testimonial__Avatar'>
                            <img src={alex} alt='alex avatar' />
                       </div>
                        <div className='testimonial__Details'>
                            <h3 className='testimonial__Name'>
                                Victor Akunagba
                            </h3>
                            <p className='testimonial__Role'>Side huste</p>
                        </div>
                        <div className='testimonial__Star'>

                            <p>4.5 </p>
                                <img src={star} alt='star' />
                        </div>
                    </div>
                    <p className='testimonial__Content'> “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
