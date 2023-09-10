import ItemDetail from './ItemDetail'
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './itemdetail.css';
import { DataContext } from '../../../App';

function ItemDetailContainer() {
  const { data, cart, addToCart, removeFromCart } = useContext(DataContext);
  const { id } = useParams();

  const product = data.find((item) => item.id === parseInt(id, 10))
  //when i reload the page, .find crashes as it cant find the id
  return (
    <div><ItemDetail product={product} loading={!product} /></div>
  )
}

export default ItemDetailContainer