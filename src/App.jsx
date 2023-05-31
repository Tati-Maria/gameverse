import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Container from "./components/Container"
import Footer from "./components/Footer"
import SearchGame from "./components/SearchGame"
import Genres from "./components/ui/Genres"

function App() {
  

  return (
    <>
      <Container>
        <header className="py-6">
          <Navbar />
          <SearchGame />
          <Genres />
        </header>
        <main className="min-h-screen py-20">
          <Outlet />
        </main>
        < Footer />
      </Container>
    </>
  )
}

export default App
