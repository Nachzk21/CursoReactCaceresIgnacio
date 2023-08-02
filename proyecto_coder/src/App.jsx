import NavBar from "./components/Navbar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Comida from "./pages/Comida/Comida"
import Principal from "./pages/Home/Principal"
import ItemDetail from "./components/ItemDetail/ItemDetail"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Principal></Principal>}></Route>
        <Route path="/comida" element={<Comida></Comida>}></Route>
        <Route path="/categoria/:categoriaId" element={<Comida></Comida>}></Route>
        <Route path="/comida/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App