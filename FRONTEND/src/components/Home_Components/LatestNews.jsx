import React from 'react'
import { Latest } from '../../assets/assets'

const LatestNews = () => {
  return (
    <>
    <style>
        {`
         .img-low {
        overflow: hidden;
        display: block;
        height: 550px; /* ✅ FIXED HEIGHT (adjust if needed) */
        
        `}
    </style>
        <div className='container mt-4'>
            <div className='row'>
                <div className='col text-center'>
                    <h1 className=' script-heading'>Latest News</h1>
                    <p className='main-heading'>Our Latest Wedding News</p>
                </div>
            </div>

            <div className='row'>
                {Latest.map((Latest , index) => (
                    <div className='col-lg-4 col-md-6 col-12' key={index}>
                            <div className='card'>
                            <img src={Latest.img} className='img-fluid img-low'/>
                        </div>
                        <div className='card-body text-center'>
                            <h5 className='text-content'>{Latest.date}</h5>
                            <h3 className='mt-3 lh-base text-content fs-3'>{Latest.Name}</h3>
                        </div>
                        </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default LatestNews