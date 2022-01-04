import React from 'react'
import {getAuth, signOut} from 'firebase/auth'
import { useNavigate } from 'react-router';

import {useStateValue} from '../StateProvider'
import { actionTypes } from '../reducer';

function SignOut() {
    
    const auth= getAuth()
    
    let navigate=useNavigate()
    

    const [{user}, dispatch]= useStateValue()
    //Remove user from context Api
    // window.location.reload()
    signOut(auth).then(()=>
    {
        alert('successful')
      
        navigate('/')
          localStorage.removeItem('email')
    }
    ).catch(
        (err)=>console.log(err))
    return (

        <div>
            
            
            
        </div>
    )
}

export default SignOut
