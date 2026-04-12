import React from 'react'
import { Photos } from '../../assets/assets'


const PhotoGrapy = () => {
  return (
    <>
   <style>
{`
  .Image-container {
    position: relative;
    overflow: hidden;
    display: inline-block;
  }

  .image-Zoom {
    width: 100%;
    transition: transform 0.4s ease;
  }

  .Image-container:hover .image-Zoom {
    transform: scale(1.1);
  }

  .overlay-text {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    
    /* Add spacing from all corners */
    padding: 20px 15px;  /* 20px top/bottom, 15px left/right */

    background: rgba(0, 0, 0, 0.6);
    color: white;
    text-align: center;
    border-radius: 8px;   /* optional, for rounded corners */

    opacity: 0;
    transform: translateY(100%);
    transition: all 0.4s ease;
  }

  .Image-container:hover .overlay-text {
    opacity: 1;
    transform: translateY(0);
  }
    .image-Zoom {
  width: 100%;
  height: 300px; /* 👈 set same height for all */
  object-fit: cover; /* 👈 keeps image ratio & crops nicely */
  transition: transform 0.4s ease;
}

.Image-container {
  position: relative;
  overflow: hidden;
  display: block;
  height: 100%;
}

`}
</style>
         <div className='container mt-5'>
            <div className='row mt-5'>
            {Photos.map((Photos , index) => (
                <div className='col-lg-4 col-md-6 col-12 mt-4' key={index} >
                    <div className='Image-container'>
                        <img src={Photos.img} className='img-fluid image-Zoom'/>
                    
                     <div className='overlay-text' >
                       
                        <p className='text-content text-light'>{Photos.name}</p>
                        <p className='script-heading text-light'>{Photos.date}</p>
                        </div>
                     </div>
                   
                
                </div>
            ))}
            </div>
         </div>
    </>
  )
}

export default PhotoGrapy