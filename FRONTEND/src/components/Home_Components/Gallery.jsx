import React from "react";
import { CurveImages } from "../../assets/assets";


const Gallery = () => {
  return (

    <>
   <style>
    {`
    
.gallery-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: #fff;
}

/* IMAGE */
.gallery-card img {
  width: 100%;
  height: 484px;
  object-fit: cover;
  transition: 0.4s;
}

/* HOVER ZOOM */
.gallery-card:hover img {
  transform: scale(1.05);
}

/* OVERLAY */
.gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transition: 0.4s;
}

.gallery-card:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay span {
  font-size: 40px;
  color: #333;
}
/* 🔲 PERFECT SHARP SQUARE */
.gallery-card.square {
  border-radius: 0 !important;   /* 🔥 remove rounding */
}

/* also remove from image */
.gallery-card.square img {
  border-radius: 0 !important;
}




/* 🟣 ARCH (CENTER IMAGE LIKE YOUR DESIGN) */
.gallery-card.arch {
  border-radius: 200px 200px 0 0; /* 🔥 MAGIC LINE */
}

/* Optional: make it taller like your UI */
.gallery-card.arch img {
  height: 480px;
}



    `}
   </style>
    <div className="container my-5">
      <div className="row g-4">

        {CurveImages.map(( CurveImages , index) => (
          <div className="col-md-4" key={index}>
            
            <div className={`gallery-card ${CurveImages.type}`}>
              
              <img src={CurveImages.img} alt="" />

              {/* Overlay */}
              <div className="gallery-overlay">
                <span>+</span>
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
     </>
  );
};

export default Gallery;
