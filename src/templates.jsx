
import React,{useEffect, useState} from 'react'
import { Link,Router } from 'react-router-dom';


const Templates = (props) =>{
  
return<>

    <div className=" resume-levels pt-5 bg-dark ">
        
        <div className="row">
            <div   className=" card py-2 mx-2 mt-2 col-sm shadow-lg shadow-light">
                 <div style={{fontSize:'12px'}}>
                    <p>You are an Intern?</p>
                    <p>You haven't experience?</p>
                    <p>You havent' certificate?</p>
                 </div>
                    <p className="text-center">use this templates </p>
                <Link to="internTemplates" className="btn btn-dark">   Show Templates </Link>
            </div>

            <div className="card mx-2 mt-2 col-sm shadow-lg shadow-light">
            <div style={{fontSize:'12px'}}>
                    <p>You are an Intermediate?</p>
                    <p>You have experience?</p>
                    <p>You havent' certificate?</p>
                 </div>
                 <p className="text-center">use this templates </p>

                <Link to="mediumTemplates" className="btn btn-dark">   Show Templates </Link>           
            </div>
            <div className="card mx-2 mt-2 col-sm shadow-lg shadow-light">     
                <div style={{fontSize:'12px'}}>
                    <p>You are an Expert?</p>
                    <p>You have experience?</p>
                    <p>You haven certificate?</p>
                 </div>
                 <p className="text-center">use this templates </p>

                <Link to="expertTemplates" className="btn btn-dark">   Show Templates </Link>
            </div>

        </div>
    </div>

   

    </>
}

export default Templates;