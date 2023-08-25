import React, { useEffect,useState } from "react";
import "./Products.scss";
import ProductComponent from "../../home/product/Product";
import productData from "../../../utils/data/products";

  
 const Products = ({ innerPage, headingText }) => {

    const [data,setData] = useState([]);
  
    useEffect(() => {
      
          setData(productData);
          
    },[]);


  return (
    <div className="Products-container">
      {!innerPage && <div className="Sec-heading">{headingText}</div>}

      <div className="Products">
    
        {data.map((element) => (
        <ProductComponent key={element.id} data={element} />
        ))}

      </div>
    </div>
  );
}

export default Products;
