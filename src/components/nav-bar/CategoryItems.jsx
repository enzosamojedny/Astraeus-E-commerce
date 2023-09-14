import { useParams } from "react-router-dom";
import { DataContext } from "../../App";
import { useContext } from "react";
import { ErrorBoundary } from "react-error-boundary";
import SimpleBackdrop from "../body-items/extras/SimpleBackdrop";
import { Typography, Box, Button } from "@mui/material";
import "../body-items/ProductItem.css";
function MyFallbackComponent({ error, resetErrorBoundary }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}
export default function CategoryItems() {
    const { data } = useContext(DataContext);
    const { id } = useParams()

    if (!data) {
        return <SimpleBackdrop />
    }
    const filteredData = data.filter(item => item.category === id);
    return (
        <ErrorBoundary FallbackComponent={MyFallbackComponent}>

            <div className="product-container">

                {filteredData.map(item => (
                    <div className="product-item">
                        <div key={item.id}>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="product-item__image"
                                style={{ width: 100, height: 100 }}
                            />
                            <Typography
                                variant="h2"
                                style={{ fontSize: 17, fontWeight: 500 }}
                                className="product-item-title"
                            >
                                {item.title}
                            </Typography>
                            <p>{item.description}</p>

                            <Typography variant="h3" style={{ fontSize: 19, fontWeight: 600 }}>
                                ${item.price}
                            </Typography>
                            <p>Stock: {item.stock}</p>
                        </div>
                    </div>
                ))}
            </div>

        </ErrorBoundary>
    );
}
