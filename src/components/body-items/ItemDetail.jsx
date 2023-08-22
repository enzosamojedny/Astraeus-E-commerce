import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './itemdetail.css';
import RatingStars from './RatingStars';
import SimpleBackdrop from './SimpleBackDrop';

function ItemDetail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const [img, setImg] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const item = await response.json();
                setProduct(item);

                const imageResponse = await fetch(`https://fakestoreapi.com/products/${id}`);
                const imageData = await imageResponse.json();
                setImg(imageData.image);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) {
        return <div><SimpleBackdrop/></div>;
    }

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
        <Box className="detail-container"style={{ marginTop:'50px',width:'500px',marginBottom:'50px'}}>
            
            {img && <img src={img} alt={product.title} className='detail-img'/>}
            <h2>{product.title}</h2>
            <p style={{fontWeight:'900', fontSize:'x-large', marginBottom:'20px'}}>Price: ${product.price}</p>
            <p style={{marginLeft:'20px'}}>Description: {product.description}</p>
            <RatingStars/>
        </Box>
        </div>
    );
}

export default ItemDetail;
