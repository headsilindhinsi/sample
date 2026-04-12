import React from 'react'
import { MyContext } from '../context/ContextProvider';
import { useContext } from 'react';

const Buyer = () => {
  const { buyerData } = useContext(MyContext)
  return (
   
  
    <div className="container mt-5">
      <h2>All Orders</h2>

      <table className="table table-primary text-center align-middle">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Product Details</th>
            <th>Total</th>
            <th>Payment Details</th>
            
          </tr>
        </thead>

        <tbody>
      
         {
          buyerData.map((value , index) => {
            return(
              <tr key={index}>
                <td>{value.FullName}</td>
                <td>{value.Phone}</td>
                <td>{value.Street}</td>
                <td>{value.City}</td>
                <td>{value.State}</td>
                <td>{value.Zip}</td>
                <td>
  <div>
    <img
      src={value.ProductImage}
      alt="product"
      style={{ width: "60px", height: "60px", objectFit: "cover" }}
    />
    <p className="mb-0">{value.Product}</p>
  </div>
</td>

                <td>{value.Total}</td>
                <td>{value.Payment}</td>
              </tr>
            )
          })
         }
          
        </tbody>
      </table>
    </div>
  );
};



export default Buyer
