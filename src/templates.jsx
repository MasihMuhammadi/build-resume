import React,{useState} from 'react'
import { Link,Router } from 'react-router-dom';


const Templates = (props) =>{
    return<>
<div className="template-page pt-5 bg-dark">
    <div className="row  mx-3 jusity-content-center">
    <Link to="/templates/customResume" className="col-lg-4 col-md-5 mx-4 mx-lg-0"> 
    <img src="template1.png" width="360" height="500" className="templates"/>
    <div className="try btn btn-outline-light btn-outline-light">Try this Template</div>
    </Link>
    <Link to="/templates/customResume" className="col-lg-4 col-md-5 mx-4 mx-lg-0 my-1"> <img src="template2.png" className="templates" width="360" height="500"/>
    <div className="try btn btn-outline-light btn-outline-text-light">Try this Template</div>
    </Link>
    <Link to="/templates/customResume" className="col-lg-4 col-md-5 mx-4 mx-lg-0"> <img src="template3.png" className="templates" width="360" height="500"/>
    <div className="try btn btn-outline-light btn-outline-text-light">Try this Template</div>
    </Link>
    <Link to="/templates/customResume" className="col-lg-4 col-md-5 mx-4 mx-lg-0"> <img src="template4.png" className="templates" width="360" height="500"/>
    <div className="try btn btn-outline-light btn-outline-text-light">Try this Template</div>
    </Link>
    </div>
</div>

   

    </>
}

export default Templates;