import { MdClose } from "react-icons/md";
import "./Search.scss";
import React from "react";
import prod from "../../../../assets/product/2.jpg";


function Search({ setShowSearch }) {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for products" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src={prod} alt="cart prod img1" />
            </div>
            <div className="prod-details">
              <span className="name">Product Nameeeeeeeeeeeee</span>
              <span className="desc">Product Description</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
