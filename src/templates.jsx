
import React,{useState} from 'react'
import { Link,Router } from 'react-router-dom';


const Templates = (props) =>{
    
    return<>
<div className=" resume-levels pt-5 bg-dark ">
  
    <div className="row">
          <div className="card mx-2 mt-2 col-sm ">
             <div className="card-body">
               <h5 className="card-title  fw-bold">Intern Field</h5>
                    <p className="card-text">
                          <ul >
                              <li>You haven't Experience</li>
                              <li>You haven't any certificate</li>
                          </ul>
                    </p>
                    <Link to="internTemplates" className="btn btn-dark">   Show Templates </Link>
            </div>
          </div>



          <div className="card mx-2 mt-2 col-sm ">
             <div className="card-body">
               <h5 className="card-title fw-bold">Intermediate Field</h5>
                    <p className="card-text">
                          <ul>
                              <li >You have Experience </li>
                              or
                              <li >You have Certificates</li>

                          </ul>
                    </p>
                    <Link to="mediumTemplates" className="btn btn-dark">   Show Templates </Link>
            </div>
          </div>

          <div className="card mx-2 mt-2 col-sm shadow-lg shadow-light">
             <div className="card-body">
               <h5 className="card-title fw-bold">Proffesional Field</h5>
                    <p className="card-text">
                          <ul>
                              <li>You have Experience</li>
                              <li>You have any certificate</li>
                          </ul>
                    </p>
                    <Link to="internTemplates" className="btn btn-dark">   Show Templates </Link>
            </div>
          </div>










    </div>
</div>

   

    </>
}

export default Templates;