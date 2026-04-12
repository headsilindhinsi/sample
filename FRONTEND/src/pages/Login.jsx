import React from 'react'
import { backgroundImg } from '../assets/assets'
import { useContext } from 'react'
import { MyContext } from '../context/ContextProvider'

const Login = () => {

  const {LoginSubmitFun, loginEmail , setLoginEmail, loginPassword , setLoginPassword,} = useContext(MyContext)
  return (
    <>
         <div className="container-fluid p-0 position-relative">
        
          {/* Top Heading */}
          <div className="top-heading text-center">
            <h1>Wedding Collections</h1>
          </div>
        
          {/* Background */}
          <img 
            src={backgroundImg} 
            className="w-100 vh-100 object-fit-cover" 
            alt="bg"
          />
        
          {/* Overlay */}
          <div className="form-overlay d-flex justify-content-center align-items-center">
        
            <div className="arch-form p-4 p-md-5">
        
              <h2 className="form-title text-center mb-4">
                LOGIN HERE
              </h2>
        
              <form onSubmit={LoginSubmitFun}>
                <div className="floating-group">
                  <input type="email" required value={loginEmail} onChange={e => setLoginEmail(e.target.value)}/>
                  <label>Email</label>
                </div>
        
                <div className="floating-group">
                  <input type="text" required value={loginPassword} onChange={e => setLoginPassword(e.target.value)}/>
                  <label>Enter Your Password</label>
                </div>
        
                <button className="submit-btn mt-4 w-100">
                  Confirm
                </button>
              </form>
        
            </div>
          </div>
        </div>
    </>
  )
}

export default Login