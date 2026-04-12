import React from 'react'
import { Call } from '../../assets/assets'


const Hero = () => {
  return (
    <>

     <style>
      {`
      body {
  padding-top: 80px;

      }

      
.shop-hero {
  position: relative;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* 👈 gives parallax effect */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  overflow: hidden;
}

.shop-hero-overlay {
  background: rgba(87, 64, 94, 0.6); 
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.shop-hero-content {
  text-align: center;
  max-width: 700px;
  padding: 2rem;
  animation: fadeInUp 1s ease-in-out;
}

.shop-hero-content h6 {
  color: #f6e6f2;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.shop-hero-content h1 {
  font-size: 3rem;
  font-weight: 500;
  color : white;
  font-family: 'Playfair Display', serif;
}

.shop-hero-content hr {
  width: 60px;
  border: 1px solid #c2a46b;
  margin: 1.5rem auto;
}

.shop-hero-content p {
  color: #080505;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.btn-buy {
  background: #ba78ad;
  color: white;
  border: none;
  padding: 0.9rem 2.2rem;
  font-size: 1rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-buy:hover {
  background: #3f143f;
}

/* Parallax Animation */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}


      `}

      
     </style>
      
             <section className="shop-hero" style={{ backgroundImage: `url(${Call})` }}>
                        <div className="shop-hero-overlay">
                          <div className="shop-hero-content">
                            <h1>Your dream wedding starts here
                            Shop elegance, love, and everything in between.</h1>
                            <hr />
                            <p>
                              
                            </p>
                            <button className="btn-buy">BUY NOW</button>
                          </div>
                        </div>
                  
                  
                       
                      </section>
    </>
  )
}

export default Hero