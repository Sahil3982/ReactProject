import { Home } from "./Home"

import {sideBar} from "./components/sideBar"
function App() {

  return (
    <>
      <div>
        <div className="grid grid-clos-12">
          <section className="bg-gray-400">
            <sideBar />
          </section>
          <main>
            <Home />
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
