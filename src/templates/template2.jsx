
  import React,{useState} from "react"
  import * as yup from 'yup'
  import { useFormik } from "formik";
  import jsPDF from "jspdf";
import Inputes from "../inputes";



const Template2 = () =>{
  
   
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
 const [headerColor,setHeaderColor] = useState('');
 const [showColores,setShowColores] = useState('d-none');
 const [image,setImage] = useState();
 const [showLive,setShowLive] = useState('d-none d-lg-block');
 const [project,setProject] = useState('');
 const [interest,setInterest] = useState('');


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

 }

 const showProf = (img) =>{
  setImage(img)
}
 return(<>
<div className='row bg-dark'>
  <div className="col-sm">
    <Inputes  onChange={showData} onClick={showProf}/>
  </div>

  <div className={`col-sm ${showLive}`}>
    <div className="template2  mx-2"  >

      <div className="row p-2 pure-cv" id="full_CV" style={{backgroundColor:`${bodyColor}`, color:`${bodyFontColor}`}}>
        <div className="col-6 one" >
          <div className="shadow" style={{backgroundColor:`${headerColor}`}}>
          <div className="  ps-2  pt-4"><img src={image} className="prof2" width="150" height="200"  /></div>
          <div className="mt-3  ps-2"> 
          <h2 className="px-1">{name} </h2>
          <h3 className="px-1">{lastName}</h3>
          <h5 className="px-1">{jobTitle}</h5>

            <div className="mt-3">

              <h2 className=" border-bottom border-primary">Contact</h2>
              <div className="">
              <h6>Phone</h6>
              <p className="px-1">{phone}</p>
              <h6 className="px-1">Social media:</h6>
              <p className="px-1">{linkedin}</p>
              <h6>Email</h6>
              <p className="px-1">{email}</p>
              </div>
            </div>

          </div>
        
          </div>
          </div>
        <div className="col-6 mt-2 two px-3">
          <h2>Summery</h2>
          <span >{summery} </span>
  
          <h2 className="mt-3">Experience</h2>
            <p> work in {experience}: <br /> {post} position Start <br /> {`${startDate} to ${endDate}`} </p>
        
          <h2 className="mt-4">Skills</h2>
         
          <i className="badge bg-success mx-1">{skills}</i>

         {/* {[newSkill.map((sk,index) => <div className="badge bg-success mx-1" key={index}>{sk}</div>)]} */}


       <h2 className="mt-4">Education</h2>
         {university} at {faculty} in {degree} {`${startUni} - ${endUni}`}

        </div>

      </div>


    </div>
  </div>
  </div>

 
</>

 )
}

export default Template2;
  