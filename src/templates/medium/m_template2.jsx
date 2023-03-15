
import React,{useState,useEffect} from "react"
import * as yup from 'yup'
import { useFormik } from "formik";
import jsPDF from "jspdf";
import MediumForms from "../medium/medium_forms";
import {faAddressBook, faCogs, faEnvelope, faGraduationCap, faHistory, faInbox,faLanguage,faListAlt,faLocation,faPhone, faSkull} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const M_Template2 = () =>{


const [name,setName] = useState('');
const [lastName,setLastName] = useState('');
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


const showData =(data,newLang,newLangLevel,newSkill,newSkillLevel) =>{

 setName(data.name);
 setLastName(data.lastName)
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
 setBodyColor(data.bodyColor);
 setBodyFontColor(data.bodyFontColor);
 setHeaderColor(data.headerColor);
 setTitleFontColor(data.titleFontColor);
 setNewLanguage_level(newLangLevel);
 setNewLanguage(newLang)

}
const showProf = (img) =>{
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
 
const showDownloadBtn = (showBtn) =>{
    setDownloadBtn('d-block')
}

return(<>

<div className="bg-dark row">
  <div className='col'>
     <MediumForms onMouseDown={showDownloadBtn} onChange={showData} onClick={showProf}/>
  </div>
    <div className={`col ${showLive}`}>
      <div className="template2  mx-2" >
        <div className=" pure-cv p-2" id="full_CV" style={{backgroundColor:`${bodyColor}`, color:`${bodyFontColor}`}}>
          <div className="row" >
        
            <div className="col">
              <h3 className="text-capitalize" style={{color:`${bodyFontColor}`}}>{name} {lastName}</h3>
              <p className="d-block fs-6"  style={{color:`${bodyFontColor}`}}>{jobTitle}</p>

              <div className="p-3" >
                <p className='fw-bold fs-6 border-bottom border-dark'><small className="mx-1 text-dark px-1 "><FontAwesomeIcon icon={faGraduationCap} /></small>Education</p>
                  <div className="row">
                    <small className='ps-3 col-7'>{degree},{faculty}<br /> {university}</small>
                    <span className=' col-5 fw-bold'>{startUni} - {endUni}</span>
                  </div>
              </div>

              <div className="p-3" >
                <p className='fw-bold fs-6 border-bottom border-dark'><small className="mx-1 text-dark px-1 "><FontAwesomeIcon icon={faHistory} /></small>Experience</p>
                  <div className="row">
                    <span className='ps-3 col'>{post} in {experience} </span>
                    <span className=' col fw-bold'>from {startDate} to {endDate}</span>
                  </div>
              </div>

              <div className="p-3" >
                <p className='fw-bold fs-6 border-bottom border-dark'><small className="mx-1 text-dark px-1" ><FontAwesomeIcon icon={faListAlt} /></small>Summery</p>
                <p>{summery}</p>
              </div>
            </div>  

            <div className="col-4">
              <div className="">
                <p className='fw-bold fs-6 border-bottom border-dark'><small className="mx-1 text-dark px-1" ><FontAwesomeIcon icon={faAddressBook} /></small>Contact Me</p>
                <p style={{color:`${titleFontColor}`}}><FontAwesomeIcon className="mx-1" icon={faLocation} />{address}</p>
                <p className="" style={{color:`${bodyFontColor}`}}><FontAwesomeIcon className="mx-1" icon={faPhone} />{phone}</p>
                <small className="" style={{color:`${bodyFontColor}`}}><FontAwesomeIcon className="mx-1" icon={faEnvelope} />{email}</small>
                <p className="" style={{color:`${bodyFontColor}`}}></p>
              </div> 

              <div className="p-3" >
                <p className='fw-bold fs-6 border-bottom border-dark'><small className="mx-1 text-dark px-1"><FontAwesomeIcon icon={faCogs} /></small>Skills</p>
                  <span className=''>
                    <strong>{skills}</strong><div className="progress progress-bar" style={{width:`${skillLevel}%`,background:`${headerColor}`}}>{skillLevel}</div>
                      <span>    
                        {NewSkill.map((lang,index) => <><strong className="rome" key={index}>{lang} 
                        <div className=" progress progress-bar" 
                        style={{width:`${NewSkillLevel[index]}%`,background:`${headerColor}`}} >{NewSkillLevel[index]}</div></strong></>)}
                     </span>
                  </span>
              </div>
        
              <div className="pt-3">
                <p className='fw-bold fs-6 border-bottom border-dark'><small className="mx-1 text-dark px-1 "><FontAwesomeIcon icon={faLanguage} /></small>Languages</p>
                <ol>{language} / {language_level}</ol> 
                {NewLanguage.map((lang,index) => <ol className="rome" key={index}>{lang} / {NewLanguage_level[index]}</ol>)}
              </div>
              
            </div>  
          </div>
        </div>
      </div>
            <button onClick={creatPdf} className={`${downloadBtn} mx-4 btn btn-warning mb-3 float-end`}>Download PDF</button>
    </div>
</div>




</>)
}

export default M_Template2;