import React from 'react'
import './Payment.css'
function Payment() {
    return (
        <div className='payment'>
            <h1 className="payment__Header">Check out</h1>
<form action="" className='payment__Form'>
    <input type="text" placeholder='Full Name' />
    <input type="text" placeholder='File Name' />
    <input type="text" placeholder='Preffered Format' />
    <input type="number" name="pages" id="pages" placeholder='Number of Pages' defaultValue={1} />
   <div className="payment__Price">
       <h4>Price: </h4>
       <p>#40</p>
   </div>
    <input type="submit" value="Pay" />
</form>
        </div>

)
}

export default Payment
