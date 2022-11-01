import React from "react";
import { useNavigate,Link,Outlet } from "react-router-dom";

const SignUp = () =>{
    let navigate = useNavigate();
    return(
         <>
            <div className="register">
                <div className="forms">
                    <form >
                       <h3 className="pt-2 ps-5">Sign Up Today ...!</h3><br />
                      <div className="form-group">
                        <label htmlFor="FullName" className="text-dark">Full Name</label><input type="text" id="FullName" className=" register-inputes" />
                      </div >
                       <div className="form-group">
                        <label htmlFor="phone" className="text-dark">Phone </label><input type="phone" id="phone" className=" register-inputes" />
                       </div>
                      <div className="form-group">
                        <label htmlFor="email" className="text-dark">Email</label> <input type="email" id="email" className="register-inputes" />
                      </div>
                       <div className="form-group">
                        <label htmlFor="password" className="text-dark">Password</label><input type="password"  id="password" className="register-inputes" />
                        </div>
                       <div className="form-group">
                        <div   className="mt-5 d-block btn btn-outline-dark" >Register</div>
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