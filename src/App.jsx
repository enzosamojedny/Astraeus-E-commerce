import Header from "./components/nav-bar/Index";
import ItemListContainer from "./components/body-items/ItemListContainer";
import Item from "./components/body-items/Item";
import { Route, Routes } from "react-router-dom";
import Cart from "./routes/Cart";
import ItemDetailContainer from "./components/body-items/ItemDetailContainer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route
          path="/cart"
          element={
            <>
              <Cart />
            </>
          }
        />
        <Route path="/products/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:id" element={<Item />} />
      </Routes>
    </>
  );
}

export default App;
