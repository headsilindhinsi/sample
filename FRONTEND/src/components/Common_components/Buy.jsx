import "bootstrap/dist/css/bootstrap.min.css";
import { MyContext } from "../../context/ContextProvider";
import { useContext, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom"; // ✅ added
import ShopNavbar from "./ShopNavbar";
import Footer from "./Footer";

const Buy = () => {

  const { id } = useParams();
  const location = useLocation(); // ✅ NEW
  const selectedProducts = location.state?.items || []; // ✅ NEW


  const {
    FullName, setFullName,
    Phone, setPhone,
    Street, setStreet,
    City, setCity,
    State, setState,
    Zip, setZip,
    Total, setTotal,
    Payment, setPayment,
    UserSubmitFun,
    setProduct,
    setProductData,
    productData
  } = useContext(MyContext);

  // ✅ UPDATED USEEFFECT (supports both)
  useEffect(() => {

    // 🟢 MULTIPLE PRODUCTS (from cart)
    if (selectedProducts.length > 0) {

      setProductData(selectedProducts);

      const totalPrice = selectedProducts.reduce(
        (sum, item) => sum + Number(item.price),
        0
      );

      setTotal(totalPrice + 10);
      setPayment("COD");
      return;
    }

    // 🟢 SINGLE PRODUCT (old flow)
    if (!id) return;

    fetch(`https://great-wedding.onrender.com/product/${id}`)
      .then(res => res.json())
      .then(data => {
        setProductData(data);
        setProduct(data.type);
        setTotal(Number(data.price) + 10);
        setPayment("COD");
      });

  }, [id, selectedProducts]);

  // ✅ LOADING FIX
  if (!productData || (Array.isArray(productData) && productData.length === 0)) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  const upiLink = `upi://pay?pa=yourupi@okaxis&pn=YourName&am=${Total}&cu=INR`;

  // ✅ UPDATED SUBMIT (handles both cases safely)
  const handlePayment = (e) => {
    e.preventDefault();

    if (Array.isArray(productData)) {
      // multiple products
      UserSubmitFun(e, productData);
    } else {
      // single product
      UserSubmitFun(e, productData);
    }

    setTimeout(() => {
      if (Payment !== "COD") {
        window.location.href = upiLink;
      }
    }, 500);
  };

  return (
    <>
      <ShopNavbar />

      <div className="container py-5 mt-5">
        <form onSubmit={handlePayment}>
          <div className="row g-4">

            {/* LEFT SIDE */}
            <div className="col-lg-8">

              {/* USER DETAILS */}
              <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
                <h5 className="fw-bold mb-3">👤 Personal Details</h5>

                <div className="row">
                  <div className="col-md-6">
                    <input className="form-control mb-3 p-2"
                      placeholder="Full Name"
                      value={FullName}
                      onChange={e => setFullName(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6">
                    <input className="form-control mb-3 p-2"
                      placeholder="Phone Number"
                      value={Phone}
                      onChange={e => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
                <h5 className="fw-bold mb-3">📍 Delivery Address</h5>

                <input className="form-control mb-3"
                  placeholder="Street Address"
                  value={Street}
                  onChange={e => setStreet(e.target.value)}
                />

                <div className="row">
                  <div className="col-md-4">
                    <input className="form-control mb-3"
                      placeholder="City"
                      value={City}
                      onChange={e => setCity(e.target.value)}
                    />
                  </div>

                  <div className="col-md-4">
                    <input className="form-control mb-3"
                      placeholder="State"
                      value={State}
                      onChange={e => setState(e.target.value)}
                    />
                  </div>

                  <div className="col-md-4">
                    <input className="form-control mb-3"
                      placeholder="ZIP Code"
                      value={Zip}
                      onChange={e => setZip(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* PAYMENT */}
              <div className="card border-0 shadow-sm rounded-4 p-4">
                <h5 className="fw-bold mb-3">💳 Payment Method</h5>

                {["COD", "GPAY", "UPI"].map((method) => (
                  <div
                    key={method}
                    className={`p-3 mb-2 rounded-3 border ${
                      Payment === method ? "border-primary bg-light" : ""
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setPayment(method)}
                  >
                    <input type="radio" checked={Payment === method} readOnly />{" "}
                    {method === "COD"
                      ? "Cash on Delivery"
                      : method === "GPAY"
                      ? "Google Pay"
                      : "UPI Payment"}
                  </div>
                ))}

                {(Payment === "GPAY" || Payment === "UPI") && (
                  <div className="text-center mt-3">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${upiLink}`}
                      alt="QR"
                    />
                    <p className="mt-2 text-muted">Scan & Pay</p>
                  </div>
                )}
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-lg rounded-4 p-4 position-sticky" style={{ top: "100px" }}>

                <h5 className="fw-bold mb-3">🛒 Order Summary</h5>

                {/* ✅ MULTIPLE OR SINGLE */}
                {Array.isArray(productData) ? (
                  productData.map((item, i) => (
                    <div key={i} className="mb-3">
                      <img
                        src={item.img}
                        className="img-fluid rounded mb-2"
                        style={{ height: "120px", objectFit: "cover" }}
                      />
                      <h6 className="fw-bold">{item.type}</h6>

                      <div className="d-flex justify-content-between">
                        <span>Price</span>
                        <span>₹{item.price}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <img
                      src={productData.img}
                      className="img-fluid rounded mb-3"
                      style={{ height: "200px", objectFit: "cover" }}
                    />

                    <h6 className="fw-bold">{productData.type}</h6>

                    <div className="d-flex justify-content-between">
                      <span>Price</span>
                      <span>₹{productData.price}</span>
                    </div>
                  </>
                )}

                <div className="d-flex justify-content-between">
                  <span>Delivery</span>
                  <span>₹10</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <span>₹{Total}</span>
                </div>

                <button type="submit" className="btn btn-dark w-100 mt-4 py-2">
                  {Payment === "COD" ? "Place Order" : "Proceed to Pay"}
                </button>

              </div>
            </div>

          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Buy;
