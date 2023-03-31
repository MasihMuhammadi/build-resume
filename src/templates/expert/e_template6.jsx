
import React,{useState} from "react"
import * as yup from 'yup'
import { useFormik } from "formik";
import jsPDF from "jspdf";
import InternForms from "../Intern/internForms";
import Colores from "../colores";
import ExpertForms from "./expertForms";
// import { values } from "../inputes";



const E_Template6 = () =>{

const [name,setName] = useState('');
const [jobTitle,setJobTitle] = useState('');
const [summery,setSummery] = useState('');
const [experience,setExperience] = useState('');
const [exp_description,setExp_Description] = useState();
const [post,setPost] = useState('');
const [startDate,setStartDate] = useState('');
const [endDate,setEndDate] = useState('');
const [university,setUniversity] = useState('');
const [faculty,setFaculty] = useState('');
const [degree,setDegree] = useState('');
const [startUni,setStartUni] = useState('');
const [endUni,setEndUni] = useState('');
const [edu_description,setEdu_Description] = useState();

const [skills,setSkills] = useState('');
const [skillLevel,setSkillLevel] = useState()
const [NewSkill,setNewSkill] = useState([]);
const [NewSkillLevel,setNewSkillLevel] = useState([]);

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
const [ca,setCa] = useState('');
const [headerColor,setHeaderColor] = useState('');
const [showColores,setShowColores] = useState('d-none');
const [image,setImage] = useState();
const [showLive,setShowLive] = useState('d-none d-lg-block');
const [project,setProject] = useState('');
const [interests,setInterest] = useState('');
const [address,setAddress] = useState('');
const [DoB,setDob]= useState('');
const [downloadBtn,setDownloadBtn] = useState('d-none');
const [showLiveCenter,setShowLiveCenter] = useState('row');
const [style,setStyle] = useState('d-none col d-sm-block');
const [inputes,setInputes] = useState('col-sm')





const showData =(data,newLang,newLangLevel,newSkill,newSkillLevel) =>{
 setName(data.name);
 setLastName(data.lastName)
 setJobTitle(data.jobTitle);
 setSummery(data.summery);
 setExperience(data.experince);
 setExp_Description(data.exp_description)
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
 setSkillLevel(data.skillLevel)
 setNewSkill(newSkill);
 setNewSkillLevel(newSkillLevel);
 setPhone(data.phone);
 setEmail(data.email);
 setLinkedin(data.linkedin)
 setProject(data.project);
 setInterest(data.interest);
 setLanguage(data.language);
 setLanguage_level(data.language_level);
 setNewLanguage_level(newLangLevel);
 setNewLanguage(newLang);
 setBodyColor(data.bodyColor);
 setBodyFontColor(data.bodyFontColor);
 setHeaderColor(data.headerColor);
 setCa(data.ca)
 setAddress(data.address)


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


const showDownloadBtn = (showBtn) =>{
  setDownloadBtn('d-block');
  setShowColores('d-block');
  setInputes('')
  setStyle('d-block ');
 setShowLiveCenter('showLive');
}
;

return(
<>
  <div className={`bg-dark ${showLiveCenter}`}>
    <div className={`${inputes}`}>
      <ExpertForms onMouseDown={showDownloadBtn} onChange={showData} onClick={showProf}/>
    </div>
    <div className={`${style}`}>
        <div className='template2 mx-2'>
            <div className=" pure-cv p-2" id="full_CV"style={{backgroundColor:`${bodyColor}`,color:`${bodyFontColor}`}}>
                <div className="col">     
                <div className="">
                    <h5 className="px-2 d-flex" style={{borderLeft:`8px solid ${headerColor}`,color:`${headerColor}`}}>{name} {lastName}</h5>
                    <p className="px-3">{jobTitle}</p>
                    <p className="px-3">{summery}</p>
                  </div>
                    <div className="pt-3">
                        <h5 className="px-2" style={{borderLeft:`8px solid ${headerColor}`,color:`${headerColor}`}}>Education</h5>
                        <p>
                          {faculty} at {university}, {degree} degree
                        </p>
                        <p>{startUni} - {endUni}</p>
                        <p>{edu_description}</p>
                    </div>
                    <div>
                        <h5 className="px-2" style={{borderLeft:`8px solid ${headerColor}`,color:`${headerColor}`}}>Experience</h5>
                        <p>
                          {experience} as {post}
                        </p>
                        <p>{startDate} - {endDate}</p>
                        <p>{exp_description}</p>
                    </div>

                    <div>
                        <div className="text-capitalize">
                            <h5 className=' px-2' style={{color:`${headerColor}`,borderLeft:`8px solid ${headerColor}`}} >Languages </h5>
                            <li>{language} <small className="opacity-75 px-1" style={{color:`${bodyFontColor}`}}>{language_level}</small> </li> 
                            {NewLanguage.map((lang,index) => <li className="" key={index}>{lang}   <small className="opacity-75 px-1" style={{color:`${bodyFontColor}`}}>{NewLanguage_level[index]}</small></li>)}
                        </div>

                        <div className="mt-3" >
                            <h5 className="px-2 fs-5" style={{borderLeft:`8px solid ${headerColor}`,color:`${headerColor}`}}>Interests</h5>
                            {[interests.split(',').map((skill,ind) =><span className="mx-1 badge" style={{background:`${headerColor}`,color:`${bodyColor}`}} key={ind}>{skill}</span>)]}
                        </div>
                        
                    </div>
                </div>
                <div className="col-5">
                  <img src={image} className="border " width="170" />
                    <div className="pt-3" >
                        <h5 className='px-2' style={{borderLeft:`8px solid ${headerColor}`,color:`${headerColor}`}}>Skills</h5>
                        <span className=''>
                            <strong>{skills}<div style={{fontSize:'18px'}}>{skillLevel}</div></strong>
                                {NewSkill.map((lang,index) => <div className=""><strong className="rome" key={index}>{lang} 
                                <div style={{color:`${bodyFontColor}`,fontSize:'18px'}} >{NewSkillLevel[index]}</div></strong></div>)}
                        </span>
                    </div>
                        <div className="mt-3" >
                            <h5 className="px-2" style={{borderLeft:`8px solid ${headerColor}`,color:`${headerColor}`}}>Certifiates </h5>
                                {ca}
                        </div>
                        <div className="mt-3">
                            <h5 className="px-2" style={{borderLeft:`8px solid ${headerColor}`,color:`${headerColor}`}}>Contact Me</h5>
                            <p>Email: {email}</p>
                            <p>Phone: {phone}</p>
                            <p>Address: {address}</p>
                        </div>
                </div>
            </div>
        </div>
        <div className={`${showColores}`}><Colores onChange={changeColor}/></div>
        <button onClick={creatPdf} className={`btn btn-warning mx-4 mb-3 float-end ${downloadBtn}`}>Download PDF</button>
        
    </div>
  </div>
</>
)
}

export default E_Template6;