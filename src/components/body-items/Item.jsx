import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./ProductItem.css";
import ResponsiveDialog from "./extras/Popup";
import { Typography, Box } from "@mui/material";
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
    <div className="body">
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
            <NavLink
              to={`/products/${product.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
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
              </Box>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Item;
