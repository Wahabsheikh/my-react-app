import React from "react";
import "./Product.scss";
import pimg from "../../../utils/data/ProductImage/3.png"
import { NavLink } from "react-router-dom";


function Product({data}) {
const url = "http://localhost:3000/product";

  return (
    <div className="Product-card">
      <div className="thumbnail">
        <img src={pimg} alt="prod-img0" />
      </div>
      <div className="Prod-details">
        <span className="name">{data ? data.title : ''}</span>
        <span className="price">{data ? data.price : ''} </span>
        {
          data ?<NavLink to={`${url}/${data.id}`} >View</NavLink> : ''
        }
        
      </div>
    </div>
  );
}

export default Product;
