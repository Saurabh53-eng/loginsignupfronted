import React, { useState } from 'react'
import { CForm, CImage, CFormLabel, CFormInput, CFormCheck, CButton, CFormText } from '@coreui/react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/header.css'

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/signup')
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div>
        <div className='foo' >
          <div className="thumbnail">
            <CImage src={require('../images/bgimage.jpg')} style={{ width: "100%" }} />
          </div>
          <div className="d-flex flex-row-reverse docs-highlight d-flex align-items-center vh-100" style={{ width: "100%" }} >
            <CForm className='border border-primary' onSubmit={handleLogin} style={{ backgroundColor: "black", color: "white", width: "100%", height: "100%", alignContent: "end" }} >
              <div className="mb-3">
                <CFormLabel htmlFor="exampleInputEmail1">Email address</CFormLabel>
                <CFormInput type="email" onChange={onChange} value={credentials.email} name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <CFormText id="emailHelp" style={{ color: "white" }}>We'll never share your email with anyone else.</CFormText>
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleInputPassword1">Password</CFormLabel>
                <CFormInput type="password" onChange={onChange} value={credentials.password} name="password" id="exampleInputPassword1" />
              </div>
              <CFormCheck
                className="mb-3"
                label="Remeber me"
                onChange={(e) => {
                  console.log(e.target.value)
                }}
              />
              <Link to='/forgotpass' style={{ float: "right", color: "orange" }}>Forgot Your password?</Link>
              <CButton type="submit" color="primary">
                SIGN IN
              </CButton>
              <h4>Don't have an account <Link to={"/signup"}>Sign up</Link></h4>
            </CForm>
          </div>
        </div>
    </div>

  )
}

export default Login