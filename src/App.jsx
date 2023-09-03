import Header from "./components/nav-bar/Header";
import ItemListContainer from "./components/body-items/itemList/ItemListContainer";
import Item from "./components/body-items/Item";
import { Route, Routes } from "react-router-dom";
import Cart from "./routes/Cart";
import ItemDetailContainer from "./components/body-items/itemDetail/ItemDetailContainer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route path="/products/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:id" element={<Item />} />
      </Routes>
    </>
  );
}

export default App;
