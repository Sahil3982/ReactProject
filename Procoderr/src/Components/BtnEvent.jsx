import React from 'react'

const BtnEvent = ({onCliclBtn}) => {
  return (
    <>
        <button onCliclBtn = {()=>{ console.log("Clicked 1 btn")}}>Click1</button>
        <button  onCliclBtn = {()=>{ console.log("Clicked 2 btn")}}>Click2</button>
    </>
  )
}

export default BtnEvent