import React from "react";
import "./Category.scss";
import Products from "../home/products/Products";

function Category() {
  return (
    <div className="Category-main-content">
      <div className="layout">
        <div className="category-title">Category Title</div>
        <div className="products-container">
          <Products innerPage={true} />
        </div>
      </div>
    </div>
  );
}

export default Category;
