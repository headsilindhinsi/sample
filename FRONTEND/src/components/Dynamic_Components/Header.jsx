import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../Common_components/Footer";

const Header = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (!id) {
      console.log("❌ ID missing");
      return;
    }

    console.log("Fetching product ID:", id);

    fetch(`https://great-wedding.onrender.com/product/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("Product Data:", data);
        setSelectedProduct(data);
      })
      .catch(err => console.log("❌ ERROR:", err));
  }, [id]);

  // ✅ VERY IMPORTANT FIX
  if (!selectedProduct) {
    return (
      <div className="text-center mt-5">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <>
    <style>

  {`
body {
 padding-top: 80px;
}
  `}
    </style>

     

      <div className="container my-5 p-5">
        <div className="row align-items-center">

          <div className="col-lg-6 text-center">
            <img
              src={selectedProduct.img}
              className="img-fluid rounded shadow"
              alt="product"
            />
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <h2 className="fw-bold">{selectedProduct.type}</h2>
            <p className="text-muted">Category: {selectedProduct.category}</p>
            <h4>₹{selectedProduct.price}</h4>

            <p>{selectedProduct.desc}</p>

            <button
              className="btn btn-dark mt-3"
              onClick={() => navigate(`/Check/${selectedProduct._id}`)}
            >
              Buy Now
            </button>

            <Accordion className="mt-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Product Details</Accordion.Header>
                <Accordion.Body>
                  Premium quality product.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Header;
