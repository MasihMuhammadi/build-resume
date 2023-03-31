
import React,{useState,useEffect} from "react"
import * as yup from 'yup'
import { useFormik } from "formik";
import jsPDF from "jspdf";
import ExpertForms from "../expert/expertForms"
import {faAddressBook, faCogs, faEnvelope, faGraduationCap, faHistory, faInbox,faLanguage,faListAlt,faLocation,faMobile,faPhone, faSkull, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Colores from "../colores";




const E_Template4 = () =>{


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
const [downloadBtn,setDownloadBtn] = useState('d-none')
const [showLiveCenter,setShowLiveCenter] = useState('row');
const [style,setStyle] = useState('d-none col d-sm-block');
const [inputes,setInputes] = useState('col-sm');
const [ca,setCa] = useState('');


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
 setNewLanguage(newLang);
 setCa(data.ca)
 
}


const showDownloadBtn =(showBtn) =>{
  setDownloadBtn('d-block');
  setShowColores('d-block')
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
     <ExpertForms onMouseDown={showDownloadBtn} onChange={showData} onClick={showProf}/>
  </div>
    <div className={`${style}`}>
      <div className="template2  mx-2" >

        <div className="pure-cv" id="full_CV" style={{backgroundColor:`${bodyColor}`, color:`${bodyFontColor}`}}>
            
                <div className="col-8">
                    <div className="w-100 my-2" style={{background:`${headerColor}`,color:`${bodyColor}`,height:"40px",overflowY:'hidden'}}>
                        <span className="text-capitalize mx-3 py-1" >{name} {lastName}</span>
                        <p className="ms-3">{jobTitle}</p>
                    </div>
                    <div className="py-2 my-2 mx-3" >
                        <p className="text-justify " >{summery}</p>
                    </div>
                    <div className="pt-1 mx-2 row" >
                        <p className="" style={{color:`${headerColor}`,borderBottom:`1px solid ${bodyFontColor}`}}>Education </p>
                        <div className="row mt-2">
                            <div className="col">
                                <p className="" style={{fontSize:`12px`}}>{startUni} - {endUni}</p>
                            </div>
                            <div className="col-9 mb-3">
                                <strong>{degree} of {faculty}  </strong>  <br />
                                <span className="opacity-75">{university} university</span><br />
                            <span>{edu_description}</span>
                            </div>
                        </div>
                        <p className="" style={{color:`${headerColor}`,borderBottom:`1px solid ${bodyFontColor}`}}>Work Experience </p>
                        <div className="row mt-2">
                            <div className="col">
                                <p className="" style={{fontSize:`12px`}}>{startDate} - {endDate}</p>
                            </div>
                            <div className="col-8 mb-3">
                                <strong>{post} </strong>  <br />
                                <span className="opacity-75">  {experience} </span><br />
                                <span>{exp_description}</span>
                            </div>
                        </div>
                        <div className="p-3" >
                            <p className='' style={{ color:`${headerColor}`,borderBottom:`1px solid ${bodyFontColor}`}} >Interests </p>
                            {[interest.split(',').map((int,ind) =><li style={{background:`${bodyColor}`,color:`${bodyFontColor}`,marginLeft:'120px'}} 
                            className="mx-1"  key={ind}>{int}</li>)]} 
                        </div> 

                        <div className="p-3" >
                            <p  style={{color:`${headerColor}`,borderBottom:`1px solid ${bodyFontColor}`}}>Certifiates </p>
                                {ca}
                        </div>
                    </div>
                </div>
                
                <div className="col mt-2">
                    <div className="p-3" style={{fontSize:'12px '}}>
                        <img src={image} className="text-center rounded-circle"  width="100" height="100"  />
                    <div className="col p-2">
                        <p style={{borderBottom:`1px solid ${bodyFontColor}`,color:`${headerColor}`}}>information</p>
                    <span>
                        <strong>Address:<br /> </strong>{address}
                    </span><br />

                    <span>
                        <strong>Phone: <br /></strong>{phone}
                    </span><br />
                    <span>
                        <strong>Email: <br /></strong>{email}
                    </span>
               
                </div> 
                    <div className="p-3" >
                        <p className='' style={{color:`${headerColor}`,borderBottom:`1px solid ${bodyFontColor}`}}>Skills</p>
                        <span className=''>
                        <strong>{skills}<div style={{fontSize:'18px'}}>{skillLevel}</div></strong>
                            {NewSkill.map((lang,index) => <div className=""><strong className="rome" key={index}>{lang} 
                            <div style={{color:`${bodyFontColor}`,fontSize:'18px'}} >{NewSkillLevel[index]}</div></strong></div>)}
                        </span>
                    </div>

                    <div className="p-3" style={{color:`${bodyFontColor}`,textTransform:'capitalize'}}>
                        <p className='text-decoration-unerline' style={{color:`${headerColor}`}} >Languages </p>
                        <li>{language} <small className="opacity-75 px-1" style={{color:`${headerColor}`}}>{language_level}</small> </li> 
                        {NewLanguage.map((lang,index) => <li className="" key={index}>{lang}   <small className="opacity-75 px-1" style={{color:`${headerColor}`}}>{NewLanguage_level[index]}</small></li>)}
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

export default E_Template4;