import React from "react";
import "./Banner.scss";
import heroBanner from "../../../utils/data/Cetegory image/mobile.png";

function Banner() {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            delectus possimus aliquid numquam, consequatur accusantium non
            doloremque fuga ex nobis placeat amet obcaecati eum repudiandae
            libero tempora excepturi ad quae?
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>

        <div className="img-wrapper">
          <img className="banner-img" src={heroBanner} alt="immage" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
