import React from "react";

const ShopDisplay = ({ title, price, img, id }) => {
  return (
    <div>
      <div className="column">
        <figure>
          <img src={img} alt="image" className="imageList" />
          <figcaption>
            <div className="titlePrice">
              <p>{title}</p>
              <p>{price}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default ShopDisplay;
