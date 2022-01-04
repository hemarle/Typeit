import React, {useEffect} from "react";

import { collection, doc, onSnapshot, getDocs, getDoc } from "firebase/firestore";
import { db } from ".././firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Backend() {
const [{files, email}, dispatch]= useStateValue()

const q = collection(db, "users", email, "files");
useEffect(()=>{


  const results = async () => {
    const result = await onSnapshot(q, (file)=>
   { 
    
    dispatch(
        {
            action: actionTypes.set_files,
            files: file?.docs
        }
    )
    }
    )
    
  };

  results();

  
}, [])
useEffect(()=>{

    console.log(files, 'files')
}, [files])


  return <div></div>;
}

export default Backend;
