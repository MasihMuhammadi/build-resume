
  import React,{useState} from "react"
  import * as yup from 'yup'
  import { useFormik } from "formik";
  import jsPDF from "jspdf";
  import Inputes from "../inputes";
  // import { values } from "../inputes";



const Template6 = () =>{

  const [name,setName] = useState('');
  const [jobTitle,setJobTitle] = useState('');
  const [summery,setSummery] = useState('');
  const [experience,setExperience] = useState('');
  const [post,setPost] = useState('');
  const [startDate,setStartDate] = useState('');
  const [endDate,setEndDate] = useState('');
  const [university,setUniversity] = useState('');
  const [faculty,setFaculty] = useState('');
  const [degree,setDegree] = useState('');
  const [startUni,setStartUni] = useState('');
  const [endUni,setEndUni] = useState('');
  const [skills,setSkills] = useState('');
  const[phone,setPhone] = useState();
  const[linkedin,setLinkedin] = useState();
  const [email,setEmail] = useState();
  const [lastName,setLastName]  = useState();
  const [language,setLanguage] = useState('');
  const [language_level,setLanguage_level] = useState('');
  const [NewLanguage,setNewLanguage] = useState([]);
  const [NewLanguage_level, setNewLanguage_level] = useState('');
  const [bodyColor,setBodyColor] = useState('')
  const [bodyFontColor,setBodyFontColor] = useState('')
  const [titleFontColor,setTitleFontColor] = useState('');
  const [headerColor,setHeaderColor] = useState('');
  const [showColores,setShowColores] = useState('d-none');
  const [image,setImage] = useState();
  const [showLive,setShowLive] = useState('d-none d-lg-block');
  const [project,setProject] = useState('');
  const [interests,setInterest] = useState('');
  const [address,setAddress] = useState('');
  const [DoB,setDob]= useState('');
 
 
 
 
 
  const showData =(data) =>{
   setName(data.name);
   setJobTitle(data.jobTitle);
   setSummery(data.summery);
   setExperience(data.experince);
   setPost(data.post);
   setStartDate(data.startDate);
   setEndDate(data.endDate);
   setUniversity(data.university);
   setFaculty(data.faculty);
   setDegree(data.degree);
   setStartUni(data.startUni);
   setEndUni(data.endUni);
   setSkills(data.skills);
   setPhone(data.phone);
   setEmail(data.email);
   setLinkedin(data.linkedin)
   setProject(data.project);
   setInterest(data.interest);
   setLanguage(data.language);
   setLanguage_level(data.language_level);
   setBodyColor(data.bodyColor);
   setBodyFontColor(data.bodyFontColor);
   setHeaderColor(data.headerColor);
   setTitleFontColor(data.titleFontColor);
   setInterest(data.interests)
 
 
  }
 
  const showProf = (img) =>{
   setImage(img)
 }


return(
  <>
  <div className="row bg-dark">
    <div className='col'>
   <Inputes  onChange={showData} onClick={showProf}/>
    </div>
  

   <div className={` col ${showLive}`}>
    <div className='template2 mx-2'>
    <div className="row  pure-cv p-2" id="full_CV"style={{backgroundColor:`${bodyColor}`,color:`${bodyFontColor}`}}>
     <div className="header-6 row border-bottom border-primary">
      
      <div className="col-4">
          <h4 className="name-6">{name}</h4>
          <h6>{jobTitle}</h6>
          <p>{summery}</p>
      </div>
      <div className="col-3">
      <img src={image} className="prof6 mt-3 ms-2" width="150" height="200"  />

      </div>
      <div className="col-5">
            <p className="px-1 d-inline"> {phone}</p>  
            <p className="px-1 d-inline"> {email}</p>
            <p className="px-1 ">{linkedin}</p>
      </div>
  </div>
  
      <div className="col-6 one" >

      <h5 className="mt-4 " style={{color:`${titleFontColor}`,borderLeft:`10px solid ${titleFontColor}`,fontWeight:`bold`,paddingLeft:`10px`}}>Work Experience</h5>
          <p>{experience}</p>
          <p>{post}</p>
          <p>{startDate} - {endDate}</p>
          <p>descripton</p>


         
          <h4 className="mt-4" style={{color:`${titleFontColor}`,borderLeft:`10px solid ${titleFontColor}`,fontWeight:`bold`,paddingLeft:`10px`}}>Language</h4>
           {[language.split(',').map((lang,index) => <li className="mx-2" key={index}>{lang} / {language_level}</li>)]}
           {[NewLanguage.map((lang,index) => <li className="mx-2" key={index}>{lang} / {NewLanguage_level[index]}</li>)]}

           <h4 className="mt-4" style={{color:`${titleFontColor}`,borderLeft:`10px solid ${titleFontColor}`,fontWeight:`bold`,paddingLeft:`10px`}}>Interests</h4>
           {[interests.split(',').map((interest,ind) =><span className={`mx-1 `} style={{border:`1px solid ${titleFontColor}`,borderRadius:`3px`,padding:'2px',color:`${titleFontColor}`}} key={ind}>{interests}</span>)]} 
        </div>

      <div className="col-6 mt-2 two px-3">
    
      <h4 className="mt-4 " style={{color:`${titleFontColor}`,borderLeft:`10px solid ${titleFontColor}`,fontWeight:`bold`,paddingLeft:`10px`}}>Skills</h4>
      {[skills.split(',').map((skill,ind) =><span className="mx-1 badge  bg-primary" key={ind}>{skill}</span>)]} 


        <h4 className="mt-5 " style={{color:`${titleFontColor}`,borderLeft:`10px solid ${titleFontColor}`,fontWeight:`bold`,paddingLeft:`10px`}}>Education</h4>
        <b>{faculty}</b> at {university} in {degree} <br />
          <p>{`${startUni} - ${endUni}`}</p>

        <h4 className="mt-4 " style={{color:`${titleFontColor}`,borderLeft:`10px solid ${titleFontColor}`,fontWeight:`bold`,paddingLeft:`10px`}}>Projects</h4>
          <a href={`${project}`}>{project}</a>
          
      </div>

    </div>
</div>

  </div>
     
</div> 


  </>
)
}

export default Template6;