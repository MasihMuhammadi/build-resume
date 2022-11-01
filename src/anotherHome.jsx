import React,{useState,useEffect} from 'react'
import {Link,Route,Routes} from 'react-router-dom'
import SignUp from './signUp';
import LogIn from './logIn';
import NotFound from './notFound';
import CustomResume from './customResume';
import CreatResume from './createResume';   
import NavLinks from './navLinks';

const AnotherHome = () =>{

    const[build,setBuild] = useState(<span className="build">Build Your Resume</span>);
    const [choose,setChoose] = useState(<span className="choose"> Choose Your Template </span>);

        
 
    
    return(<>
    <div className='wallpaper'>


        <Link to="/creatResume" className="getStarted float-sm-end">Get Started</Link>

    
            <h4 className='bio1'>build Your Resume</h4>
            {/* <h4 className="bio2">{choose}</h4> */}
        

        {/* <img className='mockup' src="mockup1.jpg" />
        <img className='mockup' src="mockup2.jpg" /> */}
   </div>
    
    </>
    )
    

    
}

export default AnotherHome;