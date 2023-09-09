import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './itemdetail.css';
import RatingStars from '../RatingStars';
import SimpleBackdrop from '../extras/SimpleBackdrop';
import Counter from '../extras/Counter';
import { NavLink } from 'react-router-dom';

function MyFallbackComponent({ error, resetErrorBoundary }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}

function ItemDetail({ product, loading }) {
    const [counterValue, setCounterValue] = useState(0);
    const handleIncrease = () => {
        setCounterValue(counterValue + 1);
    };

    const handleDecrease = () => {
        if (counterValue > 0) {
            setCounterValue(counterValue - 1);
        }
    };
    //!THIS IS WHAT IM MODIFYING
    if (loading) {
        return <div><SimpleBackdrop /></div>;
    }
    if (!product) {
        return <div>Product not found.</div>;
    }
    const { id, title, price, description, category, image, rating } = product
    return (
        <ErrorBoundary FallbackComponent={MyFallbackComponent}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box className="detail-container" style={{ marginTop: '50px', width: '500px', marginBottom: '50px' }}>
                    {image && <img src={image} alt={title} className='detail-img' />}
                    <h2>{title}</h2>
                    <p style={{ fontWeight: '900', fontSize: 'x-large', marginBottom: '20px' }}>Price: ${price}</p>
                    <p style={{ marginLeft: '20px' }}>Description: {description}</p>
                    <RatingStars product={product} />
                    <Counter onIncrease={handleIncrease} onDecrease={handleDecrease} />
                    <Button
                        variant="outlined"
                        size="small"
                        style={{
                            color: "#000000",
                            borderColor: "#172738",
                            marginRight: 20,
                            backgroundColor: "#E6E6FA",
                            fontWeight: 600,
                        }}>

                        <NavLink to={{
                            pathname: '/cart',
                            search: `?id=${id}&title=${title}&price=${price}&count=${counterValue}`,
                        }}>Add to Cart</NavLink>
                    </Button>
                </Box>
            </div>
        </ErrorBoundary>
    );
}

export default ItemDetail;
