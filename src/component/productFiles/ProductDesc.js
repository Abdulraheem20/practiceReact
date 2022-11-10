import React from "react";
import "../styles/style.css";
import "../styles/Shop.css";
import { useParams } from "react-router-dom";
import products from "../ShopArray";

const ProductDesc = () => {
  const { id } = useParams();
  const displayItems = products[id];
  return (
    <div>
      <div className="displayProduct">
        <div className="column">
          <figure>
            <img src={displayItems.img} alt="img1" className="imageList" />
            <figcaption>
              <div className="titlePrice">
                <p>{displayItems.title}</p>
                <p>{displayItems.price}</p>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="description">
          <p>{displayItems.desc}</p>
        </div>
        <button className="carrtBtn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDesc;
