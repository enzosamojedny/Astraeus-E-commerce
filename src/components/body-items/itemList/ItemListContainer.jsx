import { useEffect, useState } from "react";
import Item from "../Item";
import { useParams } from "react-router-dom";
import SimpleBackDrop from "../extras/SimpleBackdrop";
import axios from "axios";

function ItemListContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  async function fetchData() {
    try {
      const response = await axios("https://fakestoreapi.com/products");
      const data = response.data;
      setProducts(data);
      setIsLoading(false);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
      throw error;
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? <SimpleBackDrop /> : <Item products={products} />;
}

export default ItemListContainer;
