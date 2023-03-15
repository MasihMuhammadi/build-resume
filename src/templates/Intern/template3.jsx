
  import React,{useState} from "react"
  import * as yup from 'yup'
  import { useFormik } from "formik";
  import jsPDF from "jspdf";
  import InternForms from "../Intern/internForms";




const Template3 = () =>{

   
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
  setDownloadBtn('d-non')
}

return(<>
  <div className="bg-dark row"> 
    <div className='col'>
      <InternForms onMouseDown={showDownloadBtn}  onChange={showData} onClick={showProf}/>
    </div>

    <div className={`col ${showLive}`}>
      <div className="template2  mx-2" >
        <div className="row p-2 pure-cv" id="full_CV" style={{backgroundColor:`${bodyColor}`, color:`${bodyFontColor}`}}>
          <div className="col-6 one" >
            
            <div className="  ps-2  pt-4">
              <img src={image} className="prof3" style={{ border:`solid 25px ${titleFontColor}`}} width="150" height="200"  /></div>
              <div className="mt-3  ps-2"> 
                <div className="mt-3">
                  <h4 className=" border-bottom border-primary" style={{color:`${titleFontColor}`}}>Contact</h4>
                  <div className="">
                    <h6>Phone</h6>
                    <p className="px-1">{phone}</p>
                    <h6 className="px-1">Address:</h6>
                    <p className="px-1">{address}</p>
                    <h6 className="px-1">Social media:</h6>
                    <p className="px-1">{linkedin}</p>
                    <h6 className="px-1"> E-mail:</h6>
                    <p className="px-1">{email}</p>
                    <h4 className="text-uppercase" style={{color:`${titleFontColor}`}}>Summery</h4>
                    <p>{summery}</p>
                  </div>
                </div>
              </div>
            </div>

          <div className="col-6 mt-2 two px-3">
      
            <h2 className="text-uppercase" style={{color:`${titleFontColor}`}}>{name}</h2>
            <h4 className="mt-1 pb-3  text-uppercase border-bottom border-primary" style={{color:`${titleFontColor}`}}>{lastName}</h4>
            <h4 className="mt-3 " style={{color: titleFontColor}}>Experience</h4>
            <p> work in <b>{experience}</b>: <br /> <b>{post}</b> position Start <br /> {`${startDate} to ${endDate}`} </p>
            <h4 className="mt-4 t" style={{color:`${titleFontColor}`}}>Education</h4>
              {university} at {faculty} in {degree} {`${startUni} - ${endUni}`}
 
            <h5 className="px-1">{jobTitle}</h5>

            <h4 className="" style={{color:`${titleFontColor}`}}>Skills</h4>
             {[skills.split(',').map((skill,ind) =><span className="mx-1 badge bg-primary" key={ind}>{skill}</span>)]}
          
            <h4 className="" style={{color:`${titleFontColor}`}}>Language</h4>
              {[language.split(',').map((lang,index) => <li key={index}>{lang} / {language_level}</li>)]}
              {[NewLanguage.map((lang,index) => <li className="" key={index}>{lang} / {NewLanguage_level[index]}</li>)]}

          </div>

         </div>
          <button onClick={creatPdf} className={`btn btn-warning mx-4 mb-3 float-end ${downloadBtn}`}>Download PDF</button>


      </div>
    </div>
  </div>
  </>)
}

export default Template3;