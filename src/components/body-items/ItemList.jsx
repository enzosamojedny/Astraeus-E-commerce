import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";

function ItemList({ items }) {
    return (
        <div className="product-container">
            {items.map((item, index) => (
                <Link to={`/products/${item.id}`} key={index}>
                    <Item item={item} />
                </Link>
            ))}
        </div>
    );
}

export default ItemList;
