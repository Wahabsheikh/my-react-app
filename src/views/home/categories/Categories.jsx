import React from "react";
import "./Categories.scss";
import cat1 from "../categories/cimage/2.png";


function Categories() {
  return (
    <div className="Shop-By-Categoreis">
      <div className="Categoreis">
        <div className="Category"><img src={cat1} alt="cat-image0" /></div>
        <div className="Category"><img src={cat1} alt="cat-image1" /></div>
        <div className="Category"><img src={cat1} alt="cat-image2" /></div>
        <div className="Category"><img src={cat1} alt="cat-image3" /></div>
      </div>
    </div>
  );
}

export default Categories;
