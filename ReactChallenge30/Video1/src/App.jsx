import { useState } from "react"
import InputSidecard from "./InputSidecard"
import OutputSidecard from "./OutputSidecard"
const App = () => {
  const [data,setData]=useState({
    'title' : '',
    'category': '',
    'amount':''
  })
  console.log(data);
  
  return (
    <div style={{display:"flex", gap:"20px", padding:"20px"}}>
      <InputSidecard data={data} setData={setData}/>
      <OutputSidecard data={data} setData={setData}/>
    </div>
  )
}

export default App