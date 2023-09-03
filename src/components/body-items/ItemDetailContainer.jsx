import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './itemdetail.css';
import axios from 'axios';

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [star, setStar] = useState(0);
  const { id } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`https://fakestoreapi.com/products/${id}`);
        const { rate, count } = response.data.rating || {};

        setStar({ rate: rate || 0, count: count || 0 });
        setProduct(response.data);
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div><ItemDetail product={product} loading={loading} star={star} /></div>
  )
}

export default ItemDetailContainer

