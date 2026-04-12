import React from 'react';
import { Portfolio } from '../../assets/assets';

const PortFolio = () => {



  // Separate images
  const leftOval = Portfolio.find(img => img.type === "oval");
  const rightOval = Portfolio.filter(img => img.type === "oval")[1];
  const centerImages = Portfolio.filter(img => img.type !== "oval");

  return (

    <>

 <style>
  {`
  /* ✅ GLOBAL FIX FOR NAVBAR OVERLAP */
body {
  padding-top: 80px;
  }

  /* Grid layout */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
/* Square images */
.square img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* Circle center image */
.circle img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  border: 10px solid #eee;
}

/* Oval side images */
.oval-img img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 50% / 30%;
  border: 10px solid #eee;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* Responsive */
@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }

  .oval-img img {
    height: 250px;
  }

  `}
 </style>
     
    <section className="portfolio-section container py-5 my-5 mt-5">

      <div className="row g-4 align-items-center">

        {/* LEFT OVAL */}
        <div className="col-md-2 text-center">
          <div className="oval-img">
            <img src={leftOval?.img} alt="" />
          </div>
        </div>

        {/* CENTER GRID */}
        <div className="col-md-8">
          <div className="portfolio-grid">

            {centerImages.map((item) => (
              <div key={item.id} className={item.type}>
                <img src={item.img} alt="" />
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT OVAL */}
        <div className="col-md-2 text-center">
          <div className="oval-img">
            <img src={rightOval?.img} alt="" />
          </div>
        </div>

      </div>

    </section>
    </>
  );
};

export default PortFolio;
