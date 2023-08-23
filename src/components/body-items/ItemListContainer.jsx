import React, { useEffect, useState } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";
import SimpleBackDrop from "./SimpleBackDrop";

function ItemListContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const params = useParams();

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      let url = "https://fakestoreapi.com/products";
      if (params.categories) {
        url += `?/categories=${params.categories}`;
        console.log(url);
      }

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          resolve(data);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    });
  };

  useEffect(() => {
    fetchData();
  }, [params.categories]);

  return isLoading ? <SimpleBackDrop /> : <Item products={products} />;
}

export default ItemListContainer;
