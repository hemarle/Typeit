import React from 'react'
import {getAuth, signOut} from 'firebase/auth'
import { useNavigate } from 'react-router';

import Cookies from "universal-cookie/es6";
import {useStateValue} from '../StateProvider'
import { actionTypes } from '../reducer';

function SignOut() {
    
    const auth= getAuth()
    
    let cookies= new Cookies()
    let navigate=useNavigate()
    cookies.set('user', '')


    const [{user}, dispatch]= useStateValue()
    //Remove user from context Api
    // window.location.reload()
    signOut(auth).then(()=>
    {
        // alert('successful')
        dispatch({
            action: actionTypes.set_user,
            user: ''
          })
        navigate('/')
    }
    ).catch(
        (err)=>console.log(err))
    return (

        <div>
            
            
            
        </div>
    )
}

export default SignOut
