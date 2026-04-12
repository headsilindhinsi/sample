import React from 'react'

const Form = () => {

  const inputStyle = {
    height: '55px',
    borderRadius: '6px',
    border: '1px solid #ddd',
    padding: '10px'
  }

  const textareaStyle = {
    borderRadius: '6px',
    border: '1px solid #ddd',
    padding: '10px'
  }

  const buttonStyle = {
    backgroundColor: '#9b7aa5',
    color: '#fff',
    padding: '15px 40px',
    border: 'none',
    borderRadius: '4px',
    fontWeight: '500',
    letterSpacing: '1px'
  }

  return (
    <>
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-md-8 mx-auto text-center">
            <h2 className="fw-bold">Have Any Question?</h2>
            <p className="text-muted">
              Customer Success agents have the sole goal of making you successful! 
              Our support team works 24/7 to help you.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
          <div className="p-4" style={{   background: '#f4f0f0',  borderRadius: '12px',  boxShadow: '0 10px 30px rgba(0,0,0,0.08)'}}>

              <form>

                {/* Row 1 */}
                <div className="row mb-3">
                  <div className="col-md-6 mb-3">
                    <input type="text" placeholder="Name" className="form-control" style={inputStyle} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input type="email" placeholder="Email" className="form-control" style={inputStyle} />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="row mb-3">
                  <div className="col-md-6 mb-3">
                    <input type="text" placeholder="Phone" className="form-control" style={inputStyle} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input type="date" className="form-control" style={inputStyle} />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="row mb-3">
                  <div className="col-md-6 mb-3">
                    <select className="form-control" style={inputStyle}>
                      <option>Number Of Guests</option>
                      <option>50</option>
                      <option>100</option>
                      <option>200+</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <select className="form-control" style={inputStyle}>
                      <option>Meal Preferences</option>
                      <option>Veg</option>
                      <option>Non-Veg</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-4">
                  <textarea 
                    rows="6" 
                    placeholder="Your Note..." 
                    className="form-control"
                    style={textareaStyle}
                  ></textarea>
                </div>

                {/* Button */}
                <div className="text-center">
                  <button type="submit" style={buttonStyle}>
                    SEND AN INQUIRY
                  </button>
                </div>

              </form>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Form
