import React from "react";
import { bannerImg } from "../../../assets/assets";

const Banner = () => {
  return (
    <section
      style={{
        fontFamily: "'Playfair Display', serif",
        background: "#fef2fe", // 🤎 SOFT BROWN
        padding: "80px 0",
        color: "#6f625a"
      }}
    >
      <div className="container">

        {/* 🔥 HEADING */}
        <h2
          className="text-center mb-5 script-heading"
          style={{
            fontSize: "2.5rem",
            color: "#7a3d81",
            letterSpacing: "1px"
          }}
        >
          OUR STORY
        </h2>

        {/* 🌸 CARD */}
        <div
          className="row align-items-center"
          style={{
           backgroundColor: "#fbe9fb" ,
            borderRadius: "20px",
            padding: "40px",
            boxShadow: "0 10px 30px rgba(234, 228, 235, 0.08)"
          }}
        >

          {/* TEXT */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <p className="text-content"
              style={{
                fontSize: "1.15rem",
                lineHeight: "2",
                color: "#6f625a"
              }}
            >
              Timeless simplicity meets modern elegance. The Marble Essence Wall
              Clock brings a sense of calm and order to your space with its
              smooth stone texture and gold accents. Perfect for minimalist
              interiors that value quiet luxury and effortless style.
            </p>

            <button className="script-heading"
              style={{
                marginTop: "20px",
                padding: "10px 25px",
                background: "#c87ea7",
                color: "white",
                border: "none",
                borderRadius: "5px"
              }}
            >
              Explore More
            </button>
          </div>

          {/* IMAGE */}
          <div className="col-lg-6 text-center">
            <div
              style={{
                overflow: "hidden",
                borderRadius: "20px"
              }}
            >
              <img
                src={bannerImg}
                alt="decor"
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  transition: "0.5s ease"
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;