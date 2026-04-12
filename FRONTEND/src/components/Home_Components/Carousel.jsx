import React, { useEffect } from 'react';
import { first_image } from '../../assets/assets';
import { Carousel as BootstrapCarousel } from 'bootstrap';

const Carousel = () => {

  useEffect(() => {
    const element = document.getElementById('carouselExampleControls');

    if (element) {
      new BootstrapCarousel(element, {
        interval: 3000,
        ride: 'carousel',
        pause: false,
        wrap: true
      });
    }
  }, []);

  return (
    <>
       
       <style>
        {`
        .hero-carousel {
  position: relative;
}

/* Dark overlay */
.hero-carousel::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(129, 124, 124, 0.3);
  z-index: 1;
}

/* Text */
.carousel-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2; /* ABOVE overlay */
  text-align: center;
  width: 100%;
  padding: 0 20px;
}

/* Ensure images stay below */
.carousel-inner,
.carousel-item,
.carousel-img-wrapper {
  position: relative;
  z-index: 0;
}
.top-heading {
  font-family: 'Great Vibes', cursive;
  font-size: 60px;
  color: #fff;
  margin-bottom: 10px;
  word-wrap: break-word;
}

.top-subtext {
  font-size: 20px;
  color: #f1f1f1;
  max-width: 600px;
  margin: 0 auto;
}


.carousel-img {
  width: 100%;
  height: 100%; /* controls height */
  object-fit: cover;
}
.hero-carousel {
  position: relative;
  overflow: hidden;
}

        `}
       </style>
      {/* 🔥 New Text Section */}
       <div 
    id="carouselExampleControls" 
    className="carousel slide hero-carousel"
  >

    {/* 🔥 Overlay Text */}
    <div className="carousel-overlay text-center">
      <h1 className="script-heading text-light">Celebrate Your Love Story</h1>
      <p className="text-content text-light fs-2">
        Creating timeless memories for your most special day
      </p>
    </div>

    <div className="carousel-inner">

      <div className="carousel-item active">
        <div className="carousel-img-wrapper">
          <img src={first_image.carousel1} className="carousel-img" alt="" />
        </div>
      </div>

      <div className="carousel-item">
        <div className="carousel-img-wrapper">
          <img src={first_image.carousel2} className="carousel-img" alt="" />
        </div>
      </div>

      <div className="carousel-item">
        <div className="carousel-img-wrapper">
          <img src={first_image.carousel3} className="carousel-img" alt="" />
        </div>
      </div>

    </div>

    {/* Controls */}
    <button 
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon"></span>
    </button>

    <button 
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon"></span>
    </button>

  </div>

    </>
  );
};

export default Carousel;
