import React from 'react'

const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer {
            background-color: #9c8aa0;
            color: white;
            padding: 60px 20px 20px;
            font-family: 'Poppins', sans-serif;
          }

          .footer h2 {
            font-family: 'Dancing Script', cursive;
            margin-bottom: 20px;
          }

          .footer a {
            display: block;
            color: white;
            text-decoration: none;
            margin-bottom: 10px;
            transition: 0.3s;
          }

          .footer a:hover {
            color: #e6d3cf;
          }

          .footer-center {
            text-align: center;
          }

          .footer-icons {
            margin-top: 20px;
          }

          .footer-icons span {
            display: inline-block;
            border: 1px solid white;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            line-height: 40px;
            margin: 0 5px;
            text-align: center;
            transition: 0.3s;
            cursor: pointer;
          }

          .footer-icons span:hover {
            background: white;
            color: #9c8aa0;
          }

          .footer-bottom {
            border-top: 1px solid rgba(255,255,255,0.3);
            margin-top: 40px;
            padding-top: 15px;
            text-align: center;
            font-size: 14px;
          }
        `}
      </style>

      <div className="footer">
        <div className="container">
          <div className="row text-center text-md-start mt-5 mb-5">
            
            {/* Left - Links */}
            <div className="col-md-4 mb-4">
              <h2>Links</h2>
              <div className="row">
                <div className="col-6">
                  <a href="#">About</a>
                  <a href="#">RSVP</a>
                  <a href="#">Get Quote</a>
                </div>
                <div className="col-6">
                  <a href="#">Services</a>
                  <a href="#">Gallery</a>
                  <a href="#">Contact</a>
                </div>
              </div>
            </div>

            {/* Center */}
            <div className="col-md-4 mb-4 footer-center">
              <h2>Sukun.</h2>
              <p>
                We can’t wait to see all of our beloved friends
                <br />
                and relatives at our wedding.
              </p>

              <div className="footer-icons">
                <span>f</span>
                <span>t</span>
                <span>i</span>
              </div>
            </div>

            {/* Right - Contact */}
            <div className="col-md-4 mb-4">
              <h2>Contact</h2>
              <p>sukun@gmail.com</p>
              <p>
                4517 Washington Ave.
                <br />
                Manchester, Kentucky 39495
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="footer-bottom">
            © Copyright 2024 | Sukun | All right reserved.
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer