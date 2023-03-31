
  import React,{useState} from "react"
  import * as yup from 'yup'
  import { useFormik } from "formik";
  import jsPDF from "jspdf";
  import InternForms from "../Intern/internForms";
  import Colores from "../colores";




const Template5 = () =>{

  const [name,setName] = useState('');
  const [jobTitle,setJobTitle] = useState('');
  const [summery,setSummery] = useState('');
  const [experience,setExperience] = useState('');
  const [exp_description,setExp_Description] = useState('');
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
  const [inputes,setInputes] = useState('col-sm')
 
 
 
  const showData =(data,newLang,newLangLevel) =>{
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
   setLinkedin(data.linkedin)
   setAddress(data.address)
   setProject(data.project);
   setInterest(data.interests);
   setLanguage(data.language);
   setLanguage_level(data.language_level);
   setNewLanguage(newLang)
   setNewLanguage_level(newLangLevel)

  //  setheaderColor(data.headerColor);
 
 
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
   setShowLiveCenter('showLive')
 }

  
  return(
    <>
      <div className={`bg-dark ${showLiveCenter}`}>
        <div className={`${inputes}`}>
            <InternForms onMouseDown={showDownloadBtn}  onChange={showData} />
        </div>

        <div className={`${style}`}>
          <div className="template2 mx-2" >
            <div className="row  p-3  pure-cv" id="full_CV" style={{backgroundColor:`${bodyColor}`, color:`${bodyFontColor}`}}>
              <div className="col-6 one" >
                <div className="  ps-2  pt-4">
                  
                </div>
                <h6 className="text-capitalize">{jobTitle}</h6>
                <h4 className="mt-4 mx-2" style={{color:`${headerColor}`}}>summery</h4>
                <p className="mx-2">{summery }</p> 

                <h4 className="mt-4 mx-2" style={{color:`${headerColor}`}}>Skills</h4>
                {[skills.split(',').map((skill,ind) =><span className="mx-1 badge p-2 " style={{backgroundColor:`${bodyFontColor}`, color:`${bodyColor}`}} key={ind}>{skill}</span>)]} 
           
                <div>
                    <h4 className="mt-4 text-capitalize " style={{color: `${headerColor}`}}>Languages</h4>
                    <ol>{language} / <span className="opacity-75">{language_level}</span></ol> 
                    {NewLanguage.map((lang,index) => <ol className="" key={index}>{lang} / <span className="opacity-75">{NewLanguage_level[index]}</span></ol>)}
                  </div>
              </div>

            <div className="col-6 px-3">
              <h2 className=" text-capitalize " style={{color: `${headerColor}`}}>{name}</h2>
              <h2 className="text-capitalize mx-1" style={{color: headerColor}}>{lastName}</h2>
        
              <h4 className="mt-5 " style={{color:`${headerColor}`}}>Education</h4>
                {university} at {faculty} in {degree} <br />
                <p>{`${startUni} - ${endUni}`}</p>

              <h4 className="mt-4 " style={{color: `${headerColor}`}}>Experience</h4>
                <span>{experience}</span><br />
                <span>{post}</span><br />
                <span>{startDate} - {endDate}</span><br />
                <p>{exp_description}</p>

                <div>
                  <h4 className=" mt-4 text-capitalize" style={{color: `${headerColor}`}}>Interest</h4>
                  {[interest.split(',').map((int,ind) =><li className="mx-1 " 
                  style={{background:`${bodyColor}`,color:`${bodyFontColor}`}} key={ind}>{int}</li>)]}
                </div>
                <div className="">
                  <h4 className="mt-4 text-capitalize " style={{color: `${headerColor}`}}>Contact</h4>
                  <span >Adress : <span className="fw-bold">{address}</span></span><br />
                  <span className="" style={{color:`${bodyFontColor}`}}>Phone : <span className="fw-bold">{phone}</span> </span><br />
                  <span className="" style={{color:`${bodyFontColor}`}}>Email:  <span className="fw-bold">{email}</span></span><br />
              </div> 
             </div>
          </div>
          <div className={`${showColores}`}><Colores onChange={changeColor}/></div>
          <button onClick={creatPdf} className={`btn btn-warning mx-4 mb-3 float-end ${downloadBtn}`}>Download PDF</button>
  
        </div>
      </div>
    </div>
  </>)
}

export default Template5;