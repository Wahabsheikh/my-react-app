import { useEffect, useState } from "react";
import "./SingleProduct.scss";
import prod1 from "../../assets/product/2.jpg";
import { useParams } from 'react-router-dom';
import products from '../../utils/data/products';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import RelatedProduct from "./relatedproduct/RelatedProduct";

 const SingleProduct = (props) => {

  let {id} = useParams();
  const [product,setProduct] = useState(false);

  useEffect(() => {
        find(id);
        
  },[id]);
  
  const find = (id) => {
      products.forEach(element => {
        if(element.id == id){
          setProduct(element);
        }
      });
  }

  return (
    <div className="Single-product-main-content">
      <div className="layout">
      
      { product ? <div className="single-product-page">
          <div className="left">
            <img src={prod1} alt="Prod-img1" />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">{product.price}</span>
            <span className="desc">{product.subTitle}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>3</span>
                <span>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:
                <span>HeadPhones</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div> : ''}
        


        <RelatedProduct />
      </div>
    </div>
  );
}

export default SingleProduct;
