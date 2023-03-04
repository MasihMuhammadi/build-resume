
  import React,{useState} from "react"
  import * as yup from 'yup'
  import { useFormik } from "formik";
  import jsPDF from "jspdf";
import Inputes from "../inputes";




const Template5 = () =>{

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
  const [interest,setInterest] = useState('');
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
 
 
  }
 
  const showProf = (img) =>{
   setImage(img)
 }

  
  return(
    <>
  
    <div className='row bg-dark'>
      <div className='col'>
         <Inputes  onChange={showData} onClick={showProf}/>
      </div>
    </div>
 

 <div className={`col ${showLive}`}>
    <div className="template2 mx-2" >

      <div className="row  p-3  pure-cv" id="full_CV" style={{backgroundColor:`${bodyColor}`, color:`${bodyFontColor}`}}>
        <div className="col-6 one" >
       
          <div className="  ps-2  pt-4">
        <img src={image} className="prof4 mt-3 ms-2" width="150" height="200"  />
            
          </div>
            
          <h4 className="mt-4 mx-2" style={{color: titleFontColor}}>summery</h4>
          <p className="mx-2">{summery }</p> 

            <h4 className="mt-4 mx-2" style={{color:`${titleFontColor}`}}>Skills</h4>
            {[skills.split(',').map((skill,ind) =><span className="mx-1 badge  bg-primary" key={ind}>{skill}</span>)]} 

           
            <h4 className="mt-4 mx-2" style={{color:`${titleFontColor}`}}>Language</h4>
             {[language].map((lang,index) => <li className="mx-2" key={index}>{lang} / {language_level}</li>)}
             {[NewLanguage.map((lang,index) => <li className="" key={index}>{lang} / {NewLanguage_level[index]}</li>)]}
            

          </div>

        <div className="col-6 mt-2 two px-3">

          <h2 className="mt-4 text-capitalize " style={{color: titleFontColor}}>{name}</h2>
          <h2 className="mt-4 text-capitalize d-inline mx-1" style={{color: titleFontColor}}>{lastName}</h2>
        
          <h4 className="mt-5 " style={{color:`${titleFontColor}`}}>Education</h4>
            {university} at {faculty} in {degree} <br />
            <p>{`${startUni} - ${endUni}`}</p>



          <h4 className="mt-4 " style={{color: titleFontColor}}>Experience</h4>
            <p>{experience}</p>
            <p>{post}</p>
            <p>{startDate} - {endDate}</p>

        </div>

      </div>


    </div>
  </div>



  </>)
}

export default Template5;