import React from "react";
import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/product/2.jpg";

function CartItem() {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src={prod} alt="cart prod img1" />
        </div>
        <div className="prod-details">
          <span className="name">Product Nameeeeeeeeeeeeeeeeee</span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>3</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>2</span>
            <span>x</span>
            <span className="highlight">&#8377;2435</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
