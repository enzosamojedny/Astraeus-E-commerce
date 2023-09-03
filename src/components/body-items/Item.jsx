import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductItem.css";
import ResponsiveDialog from "./extras/Popup";
import Counter from "./extras/Counter";
import { Typography, Box, Button } from "@mui/material";
import SimpleBackDrop from "./extras/SimpleBackdrop";

function Item({ products }) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (products) {
      setResult(products);
      setLoading(false);
    }
  }, [products]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading ? <SimpleBackDrop /> : <ResponsiveDialog />}
      </div>
      <div className="product-container">
        {result.map((product, index) => (
          <div key={index} className="product-item">
            <img
              src={product.image}
              alt={product.title}
              className="product-item__image"
              style={{ width: 100, height: 100 }}
            />
            <Typography
              variant="h2"
              style={{ fontSize: 17, fontWeight: 500 }}
              className="product-item-title"
            >
              {product.title}
            </Typography>
            <Typography variant="h3" style={{ fontSize: 19, fontWeight: 600 }}>
              ${product.price}
            </Typography>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                width: "250px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="outlined"
                size="small"
                style={{
                  color: "#000000",
                  borderColor: "#172738",
                  marginRight: 20,
                  backgroundColor: "#E6E6FA",
                  fontWeight: 600,
                }}
              >
                Add to Cart
              </Button>
              <Counter />
              <div>
                <Link to={`/products/${product.id}`}>
                  <Button
                    variant="outlined"
                    size="small"
                    style={{
                      color: "#000000",
                      borderColor: "#172738",
                      marginRight: 20,
                      backgroundColor: "#E6E6FA",
                      fontWeight: 600,
                    }}
                  >
                    Details
                  </Button>
                </Link>
              </div>
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Item;
