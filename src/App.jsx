import ItemListContainer from "./components/body-items/itemList/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import Cart from "./routes/Cart";
import ItemDetailContainer from "./components/body-items/itemDetail/ItemDetailContainer";
import { createContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/client";
import CategoryItems from "./components/nav-bar/CategoryItems";
import Checkout from "./components/nav-bar/Checkout";
import DrawerAppBar from "./components/nav-bar/navbartest";

export const DataContext = createContext();

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const collectionRef = collection(db, "products");
    getDocs(collectionRef)
      .then((snapshot) => {
        const transformedData = snapshot.docs.map((doc) => {
          const firestoreData = doc.data();
          return {
            id: firestoreData.id,
            title: firestoreData.title,
            price: firestoreData.price,
            description: firestoreData.description,
            category: firestoreData.category,
            image: firestoreData.image,
            stock: firestoreData.stock,
            rate: firestoreData.rate,
            count: firestoreData.count,
          };
        });
        setData(transformedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <DrawerAppBar />
      <DataContext.Provider value={{ data }}>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:id" element={<CategoryItems />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </DataContext.Provider>
    </>
  );
}

export default App;
