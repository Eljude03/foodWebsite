
import { useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";



export default function Header({cartItems}) {

  const [toggle, setToggle] = useState(true);
  const [search, setSearch] = useState(false);

  const showNavBar = () => {
    setToggle((prevstate) => !prevstate);
  };

  function showSearch() {
    setSearch((prevSearch) => !prevSearch);
  }

  return (
    <header className="header">
      <Link to="/" className="logo">
        <i className="fas fa-utensils"></i> EVP Resto.
      </Link>
      <nav className={toggle ? "navbar-active" : "navbar"}>
        <a href="#">Home</a>
        <a href="#dishes">Dishes</a>
        <a href="#about">About</a>
        <a href="#menu">Menu </a>
        <a href="#review">Review</a>
        <a href="#orders">Order </a>
      </nav>

      <div className="icons">
        <i onClick={showNavBar} className="menu-bars" id="menu-bars">
          {toggle ? <FaBars /> : <FaTimes />}{" "}
        </i>
        <i onClick={showSearch} className="fas fa-search" id="search-icon"></i>
        <a href="#" className="fas fa-heart"></a>
        <Link to="/cart" className="fas fa-shopping-cart"></Link>
        {cartItems.length > 0 && <span>{cartItems.length}</span>}
      </div>

      {/* Search Form */}

      {search && (
        <form action="" id="search-form">
          <input
            placeholder="search..."
            type="search"
            name=""
            id="search-box"
          />
          <label for="search-box" className="fas fa-search"></label>
          <i onClick={showSearch} className="fas fa-times" id="close"></i>
        </form>
      )}
    </header>
  );
}
