import React,{useState} from 'react'
import { Link,Router } from 'react-router-dom';


const Templates = (props) =>{
    return<>
<div className="template-page pt-5 bg-dark">
    <div className=" jusity-content-center">
    <Link to="/templates/customResume" className=""> 
         <img src="template1.png" width="360" height="500" className="templates"/>
    </Link>
    <Link to="/templates/customResume" className=""> 
         <img src="template2.png" className="templates" width="360" height="500"/>
    </Link>
    <Link to="/templates/customResume" className="">
         <img src="template3.png" className="templates" width="360" height="500"/>
    </Link>
    <Link to="/templates/customResume" className=" ">
         <img src="template4.png" className="templates" width="360" height="500"/>
    </Link>
    </div>
</div>

   

    </>
}

export default Templates;