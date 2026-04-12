import React from 'react';

const Section3 = () => {
  return (
    <>
    <style>
      {`
      .section3 {
  background: linear-gradient(135deg, #fdf7f9, #f8f0f5);
}

/* Heading */
.script-heading {
  font-family: 'Great Vibes', cursive;
  font-size: 42px;
  color: #333;
}

.text-content {
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

/* Cards */
.feature-card {
  background: #fff;
  padding: 30px 20px;
  border-radius: 15px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

/* Icon */
.icon {
  font-size: 40px;
  margin-bottom: 15px;
}

/* Text */
.feature-card h5 {
  font-weight: 600;
  margin-bottom: 10px;
}

.feature-card p {
  color: #777;
  font-size: 15px;
}

      `}
    </style>
    <section className="section3 py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="script-heading">Why Choose Us</h2>
          <p className="text-content fs-5">
            We create unforgettable experiences with elegance, creativity, and attention to detail.
          </p>
        </div>

        {/* Features */}
        <div className="row g-4">

          <div className="col-md-4">
            <div className="feature-card text-center">
              <div className="icon">💐</div>
              <h5 className='text-content fs-3'>Elegant Design</h5>
              <p className='main heading fs-4'>Beautifully crafted layouts that capture your special moments perfectly.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card text-center">
              <div className="icon">💍</div>
              <h5  className='text-content fs-3'>Personal Touch</h5>
              <p className='main heading fs-4'>Every detail is customized to reflect your unique love story.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card text-center">
              <div className="icon">✨</div>
              <h5  className='text-content fs-3'>Memorable Experience</h5>
              <p className='main heading fs-4'>We design experiences that you and your guests will cherish forever.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  );
};

export default Section3;
