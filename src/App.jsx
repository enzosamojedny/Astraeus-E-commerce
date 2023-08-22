
import './App.css'
import Header from './components/nav-bar/Index'
import ItemListContainer from './components/body-items/ItemListContainer'
import Item from './components/body-items/Item'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './routes/Cart'
import ItemDetailContainer from './components/body-items/ItemDetailContainer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route exact path='/cart' element={<><Cart /></>} />
          <Route exact path='/products/:id' element={<ItemDetailContainer />} />
          <Route path="/category/:id" element={<Item />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
