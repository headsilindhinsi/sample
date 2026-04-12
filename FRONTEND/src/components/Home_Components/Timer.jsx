import React from 'react'
import { cards } from '../../assets/assets'


const Timer = () => {
  return (
    <>
    
       
       <div className="container">
       <div className="row">
       {cards.map((cards , index) => (
        <div className="col-lg-3 col-md-6 col-sm-12" key={index}> 
        <img src= {cards.img} className="img-fluid"/>
         </div>
       ))}
      
 </div>
</div>
    </>
  )
}

export default Timer