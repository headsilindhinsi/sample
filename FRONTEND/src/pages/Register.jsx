import React from 'react'
import { backgroundImg } from '../assets/assets'
import { useContext } from 'react'
import { MyContext } from '../context/ContextProvider'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const {  firstName ,setFirstName, lastName , setLastName , email , setEmail, password , setPassword, RegisterSubmitFun } = useContext(MyContext)
  return (
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
        REGISTER HERE
      </h2>

      <form onSubmit={RegisterSubmitFun}>
        <div className="floating-group">
          <input type="text" required value={firstName} onChange={e => setFirstName(e.target.value)}/>
          <label>Enter Your First Name</label>
        </div>

        <div className="floating-group">
          <input type="text" required value={lastName} onChange={e => setLastName(e.target.value)}/>
          <label>Enter Your Last Name</label>
        </div>

        <div className="floating-group">
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)}/>
          <label>Email</label>
        </div>

        <div className="floating-group">
          <input type="text" required value={password} onChange={e => setPassword(e.target.value)}/>
          <label>Enter Your Password</label>
        </div>

        <button className="submit-btn mt-4 w-100">
          Register
        </button>

        
<p className="text-center mt-3">
  Already have an account?{" "}
  <span 
    className="signin-link"
    onClick={() => navigate('/Login')} style={{cursor : "pointer"}}
  >
    Sign In
  </span>
</p>
      </form>

    </div>
  </div>
</div>

  )
}

export default Register
