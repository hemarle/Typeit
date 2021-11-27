import React from 'react'
import './Home.css'
import illustration from './images/Illustration/Illustration1.svg'
function Home() {
    return (
        <div className='home'>
            <div className='home__Image'>
                <img src={illustration} alt='home illustration' />
            </div>
            <div className='home__Content'>
                <h2 className='home__Title'>
                    Want anything to be easy with <span>FemiVpn</span>
                </h2>
                <p className='home__About'>
                    We offer you the best services you can ever think of. A trial is more than enough to be convinced.
                </p>
                <a className='home__Link' href='#'> Get started</a>
            </div>
        </div>
    )
}

export default Home
