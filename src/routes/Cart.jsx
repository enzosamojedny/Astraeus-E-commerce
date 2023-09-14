import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { DataContext } from "../App";
import './cart.css'
import { Button } from "@mui/material";

function Cart() {
  const { data } = useContext(DataContext)
  const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(savedCart);
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('id');
  const title = searchParams.get('title');
  const price = parseFloat(searchParams.get('price'));
  const count = parseInt(searchParams.get('count'), 10);
  const selectedItem = data.find(item => item.id === Number(id));
  const image = selectedItem ? selectedItem.image : '';
  const total = count * price;

  useEffect(() => {
    if (id && title && price && count) {
      const cartItem = {
        id: id,
        title: title,
        price: price,
        count: count,
        image: image,
        total: total,
      };
      const itemExistsInCart = cart.some(item => item.id === id);
      if (!itemExistsInCart) {
        setCart(prevCart => [...prevCart, cartItem]);
      }
    }
  }, [id, title, price, count]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function handleRemovalFromCart(itemId) {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = savedCart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  return (
    <>
      {cart.map(item => (
        <div className="cart-container" key={item.id}>
          <img src={item.image} alt={item.title} className="cart-img" />
          <NavLink to={`/products/${item.id}`}><p className="cart-title">{item.title}</p></NavLink>
          <p>{item.count}</p>
          <p className="cart-price">${item.total}</p>
          <Button onClick={() => handleRemovalFromCart(item.id)}>X</Button>
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
      ))}
    </>
  );
}
export default Cart;