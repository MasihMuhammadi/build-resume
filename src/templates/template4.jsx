
  import React,{useState} from "react"
  import * as yup from 'yup'
  import { useFormik } from "formik";
  import jsPDF from "jspdf";
import Inputes from "../inputes";




const Template4 = () =>{


  return(<>
  <Inputes />

  {/* <div className={`${showLive}`}>
    <div className="template2  mx-2" >

      <div className="row  pure-cv p-2" id="full_CV" style={{backgroundColor:`${values.bodyColor}`, color:`${values.bodyFontColor}`}}>
        <div className="col-6 one" >
       
          <div className="  ps-2  pt-4">
            <h5 className="text-uppercase ms-3" style={{color:`${values.titleFontColor}`}}>{values.name}</h5>
            <h3 className="mt-1 pb-3 ms-3  text-uppercase"  style={{color:`${values.titleFontColor}`}}>{values.lastName}</h3>
          </div>
            
          <div className="title-line mt-4" style={{backgroundColor:`${values.titleFontColor}`}}></div>
          <p className="text-end me-5 mt-3" style={{color:`${values.titleFontColor}`}}>Name</p>
          <p className="text-end d-block me-5" style={{color:`${values.titleFontColor}`}}>Email</p>
          <p className="text-end me-5" style={{color:`${values.titleFontColor}`}}>DOB</p>
          <p className="text-end me-5" style={{color:`${values.titleFontColor}`}}>Protfolio</p>

          <div className="title-line mt-5" style={{backgroundColor:`${values.titleFontColor}`}}></div>
          <p className="mt-3 text-center ms-3" style={{color:`${values.titleFontColor}`}}>{values.startDate} - {values.endDate}</p>

          <div className="title-line mt-5" style={{backgroundColor:`${values.titleFontColor}`}}></div>
          <p className="mt-3 text-center ms-5" style={{color:`${values.titleFontColor}`}}>{values.startUni} - {values.endUni}</p>


          <div className="title-line mt-5" style={{backgroundColor:`${values.titleFontColor}`}}></div>

          <div className="title-line mt-5"></div>





          </div>
        <div className="col-6 mt-2 two px-3">
        <img src={image} className="prof4 mt-3 ms-5" width="150" height="200"  />
     


        <h4 className="mt-4" style={{color:`${values.titleFontColor}`}}>Personal </h4>
        <div className="">
            
              <p className="px-1">{values.name}</p>
              <p className="px-1 "> {values.email}</p>
              <p className="px-1"> {values.DoB}</p>
              <p className="px-1 ">{values.linkedin}</p>

            </div>
        
    
          <h4 className="mt-4 " style={{color: values.titleFontColor}}>Experience</h4>
          {values.experince} Componey in {values.post} Position
          
          <h4 className="mt-2 " style={{color:`${values.titleFontColor}`}}>Education</h4>
               {values.university} at {values.faculty} in {values.degree} 

         
          <h4 className="mt-3" style={{color:`${values.titleFontColor}`}}>Language</h4>
            <ol>{values.language} / {values.language_level}</ol> 

          {NewLanguage.map((lang,index) => <ol className="rome" key={index}>{lang} / {NewLanguage_level[index]}</ol>)}


          
          
          
          <h4 className="" style={{color:`${values.titleFontColor}`}}>Skills</h4>
            {[values.skills.split(',').map((skill,ind) =><span className="mx-1 badge bg-primary" key={ind}>{skill}</span>)]} 
 

        </div>

      </div>


          <div className={showColores}>
            <input className="color" id="bodyColor" type="color" value={values.bodyColor} onChange={handleChange}/>
            <input className="color" id="bodyFontColor" type="color" value={values.bodyFontColor} onChange={handleChange}/>
            <input className="color" id="titleFontColor" type="color" value={values.titleFontColor} onChange={handleChange}/>
            <button onClick={creatPdf} className="btn btn-warning mb-3 float-end">Download PDF</button>
            
          </div>
    </div>
  </div> */}



  </>)
}

export default Template4;