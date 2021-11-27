import React from 'react'
import './Features.css'
import mark from './images/mark.png'

import illustration from './images/Illustration/Illustration2.svg'
function Features() {
    return (
        <div className='features'>
            <div className='features__Image'>
                <img className='features__Illustration' src={illustration} alt='illustration' />
            </div>
            <div className='features__Content'>
                <h2 className='features__Title'>We provide many features you can use</h2>
                <p className='features__About'> You can explore the features that we provide with fun and have their own functions each feature.</p>
                <ul className='features__Lists'>
                    <li className='features__List'><img src={mark }/> <p>Powerful online protection.</p></li>
                    <li className='features__List'><img src={mark }/> <p>Internet without borders</p></li>
                    <li className='features__List'><img src={mark }/> <p>Supercharged VPN</p></li>
                    <li className='features__List'><img src={mark }/> <p>No specific time limits</p></li>
                    <li className='features__List'><img src={mark }/> <p>No down time</p></li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Features
