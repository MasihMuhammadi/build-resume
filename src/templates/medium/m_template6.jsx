
import React,{useState,useEffect} from "react"
import * as yup from 'yup'
import { useFormik } from "formik";
import jsPDF from "jspdf";
import MediumForms from "../medium/medium_forms";
import {faAddressBook, faCogs, faEnvelope, faGraduationCap, faHistory, faInbox,faLanguage,faListAlt,faLocation,faPhone, faSkull, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Colores from "../colores";




const M_Template6 = () =>{


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
const showDownloadBtn =(showBtn) =>{
  setDownloadBtn('d-block');
  setShowColores('d-block');
  setInputes('')
  setStyle('d-block ');
 setShowLiveCenter('showLive');
}
return(<>

<div className={`bg-dark ${showLiveCenter}`} >
  <div className={`${inputes}`}>
      <MediumForms onMouseDown={showDownloadBtn} onChange={showData} onClick={showProf}/>
    </div>
  <div className={`${style}`}>
    <div className="template2  mx-2" >
     <div className="pure-cv" id="full_CV" >
      <div className="row" >
        <div className="col mx-0 px-2 " style={{backgroundColor:`${bodyColor}`, color:`${bodyFontColor}`}}>   
                <div className="">
                    <img src={image}  className="w-100"  height="250"  />
                      <p className='fw-bold fs-6 mt-4'>
                        <small className="mx-1 text-dark px-1 " ></small>Contact Me
                      </p>
                      <div className="px-4">
                        <strong>Adress</strong>
                        <p >{address}</p>
                        <strong>Phone</strong>
                        <p >{phone}</p>
                        <strong>Email</strong>
                        <p style={{fontSize:'12px'}}>{email}</p>
                      </div>
                        {/* style={{color:`${bodyColor}`}} */}
                </div> 

                  <div className="p-3" >
                    <p className='fw-bold fs-6 '>Skills</p>
                    
                      <div className="progress">
                        <div className="progress-bar" style={{background:`${bodyFontColor}`,color:`${bodyColor}`,width:`${skillLevel}%`}}
                         role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{skillLevel}
                        </div>
                      </div>
                      

                        {NewSkill.map((lang,index) => 
                          <strong className="rome" key={index}>{lang} 
                           <div className=" progress">
                              <div className="progress-bar" style={{width:`${NewSkillLevel[index]}%`,background:`${bodyFontColor}`,color:`${bodyColor}`}}
                              role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{NewSkillLevel[index]}
                              </div>
                            </div>
                            </strong>
                            
                        )}
                            
                        </div>

              <div className="p-3"> 
                <p className='fw-bold fs-6 mt-3' >Languages</p>
                <ol>{language} / {language_level}</ol> 
                {NewLanguage.map((lang,index) => <ol className="rome" key={index}>{lang} / {NewLanguage_level[index]}</ol>)}
              </div>

             
        </div>

        <div className="col-7 "style={{backgroundColor:`${bodyFontColor}`,color:`${headerColor}`}}>
          <div className="text-capitalize px-2 pt-5 border-bottom border-dark" >
                <h4 className="pt-2" style={{color:`${bodyColor}`}}>{name} {lastName}</h4>
                <p className="d-block text-center" >{jobTitle}</p>
          </div>
        
        
        <div className="py-2 my-2" >
          
             <p className='fw-bold mx-1 fs-6 text-center' style={{backgroundColor:`${bodyColor}`, color:`${bodyFontColor}`}}>Summery</p>
             <p className="px-3">{summery}</p>
        </div>

        <div className="py-2" >
              <p className='fw-bold fs-6 text-center mx-1' style={{backgroundColor:`${bodyColor}`, color:`${bodyFontColor}`}}>Education</p>
                <div className="row">
                    <p className='ps-3 col-7'>{degree},{faculty}<br /> {university}</p>
                    <span className=' col-5 fw-bold'>{startUni} - {endUni}</span>
                </div>
        </div>


          <div className="py-2" >
            <p className='fw-bold fs-6 text-center mx-1' style={{backgroundColor:`${bodyColor}`, color:`${bodyFontColor}`}}>Experience</p>
              <div className="row">
                <span className='ps-3 col'>{post} in {experience} </span>
                <span className=' col fw-bold'>from {startDate} to {endDate}</span>
                <p>{exp_description}</p>
              </div>
          </div>

            

          <div className="py-2" >
            <p className='fw-bold fs-6 text-center mx-1' style={{backgroundColor:`${bodyColor}`, color:`${bodyFontColor}`}}>Interests</p>
            {[interest.split(',').map((skill,ind) =><span style={{background:`${bodyColor}`,color:`${bodyFontColor}`}} 
            className="mx-1 badge"  key={ind}>{skill}</span>)]}
            
           </div>

       </div>
        </div> 
     </div>
              <div className={`${showColores}`}><Colores onChange={changeColor}/></div>
              <button onClick={creatPdf}  className={`btn btn-warning ${downloadBtn} float-end`}>Download PDF</button>
    </div>
  </div>
</div>




</>)
}

export default M_Template6;