import React from "react";
import { useNavigate,Link,Outlet } from "react-router-dom";

const SignUp = () =>{
    let navigate = useNavigate();
    return(
         <>
            <div className="register bg-dark">
               
                  <div className="forms signup border px-5 py-3">
                    <form >
                       <h3 className="text-center  mt-2">Sign Up Today ...!</h3><br />
                      <div className="form-group">
                        <label htmlFor="FullName" className=" ">Full Name</label><input type="text" id="FullName" className=" register-inputes" />
                      </div >
                       <div className="form-group">
                        <label htmlFor="phone" className=" ">Phone </label><input type="phone" id="phone" className=" register-inputes" />
                       </div>
                      <div className="form-group">
                        <label htmlFor="email" className=" ">Email</label> <input type="email" id="email" className="register-inputes" />
                      </div>
                       <div className="form-group">
                        <label htmlFor="password" className=" ">Password</label><input type="password"  id="password" className="register-inputes" />
                        </div>
                       <div className="form-group">
                       <div className="btn btn-sm d-block btn-outline-dark mt-3 ">Register </div>
                        </div> 
                        <div className="form-group mt-3">
                        <lable>you already registered?</lable>
                        <Link to="/logIn" onClick={()=>{
                          navigate('logIn');
                        }}>Log In</Link>
                        </div>
                    </form>
                </div> 
                 
            </div>  
         </>
    )
}        

export default SignUp;