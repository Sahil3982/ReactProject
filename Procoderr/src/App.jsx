import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BtnEvent from './Components/BtnEvent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BtnEvent onClick={onClickBtn}/>
    </>
  )
}

export default App
