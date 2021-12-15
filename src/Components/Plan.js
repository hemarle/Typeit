import React from 'react'
import './Plan.css'
import mark from './images/mark.png'
import premium from './images/Illustration/Premium.svg'
function Plan() {
    return (
        <div className='plan' id='plan'>
            <div className='plan__Header'>
                <h2> Choose Your plan</h2>
                <p> Let's choose the package that is best for you and explore it happily and cheerfully</p>
            </div>
            <div className='plan__Cards'>
                <div className='plan__Card'>
                    <img src={premium} alt='card icon' />
                    <h4>Trial</h4>
                    <ul>
                        <li><img src={ mark} alt='mark icon'/><p> 1 page </p></li>
                        <li><img src={ mark} alt='mark icon'/><p> PDF Documents </p></li>
                        <li><img src={ mark} alt='mark icon'/><p> 24hrs delivery</p></li>
                      </ul>
           
                    <div className='plan__Bottom'>
                        
                    <h3>Free</h3>
                    <a href=''>Select</a>
                   </div>
                </div>
                <div className='plan__Card'>
                    <img src={premium} alt='card icon'/>
                    <h4>Basic Plan</h4>
                    <ul>
                        <li><img src={ mark} alt='mark icon'/><p> 2-24 pages</p></li>
                        <li><img src={ mark} alt='mark icon'/><p> PDF Documents </p></li>
                        <li><img src={ mark} alt='mark icon'/><p> 24hrs delivery</p></li>
                        <li><img src={ mark} alt='mark icon'/><p> Error check / updates</p></li>
                        <li><img src={ mark} alt='mark icon'/><p> .txt, .excel, .doc, .docx, etc.</p></li>
                    </ul>
                    <div className='plan__Bottom'>
                        
                    <h3>#80 /<span>Page</span></h3>
                    <a href=''>Select</a>
                   </div>
                </div>
                <div className='plan__Card'>
                    <img src={premium} alt='card icon'/>
                    <h4>Premium</h4>
                    <ul>
                        <li><img src={ mark} alt='mark icon'/><p> 25+ pages</p></li>
                        <li><img src={ mark} alt='mark icon'/><p> PDF Documents </p></li>
                        <li><img src={ mark} alt='mark icon'/><p> 24hrs delivery</p></li>
                        <li><img src={ mark} alt='mark icon'/><p> Error check / updates</p></li>
                        <li><img src={ mark} alt='mark icon'/><p> .txt, .excel, .doc, .docx, etc.</p></li>
                        <li><img src={ mark} alt='mark icon'/><p> Live chat</p></li>
                    </ul>
           
                    <div className='plan__Bottom'>
                        
                    <h3> #70 / <span>Page</span></h3>
                    <a href=''>Select</a>
                   </div>
                </div>
            </div>
        </div>
    )
}
export default Plan 
