import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";

//pages
import Home from "./views/home/Home";
import SingleProduct from "./views/singleproduct/SingleProduct";
import About from './views/about'
import NotFound from './views/NotFound';
//layout
import Layout from "./components/layout/Layout";
import Products from "./views/home/products/Products";


const rr = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />

        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );
   

 export default rr;