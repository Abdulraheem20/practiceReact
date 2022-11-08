import React from "react";
import "../component/styles/Shop.css";
import products from "../component/ShopArray";
import ShopDisplay from "./ShopDisplay";

const ShopDis = (itr, id) => {
  return (
    <ShopDisplay
      key={itr.img}
      img={itr.img}
      title={itr.title}
      price={itr.price}
    />
  );
};

const Shop = () => {
  return (
    <div>
      <div className="productContainer">
        {products.map(ShopDis)}
      </div>
    </div>
  );
};

export default Shop;
