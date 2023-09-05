import React from "react";
import "./Product.scss";
import { NavLink } from "react-router-dom";


function Product({data}) {
const url = "http://localhost:3000/product";

  return (
    <div className="Product-card">
      <div className="thumbnail">
        <img src={data ? data.image : ""} alt="prod-img0" />
      </div>
      <div className="Prod-details">
        <span className="name">{data ? data.title : ''}</span>
        <span className="price">{data ? data.price : ''} </span>
        {
          data ?<NavLink className="view-btn" to={`${url}/${data.id}`} >View</NavLink> : ''
        }
        
      </div>
    </div>
  );
}

export default Product;
