import React from 'react'
import './Plan.css'
import mark from './images/mark.png'
import premium from './images/Illustration/Premium.svg'
function Plan() {
    return (
        <div className='plan'>
            <div className='plan__Header'>
                <h2> Choose Your plan</h2>
                <p> Let's choose the package that is beast for you and explore it happily and cheerfully</p>
            </div>
            <div className='plan__Cards'>
                <div className='plan__Card'>
                    <img src={premium} />
                    <h4>Free Plan</h4>
                    <ul>
                        <li><img src={ mark}/><p>Unlimited Bandwith</p></li>
                        <li><img src={ mark}/><p>Encrypted Connection</p></li>
                        <li><img src={ mark}/><p>Traffic logs</p></li>
                        <li><img src={ mark}/><p>Works on all devices</p></li>
                        {/* <li><img src={ mark}/>lakid</li>
                        <li><img src={ mark}/>lakid</li> */}
                    </ul>
           
                    <div className='plan__Bottom'>
                        
                    <h3>Free</h3>
                    <a href=''>Select</a>
                   </div>
                </div>
                <div className='plan__Card'>
                    <img src={premium} />
                    <h4>Free Plan</h4>
                    <ul>
                        <li><img src={ mark}/><p>Unlimited Bandwith</p></li>
                        <li><img src={ mark}/><p>Encrypted Connection</p></li>
                        <li><img src={ mark}/><p>Traffic logs</p></li>
                        <li><img src={ mark}/><p>Works on all devices</p></li>
                        {/* <li><img src={ mark}/>lakid</li>
                        <li><img src={ mark}/>lakid</li> */}
                    </ul>
                    <div className='plan__Bottom'>
                        
                    <h3>Free</h3>
                    <a href=''>Select</a>
                   </div>
                </div>
                <div className='plan__Card'>
                    <img src={premium} />
                    <h4>Free Plan</h4>
                    <ul>
                        <li><img src={ mark}/><p>Unlimited Bandwith</p></li>
                        <li><img src={ mark}/><p>Encrypted Connection</p></li>
                        <li><img src={ mark}/><p>Traffic logs</p></li>
                        <li><img src={ mark}/><p>Works on all devices</p></li>
                        {/* <li><img src={ mark}/>lakid</li>
                        <li><img src={ mark}/>lakid</li> */}
                    </ul>
           
                    <div className='plan__Bottom'>
                        
                    <h3>Free</h3>
                    <a href=''>Select</a>
                   </div>
                </div>
            </div>
        </div>
    )
}
export default Plan 
