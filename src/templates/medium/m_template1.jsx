
import React,{useState,useEffect} from "react"
import * as yup from 'yup'
import { useFormik } from "formik";
import jsPDF from "jspdf";
import MediumForms from "../medium/medium_forms";
import {faAddressBook, faCogs, faEnvelope, faGraduationCap, faHistory, faInbox,faLanguage,faListAlt,faLocation,faPhone, faSkull, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Colores from "../colores";




const M_Template1 = () =>{


const [name,setName] = useState('');
const [lastName,setLastName] = useState('');
const [jobTitle,setJobTitle] = useState('');
const [summery,setSummery] = useState('');
const [experience,setExperience] = useState('');
const [exp_description,setExp_description] = useState('');

const [post,setPost] = useState('');
const [startDate,setStartDate] = useState('');
const [endDate,setEndDate] = useState('');
const [university,setUniversity] = useState('');
const [faculty,setFaculty] = useState('');
const [degree,setDegree] = useState('');
const [startUni,setStartUni] = useState('');
const [endUni,setEndUni] = useState('');
const [edu_description,setEdu_Description] = useState('');
const [skills,setSkills] = useState('');
const [skillLevel,setSkillLevel] = useState();

const [NewSkill,setNewSkill] = useState([]);
const [NewSkillLevel,setNewSkillLevel] = useState([]);

const[phone,setPhone] = useState();
const[linkedin,setLinkedin] = useState();
const [email,setEmail] = useState();

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
const [downloadBtn,setDownloadBtn] = useState('d-none')
const [showLiveCenter,setShowLiveCenter] = useState('row');
const [style,setStyle] = useState('d-none col d-sm-block');
const [inputes,setInputes] = useState('col-sm');


const showData =(data,newLang,newLangLevel,newSkill,newSkillLevel) =>{

 setName(data.name);
 setLastName(data.lastName)
 setJobTitle(data.jobTitle);
 setSummery(data.summery);
 setExperience(data.experince);
 setExp_description(data.exp_description)
 setPost(data.post);
 setStartDate(data.startDate);
 setEndDate(data.endDate);
 setUniversity(data.university);
 setFaculty(data.faculty);
 setDegree(data.degree);
 setStartUni(data.startUni);
 setEndUni(data.endUni);
 setEdu_Description(data.edu_description)
 setSkills(data.skills);
 setSkillLevel(data.skillLevel);
 setNewSkill(newSkill);
 setNewSkillLevel(newSkillLevel);
 setPhone(data.phone);
 setEmail(data.email);
 setLinkedin(data.linkedin)
 setAddress(data.address);
 setProject(data.project);
 setInterest(data.interest);
 setLanguage(data.language);
 setLanguage_level(data.language_level);
 setNewLanguage_level(newLangLevel);
 setNewLanguage(newLang)

}
const showDownloadBtn =(showBtn) =>{
  setDownloadBtn('d-block');
  setShowColores('d-block');
   setInputes('')
  setStyle('d-block ');
 setShowLiveCenter('showLive');
}


const changeColor = (bodyColor,bodyFontColor,headerColor) =>{
  setBodyColor(bodyColor);
  setBodyFontColor(bodyFontColor);
  setHeaderColor(headerColor);

}

const showProf = (img,changeStyle) =>{
  setImage(img)
 
 }
const creatPdf = () =>{
    let doc = new jsPDF('p','pt','a4');
    doc.html(document.querySelector('#full_CV'),{
      callback:function(pdf){
        let pageCount = doc.internal.getNumberOfPages();
        pdf.deletePage(pageCount)
        pdf.save('my Cv')
      }
    });
  };

return(<>

<div className={`bg-dark ${showLiveCenter}`} >
  <div className={`${inputes}`}>
     <MediumForms onMouseDown={showDownloadBtn} onChange={showData} onClick={showProf}/>
  </div>
    <div className={`${style}`}>
      <div className="template2  mx-2" >
        <div className="px-4 pure-cv" id="full_CV" style={{backgroundColor:`${bodyColor}`, color:`${bodyFontColor}`}}>
       
          <div className="row" >

            <div className="col-8">

              <div className="text-capitalize text-center mx-0 pt-2" style={{background:`${headerColor}`}}>
                <h6 className="pt-2 fs-5 " style={{borderBottom:`1px solid ${bodyFontColor}`}} >{name} {lastName}</h6>
                <p className="d-block" >{jobTitle}</p>
              </div>

              <div className="py-2 mt-4 my-2 rounded" style={{backgroundColor:`${headerColor}`,color:`${bodyFontColor}`}} >
                <p className='fw-bold fs-6 px-3'>Summery</p>
                <p className="px-3">{summery}</p>
              </div>

              <div className="p-3 mt-3 rounded" style={{backgroundColor:`${headerColor}`}}>
                <p className='fw-bold fs-6 ' style={{color:`${bodyFontColor}`}}>Experience</p>
                  <div className="row">
                      <span className='ps-3 col'>{post} in {experience} </span>
                      <span className=' col fw-bold'>from {startDate} to {endDate}</span>
                      <p>{exp_description}</p>
                  </div>
              </div>

              <div className="p-3 mt-3 rounded" style={{backgroundColor:`${headerColor}`}}>
                <p className='fw-bold fs-6 ' style={{color:`${bodyFontColor}`}}>Education</p>
                  <div className="">
                      <p className='ps-3'>{degree} of {faculty} / 
                      <span className='fw-bold'>{startUni} - {endUni}</span></p>
                      <span>university of {university}</span>
                      <p>{edu_description}</p>
                  </div>
              </div>
            </div>
            <div className="col mt-2 text-dark" style={{backgroundColor:`${bodyFontColor}`,color:`${bodyColor}`}}>
              
              <img src={image} className="text-center rounded-circle"  width="120" height="120"  />
                <div className="">
                  <p className='fw-bold fs-6  mt-4' style={{color:`${bodyColor}`}}>
                  <small className="mx-1 text-dark px-1 " ></small>Contact Me</p>
                  <p className="" style={{color:`${bodyColor}`}}>{address}</p>
                  <p className="" style={{color:`${bodyColor}`}}>{phone}</p>
                  <small  style={{color:`${bodyColor}`,fontSize:'13px' }}>{email}</small> 
                </div> 
            <div>
            <div className="p-3" >
              <p className='fw-bold fs-6' style={{color:`${bodyColor}`}}>Skills</p>
                <span className='mb-2'>
                  <div className="w-75 mb-2"><strong style={{color:`${bodyColor}`}}>{skills}</strong><div className="progress progress-bar" style={{background:`${headerColor}`,color:`${bodyFontColor}`,width:`${skillLevel}%`}}>{skillLevel}</div></div>
                    <span className="w75">
                      {NewSkill.map((lang,index) => <div className="mb-2 w-75"><strong className="" style={{color:`${bodyColor}`}} key={index}>{lang} 
                      <div className=" progress progress-bar" 
                      style={{width:`${NewSkillLevel[index]}%`,background:`${headerColor}`,color:`${bodyFontColor}`}} >{NewSkillLevel[index]}</div></strong></div>)}
                    </span>
                </span>
            </div>
                <p className='fw-bold fs-6 mt-3' style={{color:`${bodyColor}`}}>Languages</p>
                <ol style={{color:`${bodyColor}`}}>{language} / {language_level}</ol> 
                {NewLanguage.map((lang,index) => <ol className="rome" style={{color:`${bodyColor}`}} key={index}>{lang} / {NewLanguage_level[index]}</ol>)}
              </div>

              <div className="p-3" >
                <p className='fw-bold fs-6 ' style={{color:`${bodyColor}`}}>Interests</p>
                {[interest.split(',').map((skill,ind) =><span className="mx-1 badge" style={{background:`${bodyColor}`,color:`${bodyFontColor}`}} key={ind}>{skill}</span>)]}
              </div>

          </div>

       

      </div>
    </div>
            <div className={`${showColores}`}><Colores onChange={changeColor}/></div>
            <button onClick={creatPdf} className={`btn btn-warning ${downloadBtn} float-end`}>Download PDF</button>
  </div>
 </div>
</div>




</>)
}

export default M_Template1;