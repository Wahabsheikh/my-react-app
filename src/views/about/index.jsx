import React from "react";
import "./Category.scss";
import Products from "../home/products/Products";

function About() {
  return (
    <div className="Category-main-content">
      <div className="layout">
        <div className="category-title">about  Title</div>
        <div className="products-container">
          <Products innerPage={true} />
        </div>
      </div>
    </div>
  );
}

export default About;
