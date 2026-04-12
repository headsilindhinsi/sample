import React from "react";

const packages = [
  {
    title: "Basic Package",
    price: 150,
    features: [
      "Stylish makeup for bride.",
      "Top label arrangement",
      "Amazing meal & breakfast",
      "Full body Polish",
      "Manicure Pedicure",
    ],
  },
  {
    title: "Standard Package",
    price: 500,
    features: [
      "Stylish makeup for bride.",
      "Top label arrangement",
      "Amazing meal & breakfast",
      "Full body Polish",
      "Manicure Pedicure",
    ],
  },
  {
    title: "Luxury Package",
    price: 750,
    features: [
      "Stylish makeup for bride.",
      "Top label arrangement",
      "Amazing meal & breakfast",
      "Full body Polish",
      "Manicure Pedicure",
    ],
  },
];

const Pricing = () => {
  return (
    <div
      className="container my-5"
    >
      {/* Header */}
      <div className="row mb-5">
        <div className="col text-center">
          <h2 className=" script-heading" >
            Best Pricing
          </h2>
          <p className="main-heading">Choose Your Packages</p>
          <hr style={{ width: "60px", borderTop: "3px solid #c7a89c", margin: "auto" }} />
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="row">
        {packages.map(({ title, price, features }, idx) => (
          <div
            className="col-12 col-md-6 col-lg-4 mb-4"
            key={idx}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                border: "1px solid #8553aa",
                borderRadius: "6px",
                padding: "40px 30px",
                backgroundColor: "#fff",
                width: "100%",
                maxWidth: "450px",
                textAlign: "center",
                boxShadow: "0 6px 15px rgba(199, 168, 156, 0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
              }}
              className="pricing-card"
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(199, 168, 156, 0.4)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 15px rgba(141, 76, 167, 0.2)";
              }}
            >
              <h3
                style={{
                  fontWeight: 500,
                  fontSize: "22px",
                  marginBottom: "25px",
                  color: "#663c82",
                  transition: "color 0.3s ease",
                }}
                className="package-title text-content"
              >
                {title}
              </h3>

              <div
                style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  fontStyle: "italic",
                  color: "#9f8fb3",
                  marginBottom: "10px",
                  fontFamily: "'Dancing Script', cursive",
                  transition: "color 0.3s ease",
                }}
                className="package-price text-content"
              >
                ${price}
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#a592cd",
                    marginLeft: "6px",
                    fontStyle: "normal",
                  }}
                >
                  /Monthly.
                </span>
              </div>

              <hr
                style={{
                  borderColor: "#d8bdb7",
                  margin: "20px 0 30px",
                  opacity: 0.5,
                }}
              />

              <ul className="text-content"
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: "16px",
                  lineHeight: "4",
                  color: "#5a5a5a",
                  minHeight: "140px",
                }}
              >
                {features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>

              <button
                style={{
                  marginTop: "30px",
                  backgroundColor: "#9173ac",
                  border: "none",
                  borderRadius: "25px",
                  color: "white",
                  padding: "12px 32px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#7639a2")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#5a3972")}
              >
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;