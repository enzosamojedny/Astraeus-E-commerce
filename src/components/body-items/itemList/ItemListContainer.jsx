import { useEffect, useState } from "react";
import Item from "../Item";
import SimpleBackDrop from "../extras/SimpleBackdrop";
import { DataContext } from "../../../App";
import { useContext } from "react";

function ItemListContainer() {
  const { data } = useContext(DataContext)
  // console.log(data)
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  console.log()
  useEffect(() => {
    try {
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  });

  return isLoading ? <SimpleBackDrop /> : <Item products={products} />;
}

export default ItemListContainer;
