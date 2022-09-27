import React,{useEffect, useState} from 'react'
import { BrowserRouter, Router,Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Resume from './resume';
import Template1 from './template1';
import Template2 from './template2'
import Templates from './templates'


const Home = () =>{
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [location,setLocation] = useState('')
  const [education,setEducation] = useState('')
  const [startDate,setStartDate] = useState('');
  const [endDate,setEndDate] = useState('');
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
  const [language,setLanguage] = useState();
  const [language2,setLanguage2] = useState();
  const [level,setLevel] = useState();
  const [level2,setLevel2] = useState();
  const [projects,setProjects] = useState('');
  const [profPicture,setProfPicture] = useState('');
  const [intrests,setIntrests] = useState('');
  const [showTemplate2,setShowTemplate2] = useState(false);
  const [addLanguage,setAddLanguage] = useState()

  const enterName = (event) =>{
    setName(event.target.value)
  
  }
  const enterEmail = (event) =>{
    setEmail(event.target.value);
  }
  const enterLocation = (event) =>{
    setLocation(event.target.value)
  }
  const enterStartDate = (event) =>{
    setStartDate(event.target.value)
  }
  const enterEndDate = (event) =>{
    setEndDate(event.target.value)
  }
  const enterEducation = (event) =>{
    setEducation(event.target.value)
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
   const enterLanguage = (event) =>{
    setLanguage(event.target.value)
   }
   const enterLevel = (event) =>{
    setLevel(event.target.value)
   }
   const enterProjects = (event) =>{
    setProjects(event.target.value)
   }
   const enterProfPicture = (event) =>{
    const [p] = event.target.files;
    console.log(p)
   }
   const enterIntrests = (event) =>{
    setIntrests(event.target.value)
  }
  const enterNewLanguage = (event) =>{
    setLanguage2(event.target.value)
  }
  const enterNewLevel = (event) =>{
    setLevel2(event.target.value)
  }
  
  const newLanguage = () =>{
    setAddLanguage(<div><input type="text" placeholder='enter another language' onChange={enterNewLanguage} />  
    <input type="text" className="ms-3 mt-1" placeholder="Enter the level:" onChange={enterNewLevel}/></div>)
  }
  
  const clicked = (event) =>{  
    event.preventDefault();
    setShowResume(true)
    setShowInputes(false)      
  }
  const clickedTemplate2 = (event) =>{
    setShowTemplate2(true)
    setShowInputes(false)
  }

  return(
    <>

    
    
{showInputes && <div className='container'>
  <div className='inputes row'>
  
  <div className="col">
  Name: <br /><input type="text" onChange={enterName} placeholder="enter your name" required /> <br />
  Job Title:<br />  <input type="text"  onChange={enterJobTitle} placeholder="enter your  jobTitle" /><br />
   Skills:<br /> <input type="text" onChange={enterSkills} placeholder="enter skills sperate by ," /><br />
  Intrest: <br /><input type="text" onChange={enterIntrests} placeholder="enter intrests sperate by ," /><br />
  Experince: <br /> <textarea  onChange={enterExp}/><br />
  Education:<br /> <textarea onChange={enterEducation}></textarea><br />
  <input type="number"  min="2000" max="2022" onChange={enterStartDate} placeholder="start Date"/>
  <input className='ms-3' type="number" min="2004" max="2025" onChange={enterEndDate} placeholder="end Date"/><br />
  

  </div>
  <div className="col">
  Linkdenin Url:<br /> <input type="text" onChange={enterLinkedin} placeholder=" your linkedin Url" /><br />
   Facebook UserName:<br /> <input type="text" onChange={enterFacebook} placeholder=" your facebook username" /><br />
  Github UserName: <br /> <input type="text" onChange={enterGithub} placeholder=" your github username" /><br />
  Phone:<br />  <input type="text" onChange={enterphone} placeholder=" your phone number" /> <br />
  Email:<br /> <input type="email" onChange={enterEmail} placeholder=" your Email" /><br /> 
  Address:<br />  <input type="text" onChange={enterLocation} placeholder="location:city,country" /><br />
 Projects: <br /><input type="text" onChange={enterProjects} placeholder="Projects sparate by ," /><br />
<br />
   <input type="text" placeholder="enter your language" onChange={enterLanguage} />
  <input type="text" placeholder='enter the level' onChange={enterLevel} className='ms-3' /><br />
  {addLanguage}<br />
  <div className="btn btn-small btn-outline-success border-none" onClick={newLanguage}>+</div>
   <br /><br />
    
  <input type="file" multiple={false} onChange={enterProfPicture} /><br />
<br />
<button  className="btn btn-success" onClick={clicked}>Template 1</button> 
<button className="btn btn-success mx-2" onClick={clickedTemplate2}>Template2</button>
  </div>
  

</div>
  </div>
  }
{showResume && <Resume name={name} skills={skills} university={university} experince={exp} jobTitle={jobTitle} 
email={email} location={location} linkedin={linkedin} facebook={facebook} phone={phone} github={github}  education={education} startDate={startDate} endDate={endDate}

language={language} level={level} projects={projects} profPicture={profPicture} intrests={intrests}
/>}
{showTemplate2 && <Template2  name={name} skills={skills} university={university} experince={exp} jobTitle={jobTitle} 
email={email} location={location} linkedin={linkedin} facebook={facebook} phone={phone} github={github}  education={education} startDate={startDate} endDate={endDate}

language={language} level={level} projects={projects} profPicture={profPicture} intrests={intrests}

language2={language2} level2={level2}
/>}
  </>)
}
export default Home; 