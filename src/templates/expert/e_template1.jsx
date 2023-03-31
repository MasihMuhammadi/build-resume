
import React,{useState,useEffect} from "react"
import * as yup from 'yup'
import { useFormik } from "formik";
import jsPDF from "jspdf";

import {faAddressBook, faCogs, faEnvelope, faGraduationCap, faHistory, faInbox,faLanguage,faListAlt,faLocation,faPhone, faSkull, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Colores from "../colores";
import ExpertForms from "./expertForms";




const E_Template1 = () =>{


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
const [edu_description,setEdu_description] = useState('');
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
const [downloadBtn,setDownloadBtn] = useState('d-none');

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
 setEdu_description(data.edu_description)
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



const showProf = (img,changeStyle) =>{
  setImage(img)

 }

const changeColor = (bodyColor,bodyFontColor,headerColor) =>{
  setBodyColor(bodyColor);
  setBodyFontColor(bodyFontColor);
  setHeaderColor(headerColor);

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
    setDownloadBtn('d-block');
    setShowColores('d-block');
    setInputes('')
    setStyle('d-block ');
   setShowLiveCenter('showLive');
  }

return(<>

<div className={`bg-dark ${showLiveCenter}`} >
  <div className={`${inputes}`}>
      <ExpertForms onMouseDown={showDownloadBtn} onChange={showData} onClick={showProf}/>
    </div>
  <div className={`${style}`}>
    <div className="template2  mx-2" >
      <div className="px-0 pure-cv" id="full_CV" style={{backgroundColor:`${bodyColor}`, color:`${bodyFontColor}`}}>
        <div className="row" >    
         
         <div className="col-4 px-3" style={{background:`${bodyFontColor}`,color:`${bodyColor}`}}>
            <div className="text-capitalize mx-0 px-0 text-center" >
              <img src={image}  className="" width="140" height="140"  />
            </div>

          <div className="">
            <p className='fw-bold fs-6  text-center' style={{borderBottom:`1px solid ${headerColor}`}} >
            <small className="mx-1 px-1" style={{color:`${bodyColor}`}}><FontAwesomeIcon icon={faAddressBook} /></small>Contact Me</p>
            <p className=" "style={{borderBottom:`1px solid ${headerColor}`}} ><FontAwesomeIcon className="mx-1" icon={faLocation} />{address}</p>
            <p className="" style={{borderBottom:`1px solid ${headerColor}`}} ><FontAwesomeIcon className="mx-1" icon={faPhone} />{phone}</p>
            <p style={{borderBottom:`1px solid ${headerColor}`,fontSize:'13px'}} ><FontAwesomeIcon className="mx-1" icon={faEnvelope} />{email}</p>
          </div> 
            
          <div>
              <p className='fw-bold mt-3 fs-6' style={{borderBottom:`1px solid ${headerColor}`}}>
              <small className="mx-1 px-1" style={{color:`${headerColor}`}}><FontAwesomeIcon icon={faLanguage} /></small>Skills</p>
              <div><p>{skills}</p><p>{skillLevel}</p></div> 
              {NewSkill.map((skill,index) => <div className="" key={index}><p>{skill}</p><p>{NewSkillLevel[index]}</p> </div>)}
            </div>
              

            <div>
              <p className='fw-bold mt-3 fs-6' style={{borderBottom:`1px solid ${headerColor}`}}>
              <small className="mx-1 px-1" style={{color:`${headerColor}`}}><FontAwesomeIcon icon={faLanguage} /></small>Languages</p>
              <ol>{language} / {language_level}</ol> 
              {NewLanguage.map((lang,index) => <ol className="rome" key={index}>{lang} / {NewLanguage_level[index]}</ol>)}
            </div>
              
        

        </div>

        <div className="col mx-0" style={{color:`${bodyFontColor}`}}>
          <div className="p-3" style={{background:`${headerColor}`}}  >
            <h6 className="pt-2 fw-bold fs-5" style={{color:`${bodyColor}`}} >{name} {lastName}</h6>
            <small className="d-block" style={{color:`${bodyColor}`}}>{jobTitle}</small>
            <p className="mt-2" style={{color:`${bodyColor}`}}>{summery}</p>

          </div>

          <div className="p-3" >
             <p className='fw-bold fs-6'  style={{color:`${headerColor}`}}>
                <small className="mx-1 px-1" style={{color:`${headerColor}`}}><FontAwesomeIcon icon={faGraduationCap} /></small>Education</p>
                <div className="row">
                  <span className='col-5 fw-bold'>{startUni} - {endUni}</span>
                  <div className="ps-3 col">
                    <p className=''>{degree},{faculty}<br /> {university}</p>
                    <p>{edu_description}</p>
                  </div>
                </div>
          </div>

          <div className="p-3">
            <p className='fw-bold fs-6 'style={{color:`${headerColor}`}}>
              <small className="mx-1 px-1  " style={{color:`${headerColor}`}}><FontAwesomeIcon icon={faHistory} /></small>Experience</p>
                <div className="row">
                  <small className=' col fw-bold' style={{color:`${bodyFontColor}`}}> {startDate} - {endDate}</small>
                  <div className="col">
                      <span className='ps-3'>{post}<br /></span>
                      <span className="ps-3 opacity-75">{experience}<br /><br /></span>
                      <span className="">{exp_description}</span>
                    
                  </div>
                </div>
          </div>

            <div className="p-3" >
              <p className='fw-bold fs-6 ' style={{color:`${headerColor}`}}>
              <small className="mx-1 px-1 " style={{color:`${headerColor}`}}><FontAwesomeIcon icon={faThumbsUp} /></small>Interests</p>
              {[interest.split(',').map((int,ind) =><span className="mx-1 badge" style={{background:`${bodyFontColor}`,color:`${bodyColor}`}} key={ind}>{int}</span>)]}
            </div>

            

         </div>
        </div>
      </div>
    </div>
            <div className={`${showColores}`}><Colores onChange={changeColor}/></div>
            <button onClick={creatPdf} className={`btn btn-warning ${downloadBtn} float-end`}>Download PDF</button>
  </div>
</div>




</>)
}

export default E_Template1;