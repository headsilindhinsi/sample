import React, { useContext } from 'react'
import { MyContext } from '../../context/ContextProvider'
import { useNavigate } from 'react-router-dom'
import Footer from '../Common_components/Footer'
import ShopNavbar from '../Common_components/ShopNavbar'

const Cart = () => {

    const navigate = useNavigate()
  const {
    cartItems,
    removeFromCart,
    clearCart,
    getCartTotal,
    handleSelect,
    selectedItems,
    selectedTotal
  } = useContext(MyContext)

  

  return (
    
    <>
    <ShopNavbar />
    <div style={{
      padding: "80px 40px",
      background: "#f6f2ff",
      minHeight: "100vh"
    }}>

      <h2 style={{ marginBottom: "30px", color: "#4b3f72" }} className='text-center text-content fs-1 my-3'>
        Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <h4>Your cart is empty</h4>
      ) : (
        <div>

          {cartItems.map((item, index) => (

            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                background: "#fff",
                borderRadius: "12px",
                padding: "15px 20px",
                marginBottom: "20px",
                gap: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
              }}
            >

              {/* CHECKBOX */}
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => handleSelect(item.id)}
              />

              {/* IMAGE */}
              <img
                src={item.img}
                alt="cart"
                style={{
                  width: "100px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "8px"
                }}
              />

              {/* DETAILS */}
              <div style={{ flex: 1 }}>
                <h5>{item.type}</h5>
                <p style={{ color: "#888", fontSize: "14px" }}>
                  {item.desc}
                </p>
                <h6 style={{ color: "#7b5cff" }}>
                  ₹{item.price}
                </h6>
              </div>

    

              {/* DELETE */}
              <i
                className='bi bi-trash'
                onClick={() => removeFromCart(item.id)}
                style={{ color: "red", cursor: "pointer" }}
              ></i>

            </div>

          ))}

          {/* TOTAL */}
          <div style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "right"
          }}>

            <h4 style={{ color: "#4b3f72" }}>
              Selected Total: ₹{selectedTotal.toFixed(2)}
            </h4>

            <h5 style={{ color: "#888" }}>
              Full Total: ₹{(getCartTotal() || 0).toFixed(2)}
            </h5>

            <button
                        onClick={() =>
                            navigate("/buy", {
                            state: {
                                items: cartItems.filter(item =>
                                selectedItems.includes(item.id)
                                )
                            }
                            })
                        }
                        style={{
                            marginTop: "10px",
                            padding: "10px 20px",
                            background: "#7b5cff",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px"
                        }}
                        >
                        Checkout
                        </button>


            <button
              onClick={clearCart}
              style={{
                marginTop: "10px",
                marginLeft: "10px",
                padding: "10px 20px",
                border: "1px solid red",
                color: "red",
                background: "transparent",
                borderRadius: "6px"
              }}
            >
              Clear Cart
            </button>

          </div>

        </div>
      )}

    </div>
    <Footer />
    </>
  )
}

export default Cart
