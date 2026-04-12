import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const Info = () => {

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: '16px',
    padding: '50px 25px',
    transition: 'all 0.3s ease',
    height: '100%',
  }

  const iconCircle = {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    backgroundColor: '#eee6f7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px auto',
  }

  const iconStyle = {
    color: '#8e44ad',
    fontSize: '28px',
  }

  return (
    <div className="container py-5">
      <div className="row text-center">

        {/* Address */}
        <div className="col-md-4 mb-4">
          <div
            style={cardStyle}
            className="shadow-lg"
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-10px)'
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = ''
            }}
          >
            <div style={iconCircle}>
              <FaMapMarkerAlt style={iconStyle} />
            </div>
            <h5 className="fw-bold">Address</h5>
            <p className="text-muted mb-0">
              7 Green Lake Street <br />
              Crawfordsville, IN 47933
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="col-md-4 mb-4">
          <div
            style={cardStyle}
            className="shadow-lg"
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-10px)'
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = ''
            }}
          >
            <div style={iconCircle}>
              <FaEnvelope style={iconStyle} />
            </div>
            <h5 className="fw-bold">Email Us</h5>
            <p className="text-muted mb-0">
              sukun@gmail.com <br />
              helloyou@gmail.com
            </p>
          </div>
        </div>

        {/* Call */}
        <div className="col-md-4 mb-4">
          <div
            style={cardStyle}
            className="shadow-lg"
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-10px)'
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = ''
            }}
          >
            <div style={iconCircle}>
              <FaPhoneAlt style={iconStyle} />
            </div>
            <h5 className="fw-bold">Call Now</h5>
            <p className="text-muted mb-0">
              +1 800 123 456 789 <br />
              +1 800 123 654 987
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Info
