import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

const Useref = () => {
    let a=useRef(0);

    const[conut,setCount] = useState(0);
    function counter(){
        setCount(conut+1);
    }
    useEffect(()=>{
        // a.current = a.current+1;
        console.log(`rerendering ..`);
        a.current.style.background = "darkred"
    })
  return (
    <>

        <div> {conut}-?-{a.current}</div>
        <button  ref = {a} onClick={counter}>Click</button>
    </>
  )
}

export default Useref