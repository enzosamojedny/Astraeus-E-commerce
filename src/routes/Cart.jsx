import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { DataContext } from "../App";
import './cart.css'
import { Button } from "@mui/material";

function Cart() {
  const { data } = useContext(DataContext)
  const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(savedCart);
  // const [order, setOrder] = useState({});
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
      const existingItem = cart.find(item => item.id === id);

      if (existingItem) {
        setCart(prevCart =>
          prevCart.map(item =>
            item.id === id ? { ...item, count: item.count + count, total: item.total + total } : item
          )
        )
      } else {
        setCart(prevCart => [...prevCart, cartItem])
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
  // const sendOrder = () => {
  // const order = {
  //   id: id,
  //   title: title,
  //   image: image,
  //   count: count,
  //   total: total
  // }
  //   const db = getFirestore()
  //   const orderCollection = collection(db, "orders")
  //   addDoc(orderCollection, order).then(({ id }) => setOrder(id))
  // }
  return (
    <>
      {cart.map(item => (
        <div className="cart-container" key={item.id}>
          <img src={item.image} alt={item.title} className="cart-img" />
          <NavLink to={`/products/${item.id}`}><p className="cart-title">{item.title}</p></NavLink>
          <p>{item.count}</p>
          <p className="cart-price">${item.total}</p>
          <Button onClick={() => handleRemovalFromCart(item.id)}>X</Button>
        </div>
      ))}
      <NavLink to={{ pathname: '/checkout' }}>
        <Button variant="outlined"
          size="small"

          style={{
            color: "#000000",
            borderColor: "#172738",
            marginRight: 20,
            backgroundColor: "#E6E6FA",
            fontWeight: 600,
          }} >Buy Now</Button></NavLink>
    </>
  );
}
export default Cart;