import React from 'react'
import { section2 } from '../../../assets/assets'

const Section2 = () => {
  return (
    <>
      <style>
        {`
.section2 {
   background: "#f3f2f1", 
  padding: 100px 0;
}

/* OVAL CARD */
.oval-card {
  position: relative;
  background: #d2aac5; /* soft brown */
  color: #4A3F35; /* dark brown text */
  width: 340px;
  height: 550px;
  border-radius: 200px;
  padding: 70px 40px;
  text-align: center;
  overflow: hidden;
}

/* INNER BORDER LINE */
.oval-card::before {
  content: "";
  position: absolute;
  inset: 20px;
  border: 1px solid rgba(255,255,255,0.5);
  border-radius: 200px;
}

/* FLOWER DECORATION */
.oval-card::after {
  content: "✿ ✿ ✿";
  position: absolute;
  font-size: 26px;
  color: #fff;
  top: 30px;
  left: 20px;
  opacity: 1;
}

/* TEXT */
.oval-card h2 {
  font-size: 30px;
  margin-bottom: 20px;
}

.oval-card p {
  font-size: 15px;
  line-height: 1.8;
}

/* CENTER IMAGE */
.circle-image {
  position: relative;
  width: 620px;
  height: 620px;
  border-radius: 50%;
  overflow: hidden;
  border: 12px solid #fff;

  margin-left: 50%;
  transform: translateX(-50%);
}

.circle-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* HORIZONTAL LINE */
.circle-image::after {
  content: "";
  position: absolute;
  bottom: 90px;
  left: 0;
  width: 100%;
  height: 1px;
  background: rgba(255,255,255,0.6);
}

/* OVERLAY TEXT */
.circle-overlay {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  color: #fff;
}

.circle-overlay p {
  font-size: 16px;
  letter-spacing: 1px;
}

.circle-overlay h1 {
  font-size: 42px;
  font-weight: 600;
}
        `}
      </style>

      <section className="section2">
        <div className="container">
          <div className="row align-items-center justify-content-center">

            {/* LEFT CARD */}
            <div className="col-md-4 d-flex justify-content-center">
              <div className="oval-card">
                <h1 className='script-heading'>Isabella Bell</h1>
                <p className='text-content fs-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam similique eveniet culpa quae. Enim dicta commodi fugit
                  fugiat reprehenderit consequuntur unde obcaecati.
                </p>
              </div>
            </div>

            {/* CENTER IMAGE */}
            <div className="col-md-4 text-center">
              <div className="circle-image">
                <img src={section2} alt="Wedding" />
                <div className="circle-overlay">
                  <p className='text-content fs-2 text-light'>We Are Getting Married In</p>
                  <h1 className='main-heading text-light'>12 . 12 . 2024</h1>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="col-md-4 d-flex justify-content-center">
              <div className="oval-card">
                <h1 className='script-heading'>William Max</h1>
                <p className='text-content fs-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam similique eveniet culpa quae. Enim dicta commodi fugit
                  fugiat reprehenderit consequuntur unde obcaecati.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Section2