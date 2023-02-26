
  import React,{useState} from "react"
  import * as yup from 'yup'
  import { useFormik } from "formik";
  import jsPDF from "jspdf";
  import Inputes from "../inputes";
  // import { values } from "../inputes";



const Template6 = () =>{

const [showLive,setShowLive] = useState('d-none d-lg-block');

return(
  <>
  <Inputes />

  {/* <div className={`${showLive}`}>
  <div className="template2 p-3  mx-2" id="full_CV" style={{backgroundColor:`${values.bodyColor}`,color:`${values.bodyFontColor}`}}>
  <div className="header-6 row border-bottom border-primary">
      
      <div className="col-4">
          <h4 className="name-6">{values.name}</h4>
          <h6>{values.jobTitle}</h6>
          <p>{values.summery}</p>
      </div>
      <div className="col-3">
      <img src={image} className="prof6 mt-3 ms-2" width="150" height="200"  />

      </div>
      <div className="col-5">
            <p className="px-1 d-inline"> {values.phone}</p>  
            <p className="px-1 d-inline"> {values.email}</p>
            <p className="px-1 ">{values.linkedin}</p>
      </div>

  </div>
    <div className="row  pure-cv">
      <div className="col-6 one" >

      <h5 className="mt-4 " style={{color:`${values.titleFontColor}`,borderLeft:`10px solid ${values.titleFontColor}`,fontWeight:`bold`,paddingLeft:`10px`}}>Work Experience</h5>
          <p>{values.experince}</p>
          <p>{values.post}</p>
          <p>{values.startDate} - {values.endDate}</p>
          <p>descripton</p>


         
          <h4 className="mt-4" style={{color:`${values.titleFontColor}`,borderLeft:`10px solid ${values.titleFontColor}`,fontWeight:`bold`,paddingLeft:`10px`}}>Language</h4>
           {[values.language.split(',').map((lang,index) => <li className="mx-2" key={index}>{lang} / {values.language_level}</li>)]}
           {[NewLanguage.map((lang,index) => <li className="mx-2" key={index}>{lang} / {NewLanguage_level[index]}</li>)]}

           <h4 className="mt-4" style={{color:`${values.titleFontColor}`,borderLeft:`10px solid ${values.titleFontColor}`,fontWeight:`bold`,paddingLeft:`10px`}}>Interests</h4>
           {[values.interests.split(',').map((interest,ind) =><span className={`mx-1 `} style={{border:`1px solid ${values.titleFontColor}`,borderRadius:`3px`,padding:'2px',color:`${values.titleFontColor}`}} key={ind}>{interest}</span>)]} 
        </div>

      <div className="col-6 mt-2 two px-3">
    
      <h4 className="mt-4 " style={{color:`${values.titleFontColor}`,borderLeft:`10px solid ${values.titleFontColor}`,fontWeight:`bold`,paddingLeft:`10px`}}>Skills</h4>
      {[values.skills.split(',').map((skill,ind) =><span className="mx-1 badge  bg-primary" key={ind}>{skill}</span>)]} 


        <h4 className="mt-5 " style={{color:`${values.titleFontColor}`,borderLeft:`10px solid ${values.titleFontColor}`,fontWeight:`bold`,paddingLeft:`10px`}}>Education</h4>
        <b>{values.faculty}</b> at {values.university} in {values.degree} <br />
          <p>{`${values.startUni} - ${values.endUni}`}</p>

        <h4 className="mt-4 " style={{color:`${values.titleFontColor}`,borderLeft:`10px solid ${values.titleFontColor}`,fontWeight:`bold`,paddingLeft:`10px`}}>Projects</h4>
          <a href={`${values.project}`}>{values.project}</a>
          
      </div>

    </div>


  </div>
        <div className={showColores}>
          <input className="color" id="bodyColor" type="color" value={values.bodyColor} onChange={handleChange}/>
          <input className="color" id="bodyFontColor" type="color" value={values.bodyFontColor} onChange={handleChange}/>
          <input className="color" id="titleFontColor" type="color" value={values.titleFontColor} onChange={handleChange}/>
          <button onClick={creatPdf} className="btn btn-warning mb-3 float-end">Download PDF</button>
        </div>
</div> */}

  </>
)
}

export default Template6;