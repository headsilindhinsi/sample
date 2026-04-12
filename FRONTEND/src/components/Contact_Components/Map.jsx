import React from 'react'

const Map = () => {

  const mapStyle = {
    width: '100%',
    height: '450px',
    border: 'none'
  }

  return (
    <>
      {/* Full Width Section */}
      <div className="container-fluid px-0">

        <div
          style={{
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          }}
        >
          <iframe title="map" src="https://www.google.com/maps?q=London%20Eye&output=embed" style={mapStyle} loading="lazy" ></iframe>
        </div>

      </div>
    </>
  )
}

export default Map
