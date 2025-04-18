import MyNav from "./components/MyNav"
import "bootstrap/dist/css/bootstrap.min.css"
import MyFooter from "./components/MyFooter"
import FirstCards from "./components/FirstCards"
import QueenCards from "./components/QueenCards"
import "./style/style.css"
import OthersCards from "./components/OthersCards"
import MusicBar from "./components/MusicBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <MyNav />
        <main className="flex-grow-1 container mt-4">
          <Routes>
            {/* Home page */}
            <Route
              path="/"
              element={
                <>
                  <FirstCards />
                  <QueenCards />
                  <OthersCards />
                </>
              }
            />
          </Routes>
        </main>

        <MyFooter />
        <MusicBar />
      </div>
    </BrowserRouter>
  )
}

export default App
