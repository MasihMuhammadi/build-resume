import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

const LogIn = () =>{
    let navigate = useNavigate();
    return <>
        <div className="register bg-dark">
                
                <div className="forms login  px-5 py-3">
                    <form>
                       <h3 className="text-center text-dark mt-2">Log In Now...!</h3><br />
                  
                      <div className="form-group">
                        <label htmlFor="email" className=" ">Email</label> <input type="email" id="email" className="register-inputes" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password" className=" ">Email</label> <input type="password" id="password" className="register-inputes" />
                      </div>
                      <div className="btn btn-sm mt-3 d-block btn-outline-dark ">Register </div>

                        <div className="form-group mt-5">
                        <lable>you haven't account? </lable>
                        <Link to="/signUp" onClick={()=>{
                          navigate('signUp');
                        }}>Log In</Link>
                        </div>
                    </form>
                
                </div>   
            </div>  
        </>
}

export default LogIn;