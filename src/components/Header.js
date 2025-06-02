import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css"; // External CSS for clean styling
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from "react-redux";
import {selectCartCount} from "../features/cart/cartSelectors";


function Header() {
  const location = useLocation();
  const cartCount = useSelector(selectCartCount)
  console.log("cartCount",cartCount)

  return (
    <header className="header">
      <h2 className="logo">
        <Link to="/">🌿 Paradise Nursery</Link>
      </h2>
      <nav className="nav">
        {location.pathname !== "/products" && (
          <Link to="/products" className="nav-link">Products</Link>
        )}
        <Link to="/cart" className="nav-link cart">
          <ShoppingCartOutlinedIcon className="cart-icon" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
