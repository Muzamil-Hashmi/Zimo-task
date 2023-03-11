import React from 'react'

export default function Register() {
  return (
    <div>
      <div className="container  my-5 py-5">
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 d-flex justify-content-center">
                   <div className="card">
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password'/>
                    <input type="button" value="Register"   />
                   </div>
            </div>
        </div>
      </div>
    </div>
  )
}
