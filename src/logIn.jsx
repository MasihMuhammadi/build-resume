import { useFormik } from 'formik'
import { ref } from 'joi'
import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import * as yup from 'yup'
import { val_email, val_password } from './signUp'

const LogIn = (props) =>{
  


let value = val_email;
var message = 'incorrect'


let schema = yup.object( {
  email:yup.string().email('please enter a valid email').required('email is required field *').matches(value,message),
  password:yup.string().min(4).max(8).required('password is required field *').matches(val_password,"password is incorrect")
});
let navigate = useNavigate();

const onSubmit = () =>{

    console.log('submitted');
    console.log(values.email,":",values.password)
  console.log(val_email,":", val_password)
   
  }
  

  let {values,handleChange,errors,handleSubmit,touched} = useFormik({
    initialValues:{
      email:"",
        password:"",
      },
      validationSchema:schema,
      onSubmit,
    })
    
    


    return <>
        <div className="register bg-dark">
             <div className="box-login">   
                <div className="forms login px-3 px-lg-5 py-0">
                    <form >
                       <h3 className="text-center text-dark mt-2">Log In Now...!</h3><br />

                      <div className="form-group">
                        <label htmlFor="email" className="" >Email</label>
                         <input onChange={handleChange} value={values.email} type="email" id="email" className="register-inputes" />
                        {errors.email && touched.email && <small className="text-danger">{errors.email}</small>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="password" className="" >Password</label> 
                        <input  onChange={handleChange} value={values.password}type="password" id="password" className="register-inputes" />
                        {errors.password && touched.password && <small className="text-danger">{errors.password}</small>}

                      </div>
                      <div onClick={handleSubmit} className="btn btn-sm mt-3 d-block btn-outline-dark " >Log In </div>

  
                       
                        <div className="mt-2">
                        <span >You haven't account?</span>
                         <Link to="/signUp" onClick={()=>{
                          navigate('signUp');
                        }}>Sign Up</Link></div> 
                    </form>

                  
                
                </div>   
              </div>
            </div>  
        </>
}

export default LogIn;