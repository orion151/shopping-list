import React from "react";

const ShoppingItem = ({ id, name, images, size, price, additionalInfo }) => {
  return (
    <div key={id} className="shopping-item">
      <h3 className="shopping-item-name">
        {id} : {name}
      </h3>
      <p className="shopping-item-size">Size: {size}</p>
      <p className="shopping-item-price">Price: {price}</p>
      <p className="shopping-item-price">Additional Info: {additionalInfo}</p>
      <div className="shopping-item-imgs">
        {images.map((image, index) => (
          <img
            key={index.toString()}
            className="shopping-item-img"
            src={image}
            alt={name}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoppingItem;
