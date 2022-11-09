import React from "react";
import { useNavigate } from "react-router-dom";

const ShopDisplay = ({ title, price, img, id }) => {
    const navigate = useNavigate()
  return (
    <div>
      <div className="column" onClick={()=>{
        navigate('/testimonial/newproduct/' + id)
      }}>
        <figure>
          <img src={img} alt="image1" className="imageList" />
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
