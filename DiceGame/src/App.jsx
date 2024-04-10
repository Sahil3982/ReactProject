import GameBorad from "./Components/GameBorad"
import Home from "./Components/Home"
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path='/game' element={<GameBorad />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
