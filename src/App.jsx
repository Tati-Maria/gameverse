import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Container from "./components/Container"

function App() {
  

  return (
    <Container>
    <header>
      <Navbar />
    </header>
      <main className="min-h-screen py-20">
        <Outlet />
      </main>
    </Container>
  )
}

export default App
