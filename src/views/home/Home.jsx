import React from "react";
import "./Home.scss";
import Banner from "./banner/Banner";
import Categories from "./categories/Categories";
import Products from "./products/Products";

function Home() {
  return (
    <div>
      <div>
        <Banner />
        <div className="main-content">
          <div className="layout">
            <Categories />
            <Products headingText="Popular Products" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
