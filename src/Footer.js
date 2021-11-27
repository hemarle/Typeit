import React from 'react'
import './Footer.css'
import logo from './images/logo.png'
function Footer() {
    return (
        <div className='footer'>
            <div className='footer__Left'>
                <div className='footer__LeftName'>
                    <img src={logo} />
                    <h3>FEMIVPN</h3>
                </div>
                <p className='footer__About'>LaslesVPN is a private virtual network that has unique features and has high security.</p>
                <div className='footer__Social'>
                    <img src=''/>
                    <img src=''/>
                    <img src=''/>
</div>
            </div>
            <div className='footer__Product'>
                <ul>
                    <li className='footer__Subtitle'>Product</li>
<li><a href='#'>Download</a></li>                
<li><a href='#'>Pricing</a></li>                
<li><a href='#'>Location</a></li>                
                </ul>
            </div>
            <div className='footer__Engage'>
            <ul>
                    <li className='footer__Subtitle'>Engage</li>
<li><a href='#'>FemiVPN?</a></li>                
<li><a href='#'>FAQ</a></li>                
<li><a href='#'>Tutorials</a></li>                
                </ul>
            </div>
            <div className='footer__Earn'>
            <ul>
                    <li className='footer__Subtitle'>Earn Money</li>
<li><a href='#'>Affilate</a></li>                
<li><a href='#'>Become a partner</a></li>                
                </ul>
            </div>
        </div>
    )
}

export default Footer
