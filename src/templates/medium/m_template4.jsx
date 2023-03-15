
import React,{useState,useEffect} from "react"
import * as yup from 'yup'
import { useFormik } from "formik";
import jsPDF from "jspdf";
import MediumForms from "./medium_forms";
import {faAddressBook, faCogs, faEnvelope, faGraduationCap, faHistory, faInbox,faLanguage,faListAlt,faLocation,faPhone, faSkull, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const M_Template4 = () =>{


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
 setBodyColor(data.bodyColor);
 setBodyFontColor(data.bodyFontColor);
 setHeaderColor(data.headerColor);
 setTitleFontColor(data.titleFontColor);
 setHeaderColor(data.headerColor)
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
    setDownloadBtn('d-block');
  }

return(<>

<div className="bg-dark row">
    <div className='col'>
      <MediumForms onMouseDown={showDownloadBtn} onChange={showData} onClick={showProf}/>
    </div>
  <div className={`col ${showLive}`}>
    <div className="template2  mx-2" >
      <div className="px-0 pure-cv" id="full_CV" style={{backgroundColor:`${bodyColor}`, color:`${bodyFontColor}`}}>
        <div className="row" >    
        <div className="col-5 px-3" style={{background:`${bodyFontColor}`,color:`${bodyColor}`}}>
          <div className="text-capitalize text-center" >
            <img src={image}  className="prof2" width="100" height="100"  />
            <div className="py-2 my-2 text-light" >
              <p className='fw-bold'><small className="mx-1 px-1" ></small> What's Up Guys</p>
              <p className="">{summery}</p>
            </div>
          </div>

          <div className="">
            <p className='fw-bold fs-6  text-center' style={{borderBottom:`1px solid ${headerColor}`}} >
            <small className="mx-1 px-1" style={{color:`${bodyColor}`}}><FontAwesomeIcon icon={faAddressBook} /></small>Contact Me</p>
            <p className=" "style={{borderBottom:`1px solid ${headerColor}`}} ><FontAwesomeIcon className="mx-1" icon={faLocation} />{address}</p>
            <p className="" style={{borderBottom:`1px solid ${headerColor}`}} ><FontAwesomeIcon className="mx-1" icon={faPhone} />{phone}</p>
            <p style={{borderBottom:`1px solid ${headerColor}`,fontSize:'13px'}} ><FontAwesomeIcon className="mx-1" icon={faEnvelope} />{email}</p>
          </div> 
            {/* style={{color:`${bodyFontColor}`}} */}
           
          <div className="">
            <p className='fw-bold fs-6 text-center'  style={{borderBottom:`1px solid ${headerColor}`}} >
            <small className="mx-1 px-1" style={{color:`${bodyColor}`}}><FontAwesomeIcon icon={faCogs} /></small>Skills</p>
              <span className='mb-3 pb-3'>
                <strong>{skills}</strong><div className="progress progress-bar" style={{width:`${skillLevel}%`,background:`${headerColor}`}}></div>
                  <span>
                    {NewSkill.map((lang,index) => <><strong className="rome" key={index}>{lang} 
                    <div className=" progress progress-bar mb-2" 
                    style={{width:`${NewSkillLevel[index]}%`,background:`${headerColor}`}} ></div></strong></>)}
                  </span>
              </span>
          </div>
              
         

        </div>

        <div className="col mx-0" style={{color:`${bodyFontColor}`}}>
          <div className="p-3" style={{background:`${headerColor}`}}  >
            <h6 className="pt-2 fw-bold fs-5" style={{color:`${bodyColor}`}} >{name} {lastName}</h6>
            <small className="d-block" style={{color:`${bodyColor}`}}>{jobTitle}</small>
          </div>

          <div className="p-3" >
             <p className='fw-bold fs-6'  style={{color:`${headerColor}`}}>
              <small className="mx-1 px-1" style={{color:`${headerColor}`}}><FontAwesomeIcon icon={faGraduationCap} /></small>Education</p>
                <div className="row">
                  <span className=' col-5 fw-bold'>{startUni} - {endUni}</span>
                  <p className='ps-3 col-7'>{degree},{faculty}<br /> {university}</p>
                </div>
          </div>

          <div className="p-3">
            <p className='fw-bold fs-6 'style={{color:`${headerColor}`,borderBottom:`1px solid ${headerColor}`}}>
              <small className="mx-1 px-1  " style={{color:`${headerColor}`}}><FontAwesomeIcon icon={faHistory} /></small>Experience</p>
                <div className="row">
                  <small className=' col fw-bold' style={{color:`${bodyFontColor}`}}> {startDate} - {endDate}</small>
                  <strong className='ps-3 col'>{post} in {experience} </strong>
                  <p>{exp_description}</p>
                </div>
          </div>

            <div className="p-3" >
              <p className='fw-bold fs-6 ' style={{color:`${headerColor}`,borderBottom:`1px solid ${headerColor}`}}>
              <small className="mx-1 px-1 " style={{color:`${headerColor}`}}><FontAwesomeIcon icon={faThumbsUp} /></small>Interests</p>
              {[interest.split(',').map((int,ind) =><span className="mx-1 badge" style={{background:`${bodyFontColor}`,color:`${bodyColor}`}} key={ind}>{int}</span>)]}
            </div>

            <div>
              <p className='fw-bold mt-3 fs-6' style={{color:`${headerColor}`,borderBottom:`1px solid ${headerColor}`}}>
              <small className="mx-1 px-1" style={{color:`${headerColor}`}}><FontAwesomeIcon icon={faLanguage} /></small>Languages</p>
              <ol>{language} / {language_level}</ol> 
              {NewLanguage.map((lang,index) => <ol className="rome" key={index}>{lang} / {NewLanguage_level[index]}</ol>)}
            </div>

         </div>
        </div>
      </div>
    </div>
            <button onClick={creatPdf} className={`btn btn-warning ${downloadBtn} float-end`}>Download PDF</button>
  </div>
</div>




</>)
}

export default M_Template4;