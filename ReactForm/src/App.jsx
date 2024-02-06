import { useState } from "react"
import Useref from "./Useref";

const App = () => {
  const[inputValue,setInputValue]=useState(" ");
  
  const handleInputChange = (event)=>{
    setInputValue(event.target.value);
  }

  const[showbtn,setShowbtn] = useState(false);
  const[titile,setTitle] = useState([
    {
      id:1,
      name:"SAHIL",
      age : 22
    }
    ,
    {
      id:2,
      name:"sataym",
      age: 21
    }
    ,
    {
      id : 3,
      name : "Pawsn",
      age: 23
    }
  ])

   

  return (
   <>
   <div>

      <div> <button>{titile.map( item =>{
        return (
          <>
          <div>{item.name}</div>
          <div>{item.age}</div>
          </>
        )
      } )}</button></div>

   </div>

{/* {showbtn ? <button>Show me</button> : "Nothing"} */}
{showbtn && <button>Show me</button>}

   {/* <Useref /> */}
    {/* <form>
    <input type='text'  value={inputValue} onChange={handleInputChange} />

    </form> */}
   </>
  )
}

export default App