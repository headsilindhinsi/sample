import React, { useContext, useState } from "react";
import { img } from "../../assets/assets";
import { useNavigate, Link } from "react-router-dom";
import { MyContext } from "../../context/ContextProvider";

const ShopNavbar = () => {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const {
    cartItems = [],
    wishlistItems = [],
    addToCart,
    removeFromwishList,
    clearWishList,
    filteredData,
    SearchFun,
    Input,
    setFilteredData,
    setInput,
    loading,
    searched
  } = useContext(MyContext);

  return (
    <>
      <style>{`
        .custom-navbar {
          background-color: #9b72b2;
          padding: 12px 20px;
        }

        .nav-logo {
          height: 50px;
        }

        /* DESKTOP MENU */
        .nav-center {
          display: flex;
          gap: 30px;
          font-weight: 500;
        }

        .nav-center a {
          color: white;
          text-decoration: none;
        }

        .nav-icons {
          display: flex;
          gap: 15px;
          font-size: 20px;
        }

        /* MOBILE MENU */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: -100%;
          width: 80%;
          height: 100%;
          background: #7d5a7b;
          z-index: 2000;
          transition: 0.4s;
          padding: 25px;
        }

        .mobile-menu.open {
          left: 0;
        }

        .close-btn {
          border: 1px solid #fff;
          background: transparent;
          color: white;
          font-size: 20px;
          padding: 8px 12px;
        }

        .mobile-nav {
          list-style: none;
          padding: 40px 0;
        }

        .mobile-nav li {
          margin: 20px 0;
        }

        .mobile-nav a {
          display: flex;
          justify-content: space-between;
          color: white;
          text-decoration: none;
          font-size: 20px;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.4);
          z-index: 1500;
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="navbar fixed-top custom-navbar">
        <div className="container-fluid d-flex align-items-center justify-content-between">

          {/* LEFT (mobile icons) */}
          <div className="d-lg-none d-flex gap-2 text-light">
            <i className="bi bi-search"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
            ></i>

            <i className="bi bi-cart position-relative"
              onClick={() => navigate("/Cart")}
            >
              {cartItems.length > 0 && (
                <span className="badge bg-i position-absolute top-0 start-100 translate-middle badge rounded-pill">
                  {cartItems.length}
                </span>
              )}
            </i>

            <i className="bi bi-suit-heart position-relative "
              data-bs-toggle="offcanvas"
              data-bs-target="#wishlistCanvas"
            >
              {wishlistItems.length > 0 && (
                <span className="badge bg-i position-absolute top-0 start-100 translate-middle badge rounded-pill">
                  {wishlistItems.length}
                </span>
              )}
            </i>
          </div>

          {/* LOGO */}
          <img src={img.logo} alt="logo" width={140} />

          {/* DESKTOP MENU */}
          <div className="nav-center d-none d-lg-flex">
            <Link to="/Home">HOME</Link>
            <Link to="/Shop">SHOP</Link>
            <Link to="/About-us">ABOUT-US</Link>
            <Link to="/Portfolio">PORTFOLIO</Link>
            <Link to="/Blog">BLOG</Link>
            <Link to="/Contact">CONTACT</Link>
          </div>

          {/* RIGHT */}
          <div className="d-flex align-items-center gap-3">

            {/* DESKTOP ICONS */}
            <div className="nav-icons d-none d-lg-flex text-light">
              <i className="bi bi-search"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasTop"
              ></i>

              <i className="bi bi-cart position-relative"
                onClick={() => navigate("/Cart")}
              >
                {cartItems.length > 0 && (
                  <span className="badge bg-i position-absolute top-0 start-100 translate-middle badge rounded-pill">
                    {cartItems.length}
                  </span>
                )}
              </i>

              <i className="bi bi-suit-heart position-relative"
                data-bs-toggle="offcanvas"
                data-bs-target="#wishlistCanvas"
              >
                {wishlistItems.length > 0 && (
                  <span className="badge  bg-i position-absolute top-0 start-100 translate-middle badge rounded-pill">
                    {wishlistItems.length}
                  </span>
                )}
              </i>
            </div>

            {/* TOGGLE */}
            <button
              className="border-0 bg-transparent d-lg-none"
              onClick={() => setMenuOpen(true)}
            >
              <i className="bi bi-list fs-2 text-light"></i>
            </button>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button onClick={() => setMenuOpen(false)} className="close-btn">✕</button>

        <ul className="mobile-nav">
          <li><Link to="/" onClick={()=>setMenuOpen(false)}>Home <span>›</span></Link></li>
          <li><Link to="#">Pages <span>›</span></Link></li>
          <li><Link to="/Portfolio" onClick={()=>setMenuOpen(false)}>Portfolio <span>›</span></Link></li>
          <li><Link to="/Shop" onClick={()=>setMenuOpen(false)}>Shop <span>›</span></Link></li>
          <li><Link to="/Blog" onClick={()=>setMenuOpen(false)}>Blog <span>›</span></Link></li>
          <li><Link to="/Contact" onClick={()=>setMenuOpen(false)}>Contact <span>›</span></Link></li>
        </ul>
      </div>

      {/* OVERLAY */}
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

  {loading ? (
    <p className="text-muted text-center mt-5">
      Loading...
    </p>
  ) : searched && filteredData.length === 0 ? (
    <p className="text-muted text-center mt-5">
      No matching products found
    </p>
  ) : (
    filteredData.map((item) => (
      <div
        className="col-lg-3 col-md-6 col-12 my-3"
        key={item._id}
       onClick={() => {
  navigate(`/product/${item._id}`);
  setInput("");
  setFilteredData([]);

        }}
        style={{ cursor: "pointer" }}
      >
        <div className="premium-result-card">
          <img src={item.img} className="premium-result-img" alt="" />

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

export default ShopNavbar;
