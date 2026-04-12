import React from 'react'
import { our } from '../../assets/assets'

const Center = () => {
  return (
    <>
      <style>
{`
  .img-wrapper {
    overflow: hidden;
    display: block;
    height: 350px; /* ✅ FIXED HEIGHT (adjust if needed) */
    border-radius: 5px;
  }

  .img-zoom {
    width: 100%;
    height: 100%;           /* ✅ fill container */
    object-fit: cover;      /* ✅ keeps image proportion */
    transition: transform 0.5s ease-in-out;
  }

  .img-wrapper:hover .img-zoom {
    transform: scale(1.15);
  }
`}
</style>


      <div className='container mt-5 mb-5'>
        <div className='row'>
          <div className='col text-center'>
            <h3 className='script-heading fst-italic'>Our Services</h3>
            <h4 className='main-heading'>WHAT WE OFFER FOR YOU</h4>
          </div>
        </div>

        <div className='card border-0'>
          <div className='row'>
            {our.map((item, index) => (
              <div className='col-lg-3 col-md-6 col-12 mt-3' key={index}>
                <div className="img-wrapper">
                  <img src={item.img} className="img-zoom" alt={item.name} />
                </div>
                <p className='text-center fs-5 mt-2 text-content'>
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Center
