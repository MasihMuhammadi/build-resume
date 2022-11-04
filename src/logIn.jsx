import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

const LogIn = () =>{
    let navigate = useNavigate();
    return <>
  <div className="register">
                <div className="box login-forms">
                  <div className="forms">
                  <form id="form">
                       <h3 className="pt-1 ps-5">Log In Now ...!</h3><br />
                      
                      <div className="form-group">
                        <label htmlFor="email" className="text-dark">Email</label> <input type="email" id="email" className="register-inputes" />
                      </div>
                       <div className="form-group">
                        <label htmlFor="password" className="text-dark">Password</label><input type="password" id="password"  className="register-inputes" />
                        </div>
                       <div className="form-group">
                        <div   className="mt-3 d-block btn btn-outline-dark" >Log In</div>
                        </div> 
                        <div className="form-group mt-3">
                        <lable>you haven't account?</lable>
                        <Link to="/signUp" onClick={()=>{
                          navigate('signUp');
                        }}>Sign Up</Link>
                        </div>
                    </form>
                  </div>
                    
                </div>    
            </div>  
        </>
}

export default LogIn;