import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";

//pages
import Home from "./views/home/Home";
import Category from "./views/category/Category";
import SingleProduct from "./views/singleproduct/SingleProduct";
import About from './views/about'
import Contact from './views/contact'
import NotFound from './views/NotFound';
import Wahab from "./views/wahab/Wahab"
//layout
import Layout from "./components/layout/Layout";
import Products from "./views/home/products/Products";

const rr = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/wahab" element={<Wahab />} />

        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );
   

 export default rr;