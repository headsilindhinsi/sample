import React from 'react'
import { Blog } from '../../assets/assets'

const BlogHeader = () => {
  return (
    <>

    <style>
      {`

        /* ✅ GLOBAL FIX FOR NAVBAR OVERLAP */
body {
  padding-top: 80px;

      }
.blog-section {
  padding: 60px 0;
}

/* Image */
.blog-image img {
  width: 100%;
  border-radius: 10px;
}

/* Center content */
.blog-content {
  max-width: 800px;
  margin: 30px auto 0;
}

/* Title */
.blog-title {
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
}

/* Paragraph */
.blog-para {
  font-size: 16px;
  color: #666;
  line-height: 1.7;
}

      `}
    </style>

  
    <div className="blog-section container">

      {Blog.map((item, index) => (
        <div className="blog-item text-center" key={index}>

          {/* Image */}
          <div className="blog-image">
            <img src={item.img} className="img-fluid" alt="" />
          </div>

          {/* Content */}
          <div className="blog-content mx-auto">

            <h1 className="blog-title script-heading">{item.text}</h1>

            <p className="blog-para text-content fs-5">
              {item.para}
            </p>

          </div>

        </div>
      ))}

    </div>
    </>
  )
}

export default BlogHeader
