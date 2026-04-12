import React from 'react'
import { products } from '../../assets/assets'

const Products = () => {
  return (
    <>
    <style>
      {`
      .img-low {
        overflow: hidden;
        display: block;
        height: 450px; /* ✅ FIXED HEIGHT (adjust if needed) */
        
      `}
    </style>
    <div className='container mt-5'>
      {/* Section Header */}
      <div className='row mb-4'>
        <div className='col text-center'>
          <p className='script-heading  '>Our Shop</p>
          <p className=' main-heading'>Special Products For You</p>
        </div>
      </div>

      {/* Product Grid */}
      <div className='row'>
        {products.map((product, index) => (
          <div className='col-12 col-md-6 col-lg-3 mb-4' key={index}>
            <div className='card border-0'>
              <img
                src={product.img}
                className='card-img-top img-fluid img-low'
                alt={product.name}
              />
              
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Products