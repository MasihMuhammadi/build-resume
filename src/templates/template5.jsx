
  import React,{useState} from "react"
  import * as yup from 'yup'
  import { useFormik } from "formik";
  import jsPDF from "jspdf";
import Inputes from "../inputes";




const Template5 = () =>{

  
  return(
    <>

    <Inputes />
 

  {/* <div className={`${showLive}`}>
    <div className="template2 mx-2" >

      <div className="row  p-3  pure-cv" id="full_CV" style={{backgroundColor:`${values.bodyColor}`, color:`${values.bodyFontColor}`}}>
        <div className="col-6 one" >
       
          <div className="  ps-2  pt-4">
        <img src={image} className="prof4 mt-3 ms-2" width="150" height="200"  />
            
          </div>
            
          <h4 className="mt-4 mx-2" style={{color: values.titleFontColor}}>summery</h4>
          <p className="mx-2">{values.summery }</p> 

            <h4 className="mt-4 mx-2" style={{color:`${values.titleFontColor}`}}>Skills</h4>
            {[values.skills.split(',').map((skill,ind) =><span className="mx-1 badge  bg-primary" key={ind}>{skill}</span>)]} 

           
            <h4 className="mt-4 mx-2" style={{color:`${values.titleFontColor}`}}>Language</h4>
             {[values.language].map((lang,index) => <li className="mx-2" key={index}>{lang} / {values.language_level}</li>)}
             {[NewLanguage.map((lang,index) => <li className="" key={index}>{lang} / {NewLanguage_level[index]}</li>)]}
            

          </div>

        <div className="col-6 mt-2 two px-3">

          <h2 className="mt-4 text-capitalize " style={{color: values.titleFontColor}}>{values.name}</h2>
          <h2 className="mt-4 text-capitalize d-inline mx-1" style={{color: values.titleFontColor}}>{values.lastName}</h2>
        
          <h4 className="mt-5 " style={{color:`${values.titleFontColor}`}}>Education</h4>
            {values.university} at {values.faculty} in {values.degree} <br />
            <p>{`${values.startUni} - ${values.endUni}`}</p>



          <h4 className="mt-4 " style={{color: values.titleFontColor}}>Experience</h4>
            <p>{values.experince}</p>
            <p>{values.post}</p>
            <p>{values.startDate} - {values.endDate}</p>

        </div>

      </div>


    </div>
  </div>
          <div className={`${showColores} colores`}>
            <input className="color" id="bodyColor" type="color" value={values.bodyColor} onChange={handleChange}/>
            <input className="color" id="bodyFontColor" type="color" value={values.bodyFontColor} onChange={handleChange}/>
            <input className="color" id="titleFontColor" type="color" value={values.titleFontColor} onChange={handleChange}/>
            <button onClick={creatPdf} className="btn btn-warning mb-3 float-end">Download PDF</button>
           
          </div>
 */}


  </>)
}

export default Template5;