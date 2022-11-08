import { isSchema, number, string } from "joi";
import React,{useState} from "react";
import { useNavigate,Link,Outlet } from "react-router-dom";
import { useFormik } from "formik";
import Joi from "joi";
import * as yup from 'yup'



const SignUp = () =>{
    let navigate = useNavigate();
let alphabet = /^[A-za-z]+$/;
    let schema = yup.object( {
      name:yup.string().required('name is required field *').matches(alphabet,'please enter a valid Name'),
      email:yup.string().email('please enter a valid email').required('email is required field *'),
      password:yup.string().min(4).max(8).required('password is required field *')
    })

  
  const onSubmit = async (value,action) =>{
    await new Promise ((resolve) =>{setTimeout(resolve),1000;});
    action.resetForm();
    alert('registered successfully');
  }

const {values,touched,isSubmitting ,handleChange,handleSubmit,errors} = useFormik({
  initialValues:{
    name:'',
    phone:'',
    email:'',
    password:''
  },
  validationSchema:schema,
  onSubmit,
});



    return(
         <>
            <div className="register bg-dark">
               
                  <div className="forms signup border px-5 py-0">
                    <form   onSubmit={handleSubmit}>
                       <h3 className="text-center  mt-1 mb-1">Sign Up Today ...!</h3>
                     
                      <div className="form-group">
                        <label htmlFor="name" >Full Name</label>
                        <input value={values.name} onChange={handleChange}   type="text" id="name" className=" register-inputes" />
                        {/* {errors.phone && touched.phone &&  <small className="text-danger">{errors.phone}</small> } */}
                        {errors.name && touched.name &&  <small className="text-danger">{errors.name}</small> }
                      </div >

                     
                     
                      <div className="form-group">
                        <label htmlFor="email" className=" ">Email</label>
                         <input type="email" onChange={handleChange} value={values.email} id="email" className="register-inputes" />
                      {errors.email && touched.email &&  <small className="text-danger">{errors.email}</small> }
                      </div>

                       <div className="form-group">
                        <label htmlFor="password" className=" ">Password</label>
                        <input value={values.password} onChange={handleChange}  type="password"  id="password" className="register-inputes" />
                        {errors.password && touched.password  &&  <small className="text-danger">{errors.password}</small> }


                      </div>
                     
                       <div onClick={handleSubmit} className="btn w-100 btn-sm btn-outline-dark mt-3 ">Register </div>
                      

                       
                       <div className="mt-2">
                        <span >You already have account?</span>
                         <Link to="/logIn" onClick={()=>{
                          navigate('logIn');
                        }}>Log In</Link></div> 
                    </form>
                </div> 
                 
            </div>  
         </>
    )
}        

export default SignUp;