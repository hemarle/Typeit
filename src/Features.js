import React from 'react'
import './Features.css'
import mark from './images/mark.png'

import illustration from './images/Illustration/Illustration2.svg'
function Features() {
    return (
        <div className='features' id='features' >
            <div className='features__Image'>
                <img className='features__Illustration' src={illustration} alt='illustration' />
            </div>
            <div className='features__Content'>
                <h2 className='features__Title'>We provide many features you can use</h2>
                <p className='features__About'> You can explore the features that we provide with fun and have their own functions each feature.</p>
                <ul className='features__Lists'>
                    <li className='features__List'><img src={mark } alt='mark icon'/> <p>Fast online delivery</p></li>
                    <li className='features__List'><img src={mark } alt='mark icon'/> <p>Typing without borders</p></li>
                    <li className='features__List'><img src={mark } alt='mark icon'/> <p>Error free typed projects</p></li>
                    <li className='features__List'><img src={mark } alt='mark icon'/> <p>24/7 supports</p></li>
                    <li className='features__List'><img src={mark } alt='mark icon'/> <p>Supports different document types</p></li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Features
