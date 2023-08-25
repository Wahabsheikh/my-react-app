import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./NewsLatter.scss";

function NewsLatter() {
  return (
    <div className="NewsLatter">
      <div className="NewsLatterContent">
        <span className="small-text">NewsLetter</span>
        <span className="big-text">Sign up for lattest updates and offers</span>
        <div className="Form">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will be used in accordance with our privacy policy
        </div>
        <div className="socialIcons">
          <div className="icon">
            <FaFacebookF />
          </div>
          <div className="icon">
            <FaTwitter />
          </div>
          <div className="icon">
            <FaInstagram />
          </div>
          <div className="icon">
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLatter;
