import react,{useEffect,useState} from 'react';
import {Routes,Route, Link, Outlet,BrowserRouter} from 'react-router-dom'
import SignUp from './signUp';
import LogIn from './logIn';
import NotFound from './notFound';
import CustomResume from './customResume';
import CreatResume from './createResume';   
import NavLinks from './navLinks';
import AnotherHome from './anotherHome';
import Contact from './contact'
import Error from './error'
import Templates from './templates';
import Template1 from '../src/templates/template1'
import Template2 from '../src/templates/template2';
import Template3 from '../src/templates/template3';
import Template4 from '../src/templates/template4';



const Home = () =>{
    const [navbar,setNavbar] = useState('d-none');
    const [burgerClick,setBurgerClick] = useState();
    const [toggle,setToggle] = useState(false);
    const [text,setText] = useState('open')

    

 
        const hideNavbar = () =>{
            setToggle(!toggle);
            setNavbar('d-none');
            setNavbar(' sm-navbar-hide d-sm-none')
            setBurgerClick('line1-hide');
        }
    
      const handleToggle = () =>{ 
        setToggle(!toggle);
       
        if(toggle == false){
            setNavbar(`d-block d-sm-none`);
            setBurgerClick('line1-show');
            
        }
        else{
            
            setNavbar('sm-navbar-hide d-sm-none')
            setBurgerClick('line1-hide');
        }
}
return<>

 
    <BrowserRouter>
    <div className="burger d-block d-sm-none" onClick={handleToggle}>
            <div className={`line1 ${burgerClick}`}></div>
            <div className='line2'></div>
            <div className="line3"></div>
        </div>

        <div>
             <div className={`sm-navbar-show ${navbar} ` }>
            <Link className="sm-links mx-3 d-sm-none mt-5  " onClick={hideNavbar} to="/">Home</Link>
            <Link className="sm-links mx-3  d-sm-none mt-5  " onClick={hideNavbar} to="signUp">Sign Up</Link>
            <Link className="sm-links mx-3  d-sm-none mt-5  " onClick={hideNavbar} to="logIn">Log In</Link>
            <Link className="sm-links mx-3  d-sm-none mt-5  " onClick={hideNavbar} to="templates"> Resume</Link>
            <Link className="sm-links mx-3  d-sm-none mt-5  " onClick={hideNavbar} to="contact"> Contact</Link>
            
            </div> 
        </div>
     <NavLinks />
        <Routes>
            <Route path="/" element={<AnotherHome />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="logIn" element={<LogIn />}/>
            <Route path="logIn" element={<LogIn />}/>
            <Route path="templates" element={<Templates />} />
            <Route path="creatResume" element={<CreatResume />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
            <Route path="/templates/template1" element={<Template1 />} />
            <Route path="/templates/template2" element={<Template2 />} />
            <Route path="/templates/template3" element={<Template3 />} />
            <Route path="/templates/template4" element={<Template4 />} />



            <Route />
        </Routes>
    </BrowserRouter>
</>

}

export default Home;