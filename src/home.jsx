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
import Template1 from '../src/templates/Intern/template1'
import Template2 from '../src/templates/Intern/template2'
import Template3 from '../src/templates/Intern/template3'
import Template4 from '../src/templates/Intern/template4'
import Template5 from '../src/templates/Intern/template5'
import Template6 from '../src/templates/Intern/template6'
import InternTemplates from './templates/Intern/internTemplates';
import MediumTemplates from './templates/medium/mediumTemplates';
import M_Template1 from './templates/medium/m_template1';
import M_Template2 from './templates/medium/m_template2';
import M_Template3 from './templates/medium/m_template3';
import M_Template4 from './templates/medium/m_template4';
import M_Template5 from './templates/medium/m_template5';
import M_Template6 from './templates/medium/m_template6';












const Home = () =>{
    const [navbar,setNavbar] = useState('d-none');
    const [burgerClick,setBurgerClick] = useState();
    const [toggle,setToggle] = useState(false);
    const [text,setText] = useState('open')

    

 
        const hideNavbar = () =>{
            setToggle(!toggle);
            setNavbar('d-none');
            setNavbar(' sm-navbar-hide d-sm-none')
            setBurgerClick('')

           
        }
    
      const handleToggle = () =>{ 
        setToggle(!toggle);
       
        if(toggle == false){
            setNavbar(`d-block d-sm-none`);
            setBurgerClick('line1_hide')
         
        }
        else{
            
            setNavbar('sm-navbar-hide d-sm-none')
            setBurgerClick('')
           
        }
}
return<>

 
    <BrowserRouter>
    <div className="burger d-block d-sm-none" onClick={handleToggle}>
            <div className={`line1 ${burgerClick}`}></div>
            <div className='line2 '></div>
            <div className="line3"></div>
        </div>

        <div className="">
             <div className={` sm-navbar-show ${navbar} ` }>
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
            <Route path="/templates/internTemplates" element={<InternTemplates />} />
            <Route path="/templates/mediumTemplates" element={<MediumTemplates />} />

            <Route path="/templates/internTemplates/template1" element={<Template1 />} />
            <Route path="/templates/internTemplates/template2" element={<Template2 />} />
            <Route path="/templates/internTemplates/template3" element={<Template3 />} />
            <Route path="/templates/internTemplates/template4" element={<Template4 />} />
            <Route path="/templates/internTemplates/template5" element={<Template5 />} />
            <Route path="/templates/internTemplates/template6" element={<Template6 />} />


            <Route path="/templates/mediumTemplates/m_template1" element={<M_Template1 />} />
            <Route path="/templates/mediumTemplates/m_template2" element={<M_Template2 />} />
            <Route path="/templates/mediumTemplates/m_template3" element={<M_Template3 />} />
            <Route path="/templates/mediumTemplates/m_template4" element={<M_Template4 />} />
            <Route path="/templates/mediumTemplates/m_template5" element={<M_Template5/>} />
            <Route path="/templates/mediumTemplates/m_template6" element={<M_Template6/>} />










            <Route />
        </Routes>
    </BrowserRouter>
</>

}

export default Home;