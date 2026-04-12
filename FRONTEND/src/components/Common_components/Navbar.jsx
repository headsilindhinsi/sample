import { useContext, useState } from 'react';
import { img } from '../../assets/assets';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { MyContext } from '../../context/ContextProvider';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const { 
    scrolled, 
    cartItems = [], 
    wishlistItems = [], 
    addToCart, 
    removeFromwishList, 
    clearWishList ,
    filteredData,
    Input,
    setFilteredData,
    setInput,
    SearchFun
  } = useContext(MyContext);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`}>
        <div className="container-fluid position-relative">

          {/* 🔍 MOBILE ICONS (LEFT ONLY) */}
          <div className="mobile-icons d-lg-none">

            <i
              className="bi bi-search fs-5"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              style={{ cursor: "pointer" }}
            ></i>

            <i 
              className="bi bi-cart fs-5 position-relative"
              onClick={() => navigate('/Cart')}
              style={{ cursor: "pointer" }}
            >
              {cartItems.length > 0 && (
                <span className="badge bg-i position-absolute top-0 start-100 translate-middle badge rounded-pill">
                  {cartItems.length}
                </span>
              )}
            </i>

            <i 
              className="bi bi-suit-heart fs-5 position-relative"
              data-bs-toggle="offcanvas"
              data-bs-target="#wishlistCanvas"
              style={{ cursor: "pointer" }}
            >
              {wishlistItems.length > 0 && (
                <span className="badge bg-i position-absolute top-0 start-100 translate-middle badge rounded-pill">
                  {wishlistItems.length}
                </span>
              )}
            </i>

          </div>

          {/* 🌸 LOGO */}
          <img src={img.logo} alt="logo" width={140} className="nav-logo" />

          {/* ☰ MOBILE MENU */}
          <button 
            className="navbar-toggler border-0"
            onClick={() => setMenuOpen(true)}
          >
            <i className="bi bi-list fs-2"></i>
          </button>

          {/* ================= DESKTOP MENU ================= */}
          <div className="collapse navbar-collapse d-none d-lg-flex">

            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/Home">HOME</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Shop">SHOP</Link>
              </li>
                  
                  <li className="nav-item">
                <Link className="nav-link" to="/AbouT-us">ABOUT-US</Link>
              </li>
            

              <li className="nav-item">
                <Link className="nav-link" to="/Portfolio">PORTFOLIO</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Blog">BLOG</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Contact">CONTACT</Link>
              </li>

              
            </ul>

            {/* DESKTOP ICONS */}
            <div className="d-flex gap-3 align-items-center">

              <i
                className="bi bi-search fs-5"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasTop"
                style={{ cursor: "pointer" }}
              ></i>

              <i 
                className="bi bi-cart fs-5 position-relative "
                onClick={() => navigate('/Cart')}
                style={{ cursor: "pointer" }}
              >
                {cartItems.length > 0 && (
                  <span className="badge bg-i position-absolute top-0 start-100 translate-middle badge rounded-pill">
                    {cartItems.length}
                  </span>
                )}
              </i>

              <i 
                className="bi bi-suit-heart fs-5 position-relative"
                data-bs-toggle="offcanvas"
                data-bs-target="#wishlistCanvas"
                style={{ cursor: "pointer" }}
              >
                {wishlistItems.length > 0 && (
                  <span className="badge bg-i position-absolute top-0 start-100 translate-middle badge rounded-pill">
                    {wishlistItems.length}
                  </span>
                )}
              </i>

            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-header">
          <button onClick={() => setMenuOpen(false)} className="close-btn">✕</button>
        </div>

        <ul className="mobile-nav">
          <li onClick={() => setMenuOpen(false)}><Link to="/Home">Home</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/Shop">Shop</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/Portfolio">Portfolio</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/Blog">Blog</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/Contact">Contact</Link></li>
        </ul>
      </div>

      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}

  {/* ================= WISHLIST ================= */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="wishlistCanvas">

        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold">❤️ Wishlist</h5>
          <button className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">

          {wishlistItems.length === 0 ? (
            <p className="text-center text-muted mt-5">
              Your Wishlist Is Empty
            </p>
          ) : (
            <>
              {wishlistItems.map((item) => (
                <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom py-3">

                  <div className="d-flex gap-3">
                    <img src={item.img} width="60" height="60" className="rounded" />
                    <div>
                      <p className="mb-0 fw-semibold">{item.name}</p>
                      <small>₹{item.price}</small>
                    </div>
                  </div>

                  <div className="d-flex gap-2">

                    <i 
                      className="bi bi-cart-plus text-success"
                      onClick={() => addToCart(item)}
                    ></i>

                    <i 
                      className="bi bi-trash text-danger"
                      onClick={() => removeFromwishList(item.id)}
                    ></i>

                  </div>
                </div>
              ))}

              <button 
                className="btn btn-outline-danger w-100 mt-3"
                onClick={clearWishList}
              >
                Clear Wishlist
              </button>
            </>
          )}

        </div>
      </div>


{/* search offcanvas*/}

     <div
  className="offcanvas offcanvas-top premium-search"
  tabIndex="-1"
  id="offcanvasTop"
>

  {/* ✅ REQUIRED */}
  <div className="offcanvas-body">

    <div className="premium-search-container">

      {/* CLOSE */}
      <button
        className="premium-close-btn"
        data-bs-dismiss="offcanvas"
        onClick={() => {
          setInput("");
          setFilteredData([]);
        }}
      >
        ✕
      </button>

      {/* TITLE */}
      <h1 className="premium-search-title text-content">Search</h1>

      {/* INPUT */}
      <input
        className="premium-search-input"
        placeholder="Search products, Cake, Decoration Flowers..."
        value={Input}
        onChange={(e) => SearchFun(e.target.value)}
      />

      {/* RESULTS */}
      <div className="row mt-4 w-100">

        {Input && filteredData.length === 0 ? (
          <p className="text-muted text-center mt-5">
            No matching results found.
          </p>
        ) : (
          filteredData.map((item) => (
            <div
              className="col-lg-3 col-md-6 col-12 my-3"
              key={item._id}
              onClick={() => {
                navigate(`/Dynamic/${item._id}`);
                setInput("");
                setFilteredData([]);
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="premium-result-card">

                <img
                  src={item.img}
                  className="premium-result-img"
                  alt=""
                />

                <div className="premium-result-content">
                  <p className="premium-result-type">{item.type}</p>
                  <h5 className="premium-result-name">{item.desc}</h5>
                  <p className="premium-result-price">
                    ₹{item.price}
                  </p>
                </div>

              </div>
            </div>
          ))
        )}

      </div>

    </div>
  </div>
</div>
  

    </>
  );
};

export default Navbar;
