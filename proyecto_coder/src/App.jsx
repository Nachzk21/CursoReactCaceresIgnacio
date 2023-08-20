import NavBar from "./components/Navbar/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Comida from "./pages/Comida/Comida"
import Principal from "./pages/Home/Principal"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Principal></Principal>}></Route>
        <Route path="/comida" element={<ItemListContainer/>}></Route>
        <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}></Route>
        <Route path="/comida/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App

