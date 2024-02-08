import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const body = await response.json();
    console.log(body);
    setCount(body)
  }
  useEffect(() => {
    fetchData();
  }, []);
  const [first, setfirst] = useState()
  // const myFun = ()=>{
  //   console.log();

  // }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1>{count.slip?.id}</h1>
        <h2>{count.slip?.advice}</h2>
        <button onClick={fetchData}>Click</button>

      </div>
      <input type="text" value={name}></input>

    </>
  )
}

export default App
