import { Home } from "./Home"
import { Footer } from "./components/Footer"
import { Sidebar } from "./components/sideBar"
import "./App.css";

function App() {

  return (
    <>
      <div>
        <div className="div">
          <section className="sidebar">
            <Sidebar/>
          </section>
          <main className="main">
            <Home />
          </main>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
