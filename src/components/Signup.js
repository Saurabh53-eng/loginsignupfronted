import React, { useState } from 'react'
import { CForm, CImage, CFormLabel, CFormInput, CFormCheck, CButton, CFormText } from '@coreui/react'
import { Link, useNavigate} from 'react-router-dom'
import '../css/header.css'
const Signup = () => {
  const [credentials, setCredentials] = useState({ fname: "",mname:"",lname:"", email: "", password: "", cpassword: "" })
  let navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    const password=credentials.password;
    const cpassword=credentials.cpassword;
    console.log(password);
    if (password !== cpassword) {
      alert('password did not match')
      navigate('/signup')
  }
  else{
    setCredentials({fname: "", mname:"",lname:"", email: "", password: "", cpassword: ""})
    navigate('/')
  }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
}
  return (
    <div >
      <div className='foo'>
      <div className="thumbnail">
      <CImage src={require('../images/bgimage.jpg')} style={{width:"100%"}} />
      </div>
      <div className="d-flex flex-row-reverse docs-highlight d-flex align-items-center vh-100" style={{width:"100%"}} >
        <CForm className='border border-primary' style={{ backgroundColor: "black", color: "white", width: "100%", height: "100%", alignContent: "end" }} onSubmit={handleSubmit}>
          <div className="mb-3">
            <CFormLabel  >First Name</CFormLabel>
            <CFormInput placeholder='First Name' onChange={onChange} type="text" value={credentials.fname}  name='fname' id="fname" />
            <CFormLabel  >Middle Name</CFormLabel>
            <CFormInput placeholder='Middle Name' onChange={onChange} type="text" value={credentials.mname} name='mname' id="mname" />
            <CFormLabel  >Last Name</CFormLabel>
            <CFormInput placeholder='Last Name' onChange={onChange} type="text" value={credentials.lname} name='lname' id="lname" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="exampleInputEmail1">Email address</CFormLabel>
            <CFormInput type="email" id="exampleInputEmail1"  onChange={onChange} value={credentials.email} name="email" aria-describedby="emailHelp" />
            <CFormText id="emailHelp" style={{color:"white"}}>We'll never share your email with anyone else.</CFormText>
          </div>
          <div>
            <CFormLabel htmlFor="exampleInputPassword1">Password</CFormLabel>
            <CFormInput type="password" name='password' onChange={onChange} value={credentials.password} id="exampleInputPassword1" />
            <CFormLabel htmlFor="exampleInputPassword1"> Confirm Password</CFormLabel>
            <CFormInput type="password" name='cpassword' onChange={onChange} value={credentials.cpassword} id="exampleInputPassword2" />
          </div>
          <CFormCheck
            className="mb-3"
            label="Remeber me"
            onChange={(e) => {
              console.log(e.target.value)
            }}
          />
          <CButton type="submit" color="primary" >
            SIGN UP
          </CButton>
          <h4>Already Signup <Link to={"/"}>Sign in</Link></h4>
        </CForm>
      </div>
      </div>
    </div>
  )
}

export default Signup