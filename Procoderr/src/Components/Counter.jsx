import React, { useState } from 'react'

const Counter = () => {


    const[count,setCount]=useState(0)

    const CounterIncrease = ()=>{
        setCount(count+1)

        setCount((count)=>count+1);
        setCount((count)=>count+1)
        console.log(count);
    }
  return (
    <>
        <p>
            {count}
        </p>
        <button onClick={CounterIncrease}>Increase</button>
    </>
  )
}

export default Counter