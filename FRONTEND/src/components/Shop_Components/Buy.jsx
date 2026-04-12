import React, { useContext, useEffect } from 'react'
import { MyContext } from '../../context/ContextProvider'
import { useNavigate } from 'react-router-dom'

const Buy = () => {

  const { products, setProducts, addToCart, AddToWishList } = useContext(MyContext)
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:5000/product/products?category=shop")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, [])

  return (
    <>
      <style>
        {`

/* ✅ GLOBAL FIX FOR NAVBAR OVERLAP */
body {
  padding-top: 80px;
}
.shop-header {
  background: linear-gradient(135deg, #785a95, #efe3f7);
  padding: 120px 0 80px; /* 👈 TOP | LEFT-RIGHT | BOTTOM */
  text-align: center;
  margin-top : 70px;
}


.shop-title {
  font-size: 48px;
  font-weight: 600;
  color: #333;
}

.shop-breadcrumb {
  color: #7a6c8f;
  font-size: 16px;
}

/* MAIN CONTAINER */
.buy-container {
  padding: 100px 40px;
  background: #fff;
}

/* GRID */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

/* CARD */
.product-card {
  text-align: center;
}

/* IMAGE */
.img-container {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.img-container img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: 0.4s ease;
}

/* OVERLAY */
.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

/* DESKTOP HOVER */
@media (hover: hover) {
  .img-container:hover .overlay {
    opacity: 1;
    visibility: visible;
  }

  .img-container:hover img {
    transform: scale(1.05);
  }
}

/* MOBILE FIX */
@media (hover: none) {
  .overlay {
    opacity: 1;
    visibility: visible;
    background: rgba(0,0,0,0.2);
  }
}

/* BUTTONS */
.cart-btn, .wishlist-btn {
  background: white;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  transition: 0.3s;
}

.cart-btn:hover, .wishlist-btn:hover {
  background: black;
  color: white;
}

/* TEXT */
.product-info {
  margin-top: 10px;
}

.product-info h5 {
  font-size: 16px;
}

.product-info p {
  font-size: 14px;
  color: #777;
}

.product-info h6 {
  color: #c0392b;
}

        `}
      </style>

      {/* HEADER */}
      <div className="shop-header">
        <h1 className="shop-title">Shop Page</h1>
        <p className="shop-breadcrumb">Home // Shop</p>
      </div>

      {/* PRODUCTS */}
      <div className="buy-container">
        <div className="product-grid">

          {products.map((value, index) => (

            <div key={index} className="product-card">

              {/* IMAGE */}
              <div
                className="img-container"
                onClick={() => navigate(`/product/${value._id}`)}
              >

                <img src={value.img} alt="product" />

                {/* OVERLAY */}
                <div className="overlay">

                  <button
                    className="cart-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart({ ...value, id: value._id });
                    }}
                  >
                    Add To Cart
                  </button>

                  <button
                    className="wishlist-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      AddToWishList({ ...value, id: value._id });
                    }}
                  >
                    <i className="bi bi-suit-heart"></i>
                  </button>

                </div>
              </div>

              {/* TEXT */}
              <div className="product-info">
                <h5>{value.type}</h5>
                <p>{value.desc}</p>
                <h6>₹{value.price}</h6>
              </div>

            </div>

          ))}

        </div>
      </div>

    </>
  )
}

export default Buy
