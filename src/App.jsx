import Header from "./components/nav-bar/Header";
import ItemListContainer from "./components/body-items/itemList/ItemListContainer";
import Item from "./components/body-items/Item";
import { Route, Routes } from "react-router-dom";
import Cart from "./routes/Cart";
import ItemDetailContainer from "./components/body-items/itemDetail/ItemDetailContainer";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { collection, doc, getDoc, getDocs, limit, orderBy, query, where } from "firebase/firestore"
import { firestore } from "./firebase/client";
export const DataContext = createContext(null)

function App() {
  const [data, setData] = useState(null)
  //! function onClose(id) {
  //!   setCharacters(
  //!     characters.filter((character) => {
  //!       return character.id !== Number(id);
  //!     })
  //!   );
  //! }
  useEffect(() => {
    const collectionRef = collection(firestore, "products")
    //* const q = query(collection(firestore, "products"), where("price", ">", 50), limit(5), orderBy("price", "desc"))
    //* getDocs(q).then(snapshot => {
    //*   console.log(snapshot)
    //*   snapshot.forEach((snap) => console.log(snap.data()))
    //* })
    getDocs(collectionRef).then(snapshot => {
      console.log({ snapshot })
      setData({ snapshot })
      //snapshot.forEach((snap) => console.log(snap.data()))
    })
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios("https://fakestoreapi.com/products/");
  //       setData(response.data)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <Header />
      <DataContext.Provider value={data}>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          {/*itemListContainer no esta usando context, cambiar codigo ahi */}
          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route path="/products/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:id" element={<Item />} />
        </Routes>
      </DataContext.Provider>
    </>
  );
}

export default App;
