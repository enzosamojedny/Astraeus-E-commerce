import ItemDetail from './ItemDetail'
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './itemdetail.css';
import { DataContext } from '../../../App';

function ItemDetailContainer() {
  const { data } = useContext(DataContext);
  const { id } = useParams();

  const product = data.find((item) => item.id === parseInt(id));
  return (
    <div><ItemDetail product={product} loading={!product} /></div>
  )
}

export default ItemDetailContainer