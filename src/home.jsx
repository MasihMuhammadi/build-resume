import React,{useState} from 'react'
import { Router,Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Resume from '../src/resume';
import { Route } from 'react-router-dom';


const Home = () =>{
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [location,setLocation] = useState('')
  const [linkedin,setLinkedin] = useState('')
  const [facebook,setFacebook] = useState('')
  const [github,setGithub] = useState('')
  const [phone,setPhone] = useState('')
  const [university,setUniversity] = useState('')
  const [skills,setSkills] = useState('');
  const [sName,setSName] = useState('')
  const [sUni,setSUni] = useState('')
  const [sskills,setSSkills] = useState('');
  const [showInputes,setShowInputes] = useState(true);
const [showResume,setShowResume] = useState(false);
const [exp,setExp] = useState('');
const [jobTitle,setJobTitle] = useState('');


 
  const enterName = (event) =>{
    setName(event.target.value)
  }
  const enterEmail = (event) =>{
    setEmail(event.target.value);
  }
  const enterLocation = (event) =>{
    setLocation(event.target.value)

  }
  const enterJobTitle = (event) =>{
    setJobTitle(event.target.value)
  }
  const enterLinkedin = (event) =>{
    setLinkedin(event.target.value)
  }
  const enterFacebook = (event) =>{
    setFacebook(event.target.value)
  }
  const enterGithub= (event) =>{
    setGithub(event.target.value)
  }
  const enterphone = (event) =>{
    setPhone(event.target.value)
  }
  const enterUni = (event) =>{
    setUniversity(event.target.value)
  
  }
  const enterSkills = (event) =>{
    setSkills(event.target.value)
  }

  const enterExp = (event) =>{
    setExp(event.target.value)
  }
   
  const clicked = (event) =>{  
    event.preventDefault();
    setShowResume(true)
    setShowInputes(false)

   
  }

  return(
    <>

{showInputes && <div className='container'>
   <input type="text" onChange={enterName} placeholder="enter your name" /> <br />
   <input type="text" onChange={enterJobTitle} placeholder="enter your  jobTitle" /><br />
   {/* <input type="text" onChange={enterUni} placeholder="enter university or school name" /><br />
   <input type="text" onChange={enterSkills} placeholder="enter your skills sperate by space" /><br />
   <input type="text" onChange={enterExp} placeholder="enter your  experience" /><br />*/}
   <input type="email" onChange={enterEmail} placeholder="enter your Email" /><br /> 
   <input type="text" onChange={enterLocation} placeholder="location:country,city" /><br />
   <input type="text" onChange={enterLinkedin} placeholder="enter your linkedin Url" /><br />
   <input type="text" onChange={enterFacebook} placeholder="enter your facebook username" /><br />
   <input type="text" onChange={enterGithub} placeholder="enter your github url" /><br />
   <input type="text" onChange={enterphone} placeholder="enter your phone number" /> <br />
   <input type="tel" />
   <button onClick={clicked}>ok</button>
</div>}

{showResume && <Resume name={name} skills={skills} university={university} experince={exp} jobTitle={jobTitle} 
email={email} location={location} linkedin={linkedin} facebook={facebook} phone={phone} github={github}/>}
  </>)
}
export default Home; 