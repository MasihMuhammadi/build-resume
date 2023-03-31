
import React,{useState} from "react"
import * as yup from 'yup'
import { useFormik } from "formik";
import jsPDF from "jspdf";
import MediumForms from "../medium/medium_forms";
import Colores from "../colores";
import Inputes from "./internForms";
import InternForms from "./internForms";





const Template3 = () =>{


const [name,setName] = useState('');
const [lastName,setLastName] = useState('');
const [jobTitle,setJobTitle] = useState('');
const [summery,setSummery] = useState('');
const [experience,setExperience] = useState('');
const [exp_description,setExp_Description] = useState('')
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
const [project,setProject] = useState('');
const [interest,setInterest] = useState('');
const [address,setAddress] = useState('');
const [DoB,setDob]= useState('');
const [downloadBtn,setDownloadBtn] = useState('d-none')

const [showLiveCenter,setShowLiveCenter] = useState('row');
const [style,setStyle] = useState('d-none col d-sm-block');
const [inputes,setInputes] = useState('col-sm');

const[ca,setCa] = useState('');


const showData =(data,newLang,NewLanglevel) =>{
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
 setSkills(data.skills);
 setPhone(data.phone);
 setEmail(data.email);
 setAddress(data.address);
 setLinkedin(data.linkedin)
 setProject(data.project);
 setInterest(data.interests);
 setLanguage(data.language);
 setLanguage_level(data.language_level);
 setNewLanguage(newLang);
 setNewLanguage_level(NewLanglevel);
 
 
 
 
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
    setDownloadBtn('d-block')
    setShowColores('d-block')
    setInputes('')
    setStyle('d-block ');
   setShowLiveCenter('showLive');
  }
return(<>

<div className={`bg-dark ${showLiveCenter}`} >
  <div className={`${inputes}`}>
     <InternForms onMouseDown={showDownloadBtn} onChange={showData} />
  </div>
    <div className={`${style} `}>
      <div className="template2" >
        <div className={`pure-cv`} id="full_CV" style={{backgroundColor:`${bodyColor}`, color:`${bodyFontColor}`}}>
          
          <div className=""  >
            <div className="" >
            {/* style={{color:`${bodyColor}`,background:`${headerColor}`}} */}
            <div className="">
              <div className="mt-3 px-3" >
                <h4 className="" style={{color:`${headerColor}`}} >{name} {lastName}</h4>
                <p  className="" style={{borderBottom:`1px solid ${headerColor}`}} >{jobTitle}</p>
              </div>
            </div>


              <div className="mt-3 px-3">
                <p className="text-justify">{summery}</p> 
              </div>
            </div>

            <div className=" mt-3 row gx-5 px-4">
              <div className="col-5 " >
                <div >
                  <p className=" text-capitalize fw-bold" style={{borderBottom:`1px solid ${headerColor}`,color:`${headerColor}`}}>Education</p>
                  <span className="fw-bold">University of {university}</span><br />
                  <span className="opacity-75 fw-bold">{degree} of {faculty}</span><br />
                  <span className="fw-bold"><small style={{color:`${bodyFontColor}`}}>{startUni} - {endUni}</small></span><br />
                  
                </div>
                <div>
                  <p className="text-capitalize mt-4 fw-bold" style={{borderBottom:`1px solid ${headerColor}`,color:`${headerColor}`}}>Work Experience</p>
                    
                    <span className=" fw-bold">{experience}</span><br />
                    <span className=" me-1">{post }  /
                       <span className="ms-1">{ startDate} - {endDate}</span>
                    </span>
                    <p className="mt-2">{exp_description}</p>
                    
                </div>

                <div>
                    <p className="mt-4 text-capitalize fw-bold" style={{borderBottom:`1px solid ${headerColor}`,color:`${headerColor}`}}>skills</p>
                      <div className="p-3" >
                        <span className=''>
                          {[skills.split(',').map((skill,ind) =><span className="mx-1 badge p-2" style={{background:`${bodyFontColor}`,color:`${bodyColor}`}} key={ind}>{skill}</span>)]} 
                        </span>
                      </div> 
                  </div>

              </div>

              <div className="col px-3">
                <div>
                
                  <div>
                    <p className="text-capitalize fw-bold" style={{borderBottom:`1px solid ${headerColor}`,color:`${headerColor}`}}>Languages</p>
                    <ol>{language} / <span className="opacity-75">{language_level}</span></ol> 
                    {NewLanguage.map((lang,index) => <ol className="" key={index}>{lang} / <span className="opacity-75">{NewLanguage_level[index]}</span></ol>)}
                  </div>

                  <div>
                    <p className=" mt-4 text-capitalize fw-bold" style={{borderBottom:`1px solid ${headerColor}`,color:`${headerColor}`}}>Interest</p>
                    {[interest.split(',').map((int,ind) =><li className="mx-1 " 
                    style={{background:`${bodyColor}`,color:`${bodyFontColor}`}} key={ind}>{int}</li>)]}
                  </div>

                  <div className="mt-2 pb-2 px-3" >
                    <p className=" mt-4 text-capitalize fw-bold" style={{borderBottom:`1px solid ${headerColor}`,color:`${headerColor}`}}>Contact</p>
                    <div className="px-4">
                      <strong>E-mail : </strong><span style={{fontSize:'13px'}}>{email}</span><br />
                      <strong>PHONE :  </strong>      <span >{phone}</span><br />
                      <strong>ADDRESS :</strong> <span >{address}</span>< br/>
                    </div>
                  </div>

  
                </div>
              </div>
              
            </div>
             
          </div>

        </div>
      </div>
            <button onClick={creatPdf} className={`${downloadBtn} mx-4 btn btn-warning mb-3 float-end`}>Download PDF</button>
            <div className={`${showColores}`}><Colores onChange={changeColor} /></div> 
  </div>
</div>




</>)
}

export default Template3;