import React from 'react'
import './Footer.css'
import logo from './images/logo.png'

// import MailIcon from '@mui/icons-material/Mail';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Footer() {
    return (
        <div className='footer'>
            <div className='footer__Left'>
                <div className='footer__LeftName'>
                    <img src={logo} alt='brand icon' />
                    <h3>TypeIT</h3>
                </div>
                <p className='footer__About'>TypeIT is a cheap platform that gets all your typing done without errors</p>
                <div className='footer__Social'>
                    {/* <img src='' alt='facebook icon' /> */}
                    {/* <i class="fab fa-facebook"></i> */}
                    {/* <FacebookIcon />
                    <TwitterIcon /> */}
                    {/* <WhatsAppIcon/> */}
                    {/* <img src='' alt='twitter icon'/>
                    <img src='' alt='instagram icon'/> */}
</div>
            </div>
            <div className='footer__Product'>
                <ul>
                    <li className='footer__Subtitle'><a href='#plan'>Product</a></li>
<li><a href='/download'>Download</a></li>                
<li><a href='#plan'>Pricing</a></li>                
<li><a href='/locate'>Location</a></li>                
                </ul>
            </div>
            <div className='footer__Engage'>
            <ul>
                    <li className='footer__Subtitle'><a href='/contact'>Engage</a></li>
<li><a href='/about'>FemiVPN?</a></li>                
<li><a href='/faq'>FAQ</a></li>                
<li><a href='/tutorial'>Tutorials</a></li>                
                </ul>
            </div>
            <div className='footer__Earn'>
            <ul>
                    <li className='footer__Subtitle'><a href='/affilate'> Earn Money</a></li>
<li><a href='/affilate'>Affilate</a></li>                
<li><a href='/affilate'>Become a partner</a></li>                
                </ul>
            </div>
        </div>
    )
}

export default Footer
