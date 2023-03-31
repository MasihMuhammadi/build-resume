
import React,{useState,useEffect} from "react"
import * as yup from 'yup'
import { useFormik } from "formik";
import jsPDF from "jspdf";
import MediumForms from "../medium/medium_forms";
import {faAddressBook, faCogs, faEnvelope, faGraduationCap, faHistory, faInbox,faLanguage,faListAlt,faLocation,faPhone, faSkull, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Colores from "../colores";
import InternForms from './internForms'




const Template4 = () =>{
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
const[option,setOption] = useState();


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
 setSkills(data.skills);
 setSkillLevel(data.skillLevel);
 setNewSkill(newSkill);
 setNewSkillLevel(newSkillLevel);
 setPhone(data.phone);
 setEmail(data.email);
 setLinkedin(data.linkedin)
 setAddress(data.address);
 setProject(data.project);
 setInterest(data.interests);
 setLanguage(data.language);
 setLanguage_level(data.language_level);
 setNewLanguage_level(newLangLevel);
 setNewLanguage(newLang)
//  setOption(data.selectedOption);
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
     <InternForms onMouseDown={showDownloadBtn} onChange={showData} />
  </div>
    <div className={`${style}`}>
      <div className="template2  mx-2" >
        <div className="px-4 pure-cv" id="full_CV" style={{backgroundColor:`${bodyColor}`,fontSize:"13px", color:`${bodyFontColor}`}}>
       
          <div className="row" >

            <div className="col mt-2" style={{backgroundColor:`${bodyFontColor}`,color:`${bodyColor}`}}>
              
                  <div className="mt-5">
                    <p className='fw-bold fs-6  mt-4' style={{color:`${bodyColor}`}}>
                    <small className="mx-1 text-dark px-1 " ></small>Contact Me</p>
                    <p className="" style={{color:`${bodyColor}`}}>{address}</p>
                    <p className="" style={{color:`${bodyColor}`}}>{phone}</p>
                    <p  style={{color:`${bodyColor}`,fontSize:'12px' }}>{email}</p> 
                  </div>  
                  <div>
                    <p className='fw-bold fs-6 mt-3' style={{color:`${bodyColor}`}}>Languages</p>
                    <ol>{language} / {language_level}</ol> 
                    {NewLanguage.map((lang,index) => <ol className="rome" key={index}>{lang} / {NewLanguage_level[index]}</ol>)}
                  </div>


                  <div className="p-2">
                    <p className='fw-bold text-capitalize fs-6 ' >Interest</p>
                    {[interest.split(',').map((int,ind) =><li className="mx-1 text-capitalize" 
                    style={{background:`${bodyFontColor}`,color:`${bodyColor}`}} key={ind}>{int}</li>)]}
                  </div>
                    

                  
          </div>

        <div className="col-8">
        
          <div className="py-2 my-2" style={{backgroundColor:`${bodyColor}`,color:`${bodyFontColor}`}} >
            <div className="text-capitalize px-2 pt-5" >
                <h6 className="pt-2 fs-5" >{name} {lastName}</h6>
                <p className="d-block" >{jobTitle}</p>
            </div>
            
          </div>



          <div className="content" style={{borderLeft:`2px dashed ${bodyFontColor}`}}>
            <div className="boxTwo" >
                <div>
                  <p className='fw-bold fs-6 'style={{fontColor:`bodyFontColor`}}>Summery</p>
                  <p>{summery}</p>
                  
                </div>
              
            </div>      
          </div>
        
          <div className="content" style={{borderLeft:`2px dashed ${bodyFontColor}`}}>
            <div className="boxTwo ">
              <div className="row">
                <p className='fw-bold fs-6 ' style={{color:`${bodyFontColor}`}}>Experience</p>
                  <span className=' col fw-bold'> {startDate} / {endDate}</span>
                  <span className='ps-3 col'>{post} in {experience} </span>
                  <p className="mt-3">{exp_description}</p>
              </div>
            </div>      
          </div>

          <div className="content" style={{borderLeft:`2px dashed ${bodyFontColor}`}}>
            <div className="boxTwo ">
              <div className="row">
                <p className='fw-bold fs-6 ' style={{color:`${bodyFontColor}`}}>Education</p>
                  <span className=' col fw-bold'> {startUni} - {endUni}</span>
                  <span className='ps-3 col'>{degree} , {faculty} 
                  <p>{university}</p>
                  </span>
              </div>
            </div>      
          </div>

          <div className="content" style={{borderLeft:`2px dashed ${bodyFontColor}`}}>
            <div className="boxTwo " style={{color:`${bodyFontColor}`}}>           
              <div>
                <p className='fw-bold fs-6 ' >Skills</p>   
                  <div className="p-3" >
                    <span className=''>
                      {[skills.split(',').map((skill,ind) =><span className="mx-1  badge p-2" style={{background:`${headerColor}`,color:`${bodyColor}`}} key={ind}>{skill}</span>)]} 
                    </span>
                  </div> 
              </div>
          </div>
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

export default Template4;