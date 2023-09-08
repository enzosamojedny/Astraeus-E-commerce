
import { useState, useEffect } from "react";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {categories.map((category, index) => (
        <Link to={`/category/${category}`} key={index}>
          <Button
            size="medium"
            style={{
              color: "#000000",
              marginRight: 50,
              backgroundColor: "white",
              fontWeight: 600,
            }}
          >
            {category}
          </Button>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
