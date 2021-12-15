import React from 'react'
import {getAuth, signOut} from 'firebase/auth'
import { useNavigate } from 'react-router';

import Cookies from "universal-cookie/es6";
function SignOut() {

    let cookies= new Cookies()
    let navigate=useNavigate()
    const auth= getAuth()
    signOut(auth).then(()=>
    {
cookies.set('user', '')
navigate('/')
window.location.reload()
    }
    ).catch((err)=>console.log(err))
    return (

        <div>
            
            
        </div>
    )
}

export default SignOut
