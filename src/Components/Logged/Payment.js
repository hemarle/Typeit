import React, {useState, useRef, useEffect} from "react";
import "./Payment.css";
import {useStateValue} from '../StateProvider'
function Payment() {
    const [pages, setPages]= useState(1)
    const priceRef= useRef()
    const [finalPrice, setFinalPrice]= useState()
const [{email, files}, dispatch] =useStateValue()

useEffect(()=>{

    if(pages==1 ){
        setFinalPrice(0)
    }
    else if (1< pages && pages<20){
        setFinalPrice(80)

    }
    else{
        setFinalPrice(70)
        console.log(pages)

    }
}, [pages])
  return (
    <div className="payment">
      <h1 className="payment__Header">Check out</h1>
      <form action="" className="payment__Form">
        <input type="text" placeholder="Full Name" value={email} />
        <label htmlFor="select-files">Select Files</label>
        <select id='select-files' name="cars" id="cars">
         
    {
      files.filter(file=>file.data().status=='undone').map(doc=>
        <option value={doc.data().name}>{doc.data().name}</option>
        
        )
    }
   
  </select>
  <label for='format'>Select Format</label>
  <select id='format'>
    <option value='doc'>doc</option>
    <option value='img'>img</option>
    <option value='txt'>txt</option>
    <option value='pdf'>pdf</option>
  </select>
        <input
          type="number"
          name="pages"
          id="pages"
          placeholder="Number of Pages"
          defaultValue={1}
          min={1}
          onChange={(e)=>setPages(e.currentTarget.value)}
        />
        <div className="payment__Price">
          <h4>Price: </h4>
          <p ref={priceRef}>{`#${finalPrice*pages}`}</p>
        </div>
        <input type="submit" value="Pay" />
      </form>
    </div>
  );
}

export default Payment;
