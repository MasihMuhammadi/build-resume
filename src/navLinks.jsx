import React from 'react'
import {Link,Route,Routes,Router} from 'react-router-dom'
import SignUp from './signUp'
import LogIn from './logIn'
import CreatResume from './createResume'
import CustomResume from './customResume'
import AnotherHome from './anotherHome'
import Home from './home'
import Templates from './templates'
const NavLinks = () =>{
    return<>
         
        
                <ul className="nav-links ">
                <li className="">
                        <Link className="navs d-none d-sm-block " to="/">Home</Link>
                     </li> 
                    <li className="mx-5">
                        <Link className="navs d-none d-sm-block " to="templates">Templates
                        </Link>
                    </li> 
                    <li className="me-5">
                        <Link className=" navs d-none d-sm-block " to="Contact">Contact</Link>
                    </li> 
                    <li className="me-5">
                        <Link className="navs d-none d-sm-block " to="signUp">Sign Up</Link>
                     </li> 
                    <li>
                        <Link  className="navs d-none d-sm-block" to="logIn">Log In</Link>
                    </li>  
            
            </ul>
            
            

    </>
}
export default NavLinks;