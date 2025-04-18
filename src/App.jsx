import MyNav from "./components/MyNav"
import "bootstrap/dist/css/bootstrap.min.css"
import MyFooter from "./components/MyFooter"
import FirstCards from "./components/FirstCards"
import QueenCards from "./components/QueenCards"
import "./style/style.css"
import OthersCards from "./components/OthersCards"
import MusicBar from "./components/MusicBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AlbumDetail from "./components/AlbumDetail"

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

            {/* Pagina dettaglio album */}
            <Route path="/album/:id" element={<AlbumDetail />} />
          </Routes>
        </main>

        <MyFooter />
        <MusicBar />
      </div>
    </BrowserRouter>
  )
}

export default App
