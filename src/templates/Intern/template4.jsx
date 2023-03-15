
  import React,{useState} from "react"
  import * as yup from 'yup'
  import { useFormik } from "formik";
  import jsPDF from "jspdf";
  import InternForms from "../Intern/internForms";





const Template4 = () =>{

  const [name,setName] = useState('');
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
  const [lastName,setLastName]  = useState();
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
 
 
 
  const showData =(data) =>{
   setName(data.name);
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
      <InternForms onMouseDown={showDownloadBtn} onChange={showData} onClick={showProf}/>
    </div>
    <div className={`col ${showLive}`}>
      <div className="template2  mx-2" >
        <div className="row  pure-cv p-2" id="full_CV" style={{backgroundColor:`${bodyColor}`, color:`${bodyFontColor}`}}>
          <div className="col-6 one" >
           
            <div className="  ps-2  pt-4">
              <h5 className="text-uppercase ms-3" style={{color:`${titleFontColor}`}}>{name}</h5>
              <h3 className="mt-1 pb-3 ms-3  text-uppercase"  style={{color:`${titleFontColor}`}}>{lastName}</h3>
            </div>
            
            <div className="title-line mt-4" style={{backgroundColor:`${titleFontColor}`}}></div>
              <p className="text-end me-5 mt-3" style={{color:`${titleFontColor}`}}>Name</p>
              <p className="text-end d-block me-5" style={{color:`${titleFontColor}`}}>Email</p>
              <p className="text-end me-5" style={{color:`${titleFontColor}`}}>DOB</p>
              <p className="text-end me-5" style={{color:`${titleFontColor}`}}>Protfolio</p>

              <div className="title-line mt-5" style={{backgroundColor:`${titleFontColor}`}}></div>
              <p className="mt-3 text-center ms-3" style={{color:`${titleFontColor}`}}>{startDate} - {endDate}</p>

              <div className="title-line mt-5" style={{backgroundColor:`${titleFontColor}`}}></div>
              <p className="mt-3 text-center ms-5" style={{color:`${titleFontColor}`}}>{startUni} - {endUni}</p>

              <div className="title-line mt-5" style={{backgroundColor:`${titleFontColor}`}}></div>
              <div className="title-line mt-5"></div>

            </div>
            <div className="col-6 mt-2 two px-3">
              <img src={image} className="prof4 mt-3 ms-5" width="150" height="200"  />
              <h4 className="mt-4" style={{color:`${titleFontColor}`}}>Personal </h4>
              
              <div className="">
                <p className="px-1">{name}</p>
                <p className="px-1 "> {email}</p>
                <p className="px-1"> {DoB}</p>
                <p className="px-1 ">{linkedin}</p>
              </div>
        
              <h4 className="mt-4 " style={{color: titleFontColor}}>Experience</h4>
              {experience} Componey in {post} Position
              
              <h4 className="mt-2 " style={{color:`${titleFontColor}`}}>Education</h4>
              {university} at {faculty} in {degree} 

              <h4 className="mt-3" style={{color:`${titleFontColor}`}}>Language</h4>
                <ol>{language} / {language_level}</ol> 
                {NewLanguage.map((lang,index) => <ol className="rome" key={index}>{lang} / {NewLanguage_level[index]}</ol>)}

              <h4 className="" style={{color:`${titleFontColor}`}}>Skills</h4>
                {[skills.split(',').map((skill,ind) =><span className="mx-1 badge bg-primary" key={ind}>{skill}</span>)]} 
            </div>
        </div>
              <button onClick={creatPdf} className={`btn btn-warning mx-4 mb-3 float-end ${downloadBtn}`}>Download PDF</button>
      </div>
    </div>
  </div>

  </>)
}

export default Template4;