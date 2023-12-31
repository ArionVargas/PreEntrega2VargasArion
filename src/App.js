import './App.css'
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import "bulma/css/bulma.css"
/* import ItemCount from './Components/ItemCount/ItemCount' */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from './context/CartContext'
import Cart from "./Components/Cart/Cart"
import Checkout from "./Components/Checkout/Checkout"



function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App


