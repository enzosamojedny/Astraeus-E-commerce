import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { DataContext } from "../App";
import './cart.css'


function Cart() {
  const data = useContext(DataContext)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('id');
  const selectedItem = data.find(item => item.id === Number(id));

  const title = searchParams.get('title');
  const price = searchParams.get('price');
  const count = searchParams.get('count')
  const image = selectedItem.image
  const total = count * price

  //how do i save items to a state?

  return <>
    <div className="cart-container">
      <img src={image} alt={title} className="cart-img" />
      <NavLink to={`/products/${id}`}><p className="cart-title">{title}</p></NavLink>
      <p>{count}</p>
      <p className="cart-price">${total}</p>

    </div>
  </>
}

export default Cart;