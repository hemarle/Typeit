import React, {useEffect} from 'react'
import './Testimonial.css'
import star from './images/star.png'
import datas from './data.json'

function Testimonial() {

    //     useEffect(() => {
//         let cardRef = document.querySelectorAll('.testimonial__Card')
//         function change() {
//         for (let i = 0; i < 3; i++){
//             cardRef[i].classList.add('remove')
//             console.log(i)
            
//             }

//         }
// setTimeout(5000, change())

       
//     }, [])

    return (
        <div className='testimonial'>
            <h1 className='testimonial__Title'>
                Trusted by Thousands of happy customer
            </h1>
            <p className='testimonial__About'>   Hear what our customers have to say.</p>
            <div className='testimonial__Cards'>

                {
                    datas.testimonial.map(({avatar, name, role, review, stars }) => (
                        <div className='testimonial__Card'>

                    <div className='testimonial__CardHeader'>
                        <div className='testimonial__Avatar'>
                            <img src={avatar} alt='alex avatar' />
                       </div>
                        <div className='testimonial__Details'>
                            <h3 className='testimonial__Name'>
                                {name}
                            </h3>
                                    <p className='testimonial__Role'>{ role}</p>
                        </div>
                        <div className='testimonial__Star'>

                            <p>{stars} </p>
                                <img src={star} alt='star' />
                        </div>
                    </div>
                    <p className='testimonial__Content'> {review}.</p>
                </div>
                  ))  
                }
                
            </div>
        </div>
    )
}

export default Testimonial
