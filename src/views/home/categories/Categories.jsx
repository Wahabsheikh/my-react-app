import React from "react";
import "./Categories.scss";
// import cat1 from "../categories/cimage/2.png";
import CategoryData from "../../../utils/data/categories";
// import ielectronic from "../../../utils/data/Cetegory image/electronic.png";


function Categories() {

  return (
    <div className="Shop-By-Categoreis">
      <div className="Categoreis">
        {CategoryData.map((element) => (
          <div className="Category">
            <img src={element.image} alt="cat-image0" />
            <h4>{element.title}</h4>
          </div>
        ))}
      
      </div>
    </div>
  );
}

export default Categories;
