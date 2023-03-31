
import React,{useState,useEffect} from "react"
import * as yup from 'yup'
import { useFormik } from "formik";
import jsPDF from "jspdf";
import ExpertForms from "../expert/expertForms"
import {faAddressBook, faCogs, faEnvelope, faGraduationCap, faHistory, faInbox,faLanguage,faListAlt,faLocation,faMobile,faPhone, faSkull, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Colores from "../colores";




const E_Template3 = () =>{


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
            <div className="w-100 my-2" style={{background:`${headerColor}`,height:`27px`}}>
                <span className=" mx-5 p-2" style={{backgroundColor:`${bodyColor}`,color:`${headerColor}`}}>Resume</span>
            </div>
       
            <div className="pt-1 row" >

                <div className="col" style={{color:`${headerColor}`}}>
                    <h6 className=" pt-2 fs-5 text-center fw-bold " >{name} {lastName}</h6>
                    <p className=" mx-5" >{jobTitle}</p>
                </div>
                
                <div className="col p-2" style={{fontSize:'12px'}}>
                    <span>
                        <strong>Address: </strong>{address}
                    </span><br />

                    <span>
                        <strong>Phone: </strong>{phone}
                    </span><br />
                    <span>
                        <strong>Email: </strong>{email}
                    </span>
                </div> 

            </div>
            
        <div className="row" >

            <div className="col-7 mt-2">
            <div className="p-3" >
                <div className="py-2 my-2" >
                    <p className="text-decoration-underline" style={{color:`${headerColor}`}}>Summery </p>
                    <p className=" text-justify " style={{marginLeft:'120px'}}>{summery}</p>
                </div> 
                <p className="text-decoration-underline" style={{color:`${headerColor}`}}>Education </p>

                <div className="row mt-2">
                    <div className="col">
                        <p className="" >{startUni} - {endUni}</p>
                    </div>
                    <div className="col-7 mb-3">
                      <span className=''>{faculty}</span> <br />
                      <strong className=''>{university} university</strong> / 
                      <span>{ degree}</span><br />
                      <span>{edu_description}</span>
                    </div>
                </div>
                
                <p className="text-decoration-underline" style={{color:`${headerColor}`}}>Work Experience </p>
                
                <div className="row mt-2">
                    <div className="col">
                        <p className=""style={{fontSize:'12px'}} >{startDate} - {endDate}</p>
                    </div>
                    <div className="col-7 mb-3">
                      <span className=''>{post}</span> <br />
                      <strong className=''>{experience} company</strong><br />

                      <span>{exp_description}</span>
                    </div>
                </div>
        </div>
            <div className="p-3" >
                <p className='text-decoration-underline' style={{ color:`${headerColor}`}} >Interests </p>
                {[interest.split(',').map((int,ind) =><li style={{background:`${bodyColor}`,color:`${bodyFontColor}`,marginLeft:'120px'}} 
                className="mx-1"  key={ind}>{int}</li>)]} 
            </div> 

            
            </div>
        <div className="col-5">
        <div className="p-3" >
              <p className='text-decoration-underline ' style={{color:`${bodyFontColor}`}}>Skills</p>
                <span className=''>
                  <strong>{skills}</strong><div className="progress progress-bar" style={{background:`${bodyFontColor}`,color:`${bodyColor}`,width:`${skillLevel}%`}}>{skillLevel}</div>
                    
                      {NewSkill.map((lang,index) => <div className=""><strong className="rome" key={index}>{lang} 
                      <div className=" progress progress-bar" 
                      style={{width:`${NewSkillLevel[index]}%`,background:`${bodyFontColor}`,color:`${bodyColor}`}} >{NewSkillLevel[index]}</div></strong></div>)}
                   
                </span>
            </div>

                <div className="p-3" style={{color:`${bodyFontColor}`,textTransform:'capitalize'}}>
                  <p className='text-decoration-unerline' style={{color:`${headerColor}`}} >Languages </p>
                  <ol>{language} <small className="opacity-75  text-dark px-1">{language_level}</small> </ol> 
                  {NewLanguage.map((lang,index) => <ol className="" key={index}>{lang}   <small className="opacity-75 text-dark  px-1">{NewLanguage_level[index]}</small></ol>)}
                </div>

          <div className="p-3" >
             <p className='text-decoration-underline' style={{color:`${headerColor}`}}>Certifiates </p>
                 {ca}
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

export default E_Template3;