
  import React,{useState} from "react"
  import * as yup from 'yup'
  import { useFormik } from "formik";
  import axios from "axios";
  import jsPDF from "jspdf";
  import Inputes from "../inputes";
  // import {formikValidate} from '..helper/'
 

// const [name,setName] = useState('');

function handleChange(){
  console.log('masih')
}


const Template1 = () =>{

return(<>
  <Inputes onChange={handleChange} />


<div className="text-primary">{name}</div>


{/* 
  <div className={`${showLive}`} >
    <div className="template2 mx-2"  >

      <div className="row p-2 pure-cv" id="full_CV" style={{backgroundColor:`${values.bodyColor}`, color:`${values.bodyFontColor}`}}>
        <div className="col-6 one" >
          <div className="shadow" style={{backgroundColor:`${values.headerColor}`}}>
          <div className="ps-2  pt-4"><img src={image}  className="prof2" width="150" height="200"  /></div>
          <div className="mt-3  ps-2"> 
            
            <h2>Profile</h2>
            <p>{values.summery}</p>

            <div className="mt-3">

              <h2 className=" border-bottom border-primary">Contact</h2>
              <div className="">
              <h6>Phone</h6>
              <p className="px-1">{values.phone}</p>
              <h6 className="px-1">Social media:</h6>
              <p className="px-1">{values.linkedin}</p>
              <h6 className="px-1"> E-mail:</h6>
              <p className="px-1">{values.email}</p>
              
              
              </div>
            </div>

          </div>
        
          </div>
          </div>
        <div className="col-6 mt-2 two px-3">
          <h2 className="text-uppercase">{values.name}</h2>
          <h4 className="mt-1 text-uppercase">{values.lastName}</h4>
          <h5 className="px-1">{values.jobTitle}</h5>
          
          
          <h2 className="mt-4">Education</h2>
               {values.university} at {values.faculty} in {values.degree} {`${values.startUni} - ${values.endUni}`}
          <h2 className="mt-3">Experience</h2>
            <p> work in <b>{values.experince}</b>: <br /> <b>{values.post}</b> position Start <br /> {`${values.startDate} to ${values.endDate}`} </p>
          
          <h2>Skills</h2>
            {[values.skills.split(',').map((skill,ind) =><span className="mx-1 badge bg-primary" key={ind}>{skill}</span>)]}

          <h2>Language</h2>
          {[values.language].map((lang,ind) => <li key={ind}>{lang} / {values.language_level} </li>)}
          {[NewLanguage.map((lang,index) => <li className="" key={index}>{lang} / {NewLanguage_level[index]}</li>)]}

        </div>

      </div>


    </div>
  </div>


 </div>
          <div className={showColores}>
            <input className="color" id="bodyColor" type="color" value={values.bodyColor} onChange={handleChange}/>
            <input className="color" id="bodyFontColor" type="color" value={values.bodyFontColor} onChange={handleChange}/>
            <input className="color" id="headerColor" type="color" value={values.headerColor} onChange={handleChange}/>
            <button onClick={creatPdf} className="btn btn-warning mb-3 float-end">Download PDF</button>
       
          </div> */}
</>
  )

}

export default Template1;