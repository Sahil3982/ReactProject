import { useState } from "react"
import Useref from "./Useref";

const App = () => {
  const[inputValue,setInputValue]=useState(" ");
  
  const handleInputChange = (event)=>{
    setInputValue(event.target.value);
  }


  return (
   <>
   <Useref />
    {/* <form>
    <input type='text'  value={inputValue} onChange={handleInputChange} />

    </form> */}
   </>
  )
}

export default App