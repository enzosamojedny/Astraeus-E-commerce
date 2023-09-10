import Header from "./components/nav-bar/Header";
import ItemListContainer from "./components/body-items/itemList/ItemListContainer";
import Item from "./components/body-items/Item";
import { Route, Routes } from "react-router-dom";
import Cart from "./routes/Cart";
import ItemDetailContainer from "./components/body-items/itemDetail/ItemDetailContainer";
import { createContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebase/client";

export const DataContext = createContext({
  data: null,
  cart: [],
  addToCart: () => { },
  removeFromCart: () => { },
});

function App() {
  const [data, setData] = useState(null);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const collectionRef = collection(firestore, "products");

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
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };
  // 
  return (
    <>
      <Header />
      <DataContext.Provider value={{ data, cart, addToCart, removeFromCart }}>
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
