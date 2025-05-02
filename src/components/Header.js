import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css"; // External CSS for clean styling

function Header({ cartCount = 0 }) {
  const location = useLocation();

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
          🛒
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
