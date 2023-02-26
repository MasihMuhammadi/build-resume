
  import React,{useState} from "react"
  import * as yup from 'yup'
  import { useFormik } from "formik";
  import jsPDF from "jspdf";
import Inputes from "../inputes";



const Template3 = () =>{


  return(<>
  <Inputes />

  {/* <div className={`${showLive}`}>
    <div className="template2  mx-2" >

      <div className="row p-2 pure-cv" id="full_CV" style={{backgroundColor:`${values.bodyColor}`, color:`${values.bodyFontColor}`}}>
        <div className="col-6 one" >
       
          <div className="  ps-2  pt-4">
            <img src={image} className="prof3" style={{ border:`solid 25px ${values.titleFontColor}`}} width="150" height="200"  /></div>
          <div className="mt-3  ps-2"> 

          
            

            <div className="mt-3">

              <h4 className=" border-bottom border-primary" style={{color:`${values.titleFontColor}`}}>Contact</h4>
              <div className="">
              <h6>Phone</h6>
              <p className="px-1">{values.phone}</p>
              <h6 className="px-1">Address:</h6>
              <p className="px-1">{values.address}</p>
              <h6 className="px-1">Social media:</h6>
              <p className="px-1">{values.linkedin}</p>
              <h6 className="px-1"> E-mail:</h6>
              <p className="px-1">{values.email}</p>
              
              <h4 className="text-uppercase" style={{color:`${values.titleFontColor}`}}>Summery</h4>
           <p>{values.summery}</p>

            
              </div>
            

          </div>
        
          </div>
          </div>
        <div className="col-6 mt-2 two px-3">
          
        <h2 className="text-uppercase" style={{color:`${values.titleFontColor}`}}>{values.name}</h2>
          <h4 className="mt-1 pb-3  text-uppercase border-bottom border-primary" style={{color:`${values.titleFontColor}`}}>{values.lastName}</h4>
        
         

          <h4 className="mt-3 " style={{color: values.titleFontColor}}>Experience</h4>
            <p> work in <b>{values.experince}</b>: <br /> <b>{values.post}</b> position Start <br /> {`${values.startDate} to ${values.endDate}`} </p>
          
          <h4 className="mt-4 t" style={{color:`${values.titleFontColor}`}}>Education</h4>
              {values.university} at {values.faculty} in {values.degree} {`${values.startUni} - ${values.endUni}`}
         
          
          <h5 className="px-1">{values.jobTitle}</h5>
          
          
          <h4 className="" style={{color:`${values.titleFontColor}`}}>Skills</h4>
            {[values.skills.split(',').map((skill,ind) =><span className="mx-1 badge bg-primary" key={ind}>{skill}</span>)]}

          <h4 className="" style={{color:`${values.titleFontColor}`}}>Language</h4>
          {[values.language.split(',').map((lang,index) => <li key={index}>{lang} / {values.language_level}</li>)]}
          {[NewLanguage.map((lang,index) => <li className="" key={index}>{lang} / {NewLanguage_level[index]}</li>)]}



        
    
        </div>

      </div>


    </div>
  </div>
          <div className={`${showColores} colores`}>
            <input  className="color " id="bodyColor" type="color" value={values.bodyColor} onChange={handleChange}/>
            <input  className="color " id="bodyFontColor" type="color" value={values.bodyFontColor} onChange={handleChange}/>
            <input  className="color " id="titleFontColor" type="color" value={values.titleFontColor} onChange={handleChange}/>
            <button onClick={creatPdf} className="btn btn-warning mb-3 float-end">Download PDF</button>

          </div> */}


  </>)
}

export default Template3;