import { Route, Routes } from "react-router-dom"
import Menu from "./components/Menu"
import Accueil from "./pages/Accueil"
import Contact from "./pages/Contact"
import Erreur from "./pages/Erreur"
import Footer from "./components/Footer"


function App() {
  return (
    <>
    <Menu />
    <Routes>
      <Route path="/" element={<Accueil />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="*" element={<Erreur />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App