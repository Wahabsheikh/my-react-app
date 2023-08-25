import React from "react";
import { useEffect, useState, useContext } from "react";
import { useNavigate, Outlet, NavLink } from "react-router-dom";
import "./Header.scss";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

// import { Context } from "../../utils/Context";
import Cart from "../../cart/Cart";
import Search from "./search/Search";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li>
              {" "}
              <NavLink to="/">Home</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/category">category</NavLink>
            </li>
            <li>
              <NavLink to="/products">products</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
            <li>
              <NavLink to="/Wahab">wahab</NavLink>
            </li>
          </ul>
          <div className="center">E-Commerce</div>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)} />

            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              <span className="cart-counter">2</span>
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
}

export default Header;
