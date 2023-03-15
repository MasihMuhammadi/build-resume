
import React,{useState} from "react"
import * as yup from 'yup'
import { useFormik } from "formik";
import jsPDF from "jspdf";
import MediumForms from "../medium/medium_forms";





const M_Template1 = () =>{

   let style = {
        borderBottom:'2px solid dahsed'
    }
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
const [showLiveCenter,setShowLiveCenter] = useState('d-none d-sm-block ');
const [project,setProject] = useState('');
const [interest,setInterest] = useState('');
const [address,setAddress] = useState('');
const [DoB,setDob]= useState('');
const [downloadBtn,setDownloadBtn] = useState('d-none')


const showData =(data,newLang,NewLanglevel) =>{
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
 setPhone(data.phone);
 setEmail(data.email);
 setLinkedin(data.linkedin)
 setProject(data.project);
 setInterest(data.interest);
 setLanguage(data.language);
 setLanguage_level(data.language_level);
 setBodyColor(data.bodyColor);
 setBodyFontColor(data.bodyFontColor);
 setHeaderColor(data.headerColor);
 setTitleFontColor(data.titleFontColor);
 setNewLanguage(newLang);
 setNewLanguage_level(NewLanglevel)


}

const showProf = (img) =>{
 setImage(img)
}

const creatPdf = () =>{
    let doc = new jsPDF('p','pt','a4');
    doc.html(document.querySelector('#full_CV'),{
      callback:function(pdf){
        let pageCount = doc.internal.getNumberOfPages();
        pdf.save('my Cv')
      }
    });
  };
  // const [test,setTest] = useState()
  
  const showThat = () =>{
    setShowLiveCenter('d-block')
    // alert(showLiveCenter)
  }
  
  const showDownloadBtn = (showBtn) =>{
    setDownloadBtn('d-block')
  }
return(<>

<div className="bg-dark row">
  <div className='col'>
     <MediumForms onMouseDown={showDownloadBtn}  onChange={showData} onClick={showProf}/>
  </div>
    <div className={`col ${showLiveCenter}`}>
      <div className="template2  mx-2" >
        <div className=" pure-cv p-2" id="full_CV" style={{backgroundColor:`${bodyColor}`, color:`${bodyFontColor}`}}>
  
          <div className="" >
            <div className=" px-5 pt-4" style={{backgroundColor:`${headerColor}`}}>
            <h5 className="text-capitalize border-top border-bottom text-center" style={{color:`${bodyFontColor}`}}>{name} {lastName}</h5>
            <small className="mt-1 text-center d-block"  style={{color:`${bodyFontColor}`}}>{jobTitle}</small>
          </div>
          
          <div className="">
              <p className="fs-6 fw-bold">CONTACT</p>
              <p style={{color:`${titleFontColor}`}}>{address}</p>
              <p className="" style={{color:`${bodyFontColor}`}}>{phone} | {email}</p>
              <p className="" style={{color:`${bodyFontColor}`}}></p>
          </div> 

          <div className="p-3" style={{borderBottom:'2px dotted black',borderTop:'2px dotted black'}}>
            <p className='fw-bold fs-6'>Summery</p>
            {summery}
          </div>

          <div className="p-3" style={{borderBottom:'2px dotted black'}}>
            <p className='fw-bold fs-6'>Work Experience</p>
            <span className='border-end pe-3'>{startDate},{endDate} | {experience} in {post}</span>
          </div>


          <div className="p-3" style={{borderBottom:'2px dotted black'}}>
            <p className='fw-bold fs-6'>Education</p>
            <span className='border-end pe-3 border-dark'>{university}{startUni} {endUni}</span><span className='ps-3'>{degree} of {faculty}</span>
          </div>
    
          <div className="p-3" style={{borderBottom:'2px dotted black'}}>
              <p className='fw-bold fs-6'>Skills</p>
              <span className=''>
                {[skills.split(',').map((skill,ind) =><span className="mx-1 badge bg-primary" key={ind}>{skill}</span>)]} 
              </span>
          </div>

        </div>
     
        <h4 className="mt-3" style={{color:`${titleFontColor}`}}>Language</h4>
          <ol>{language} / {language_level}</ol> 
         {NewLanguage.map((lang,index) => <ol className="rome" key={index}>{lang} / {NewLanguage_level[index]}</ol>)}
      </div>
    </div>

            <button onClick={creatPdf} className={`${downloadBtn} mx-4 btn btn-warning mb-3 float-end`}>Download PDF</button>

  </div>
</div>




</>)
}

export default M_Template1;