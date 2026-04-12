import React from 'react'
import { Grids } from '../../assets/assets'

const Coloumn = () => {
  return (
    <>
    <style>
        {`
        .img-wrapper {
        overflow: hidden;
        display: block;
        height: 450px; /* ✅ FIXED HEIGHT (adjust if needed) */
        border-radius: 5px;
         }
        `}
    </style>
    <div>
        <div className='container'>
            <div className='row'>
                {Grids.map((Grids , index) => (
                    <div className="col-lg-4 col-md-6 col-12 mt-5 img-wrapper" key={index}>
                    <img src={Grids.img} className='img-fluid' />
                    <p className='fs-4 text-content text-dark'>{Grids.img1}</p>
                    
                </div>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Coloumn