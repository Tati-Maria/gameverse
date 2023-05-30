import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Container from "./components/Container"
import Footer from "./components/Footer"

function App() {
  

  return (
    <Container>
    <header>
      <Navbar />
    </header>
      <main className="min-h-screen py-20">
        <Outlet />
      </main>
      <Footer />
    </Container>
  )
}

export default App
