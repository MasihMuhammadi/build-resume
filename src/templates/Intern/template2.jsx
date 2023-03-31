
  import React,{useState} from "react"
  import * as yup from 'yup'
  import { useFormik } from "formik";
  import jsPDF from "jspdf";
  import InternForms from "../Intern/internForms";
  import Colores from "../colores";




const Template2 = () =>{
  
   
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
 const [address,setAddress] = useState('');
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
 const [downloadBtn,setDownloadBtn] = useState('d-none')
 const [showLiveCenter,setShowLiveCenter] = useState('row');
const [style,setStyle] = useState('d-none col d-sm-block');
const [inputes,setInputes] = useState('col-sm')


 const showData =(data,newLang,newLangLevel) =>{
  setName(data.name);
  setLastName(data.lastName);
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
  setLinkedin(data.linkedin);
  setAddress(data.address);
  setProject(data.project);
  setInterest(data.interests);
  setLanguage(data.language);
  setLanguage_level(data.language_level);
  setNewLanguage(newLang);
  setNewLanguage_level(newLangLevel)

  

 }

 const changeColor = (bodyColor,bodyFontColor,headerColor) =>{
  setBodyColor(bodyColor);
  setBodyFontColor(bodyFontColor);
  setHeaderColor(headerColor);

}
// const showProf = (img,changeStyle) =>{
//  setImage(img)

// }

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
    setShowColores('d-inline');
    setInputes('')
    setStyle('d-block ');
   setShowLiveCenter('showLive');
  }

return(<>
  <div className={`bg-dark ${showLiveCenter}`}>
    <div className={`${inputes}`}>
      <InternForms onMouseDown={showDownloadBtn} onChange={showData} />
    </div>
    <div className={`${style}`}>
      <div className="template2  mx-2"  >
        <div className="row p-2 pure-cv" id="full_CV" style={{backgroundColor:`${bodyColor}`, color:`${bodyFontColor}`}}>
          
          <div className="col-6 one" >
            <div className="shadow h-100" style={{backgroundColor:`${headerColor}`}}>
              {/* <div className="  ps-2  pt-4"><img src={image} className="rounded-circle" width="170" height="170"  /></div> */}
              
              <div className="mt-5  ps-3"> 
                <h5 className="px-1 text-capitalize">{name} </h5>
                <h5 className="px-1 text-capitalize">{lastName}</h5>
                <h6 className="px-1 text-capitalize">{jobTitle}</h6>

                <div className="mt-5">
                  <h4 className="">Contact</h4>
                  <div className="">
                  <h6>Phone</h6>
                  <p className="px-1">{phone}</p>
                  <h6 className="px-1">Social media:</h6>
                  <p className="px-1">{address}</p>
                  <h6>Email</h6>
                  <p className="px-1" style={{fontSize:`12px`}}>{email}</p>
                </div>
                  <div>
                    <h4>Interestes</h4>
                    {[interest.split(',').map((int,ind) =><li className="mx-1 bg-transparent" 
                    style={{background:`${bodyColor}`,color:`${bodyFontColor}`}} key={ind}>{int}</li>)]}
                  </div>
              </div>

            </div>
          </div>
        </div>

        <div className="col-6 mt-2 two px-3">
          <h5 className="fw-bold">Summery</h5>
          <span >{summery} </span>
          <h5 className="mt-4 fw-bold">Experience</h5>
          <p> work in {experience}: <br /> {post} position Start <br /> {`${startDate} to ${endDate}`} </p>
          <h5 className="mt-4 fw-bold">Skills</h5>
          {[skills.split(',').map((sk,index) => <div className="badge p-2 mx-1"  style={{color:`${bodyColor}`,background:`${headerColor}`}}key={index}>{sk}</div>)]}
          <h5 className="mt-4 fw-bold">Education</h5>
          {university} at {faculty} in {degree} {`${startUni} - ${endUni}`}
          <div>
              <p className="text-capitalize fw-bold">Languages</p>
                <ol>{language} / <span className="opacity-75">{language_level}</span></ol> 
                {NewLanguage.map((lang,index) => <ol className="" key={index}>{lang} / <span className="opacity-75">{NewLanguage_level[index]}</span></ol>)}
              </div>

        </div>

      </div>
      <div className={`${showColores}`}><Colores onChange={changeColor}/></div>
      <button onClick={creatPdf} className={`btn btn-warning mx-4 mb-3 float-end ${downloadBtn}`}>Download PDF</button>
    </div>
  </div>
</div>
</>

 )
}

export default Template2;
  