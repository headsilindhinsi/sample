import React from 'react'
import { bannerImg } from '../../../assets/assets'


const Banner = () => {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active position-relative">

            {/* ✅ Image */}
            <img src={bannerImg} className="d-block w-100" alt="banner" style={{   height: "100vh",   objectFit: "cover"}}/>

            {/* ✅ Overlay (dark effect) */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                // background: "rgba(90, 85, 85, 0.4)"
              }}
            ></div>

            {/* ✅ TEXT CONTENT */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
                zIndex: 2
              }}
            >
              <h1 className="text-content text-light" style={{ fontSize: "60px", fontWeight: "600" }}>
                About Us
              </h1>

              <p className="main-heading text-light fs-3" style={{ fontSize: "20px", marginTop: "10px" }}>
                Where Love Finds Its Perfect Celebration
              </p>

              <button className='script-heading fs-4'
                style={{
                  marginTop: "20px",
                  padding: "10px 25px",
                  background: "#ba80a1",
                  border: "none",
                  color: "white",
                  borderRadius: "5px"
                }}
              >
                Explore More
              </button>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Banner