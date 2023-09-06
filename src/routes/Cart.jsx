import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { DataContext } from "../App";

function Cart() {
  const data = useContext(DataContext)
  const location = useLocation()
  const { image } = data
  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('id');
  const title = searchParams.get('title');
  const price = searchParams.get('price');
//image is not getting here
  return <>
    <div>
      <p>{id}</p>
      <p>{title}</p>
      <p>{price}</p>
      <p>{image}</p>
    </div>
  </>
}

export default Cart;
