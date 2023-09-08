import Header from "./components/nav-bar/Header";
import ItemListContainer from "./components/body-items/itemList/ItemListContainer";
import Item from "./components/body-items/Item";
import { Route, Routes } from "react-router-dom";
import Cart from "./routes/Cart";
import ItemDetailContainer from "./components/body-items/itemDetail/ItemDetailContainer";
import { createContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebase/client";

export const DataContext = createContext(null);

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const collectionRef = collection(firestore, "products");

    getDocs(collectionRef).then((snapshot) => {
      snapshot.forEach((snap) => console.log(snap.data()))
    })
  }, []);

  return (
    <>
      <Header />
      <DataContext.Provider value={data}>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:id" element={<Item />} />
        </Routes>
      </DataContext.Provider>
    </>
  );
}

export default App;
