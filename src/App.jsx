import './App.css'

import NavBar from './Components/Navbar/NavBar'
import Home from './Components/Home/Home'
import Sobre from './Components/Sobre/Sobre'
import Projetos from './Components/Projetos/Projetos'
import Contato from './Components/Contato/Contato'

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <Sobre />
      <Projetos />
      <Contato />
    </>
  )
}

export default App