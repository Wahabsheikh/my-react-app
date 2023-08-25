import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import pImg from "../../../assets/payment-icon/payment-icon.png";
import NewsLatter from "./newslatter/NewsLatter"
function Footer() {
  return (
    <>
    <NewsLatter/>
    <div className="Footer">
      <div className="FooterContent">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
            numquam repudiandae, nisi hic expedita, temporibus consequuntur
            perspiciatis accusamus molestias sint veniam repellat laudantium
            fugiat odit inventore vero fuga, iure non.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="contact-item">
            <FaLocationArrow />
            <div className="text">colombia us south</div>
          </div>
          <div className="contact-item">
            <FaMobileAlt />
            <div className="text">Phone: 030023-23</div>
          </div>
          <div className="contact-item">
            <FaEnvelope />
            <div className="text">Email:azb@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">HeadPhone</span>
          <span className="text">SmartPhone</span>
          <span className="text">BlueTooth</span>
          <span className="text">Wirless</span>
          <span className="text">HomeTheatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Tearms & Condition</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="Bottom-bar">
        <div className="Bottom-bar-Content">
          <div className="text">
            jsdevstore 2023 created by js dev premiear commerce solution
          </div>
          <img src={pImg} alt="payment-image" />
        </div>
      </div>
    </div>
    </>

  );
}

export default Footer;
