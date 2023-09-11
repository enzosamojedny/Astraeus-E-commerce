import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { DataContext } from "../App";
import './cart.css'
import { Button } from "@mui/material";

function Cart() {
  const { data, cart, removeFromCart, addToCart } = useContext(DataContext)
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('id');

  const selectedItem = data.find(item => item.id === Number(id));
  const title = searchParams.get('title');
  const price = searchParams.get('price');
  const count = searchParams.get('count')
  const image = selectedItem ? selectedItem.image : '';
  const total = count * price
  function handleRemovalFromCart() {
    removeFromCart(selectedItem)
    navigate("/cart")
  }

  return <>
    <div className="cart-container">
      <img src={image} alt={title} className="cart-img" />
      <NavLink to={`/products/${id}`}><p className="cart-title">{title}</p></NavLink>
      <p>{count}</p>
      <p className="cart-price">${total}</p>
      <Button onClick={handleRemovalFromCart}>X</Button>
      <Button variant="outlined"
        size="small"
        style={{
          color: "#000000",
          borderColor: "#172738",
          marginRight: 20,
          backgroundColor: "#E6E6FA",
          fontWeight: 600,
        }}>Buy Now</Button>
    </div>
  </>
}

export default Cart;