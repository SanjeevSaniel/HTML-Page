import React, { useState, useEffect } from "react";
// import ReactStars from "react-stars";
import "./FeaturedProducts.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
// import AirPodsMax from "./images/airpods-max-select-green-202011.png";

const FeaturedProducts = () => {
  const data = require("./data.json");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <React.Fragment>
      <div className="featured-products-container">
        <h2 className="featured-products-heading">Featured Products</h2>
        <div className="featured-products-list">
          {products.map((product, index) => {
            return (
              <a
                key={index}
                className="feautured-product-link"
                href="/"
                target={"_blank"}
              >
                <div className="featured-product">
                  <img src={product.image} alt={product.name} />
                  <div className="featured-product-info">
                    <div className="featured-product-name">{product.name}</div>

                    <Stack spacing={1}>
                      <Rating
                        name="half-rating-read"
                        //   defaultValue={2.5}
                        value={product.rating}
                        precision={0.5}
                        readOnly
                      />
                    </Stack>
                    <div>
                      <span className="new-cost">₹ {product.newPrice}</span>
                      <span className="old-cost">₹ {product.oldPrice}</span>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeaturedProducts;
