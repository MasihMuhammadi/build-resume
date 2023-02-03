import React,{useState} from 'react'
import { Link,Router } from 'react-router-dom';


const Templates = (props) =>{
    return<>
<div className="template-page pt-5 bg-dark align-items-center justify-content-center">
    <div className=" ">
    <Link to="template1" className=""> 
         <img src="template1.png"className="templates"/>
    </Link>
     <Link to="template2" className=""> 
         <img src="template2.png" className="templates" />
    </Link>
   <Link to="template3" className="">
         <img src="template3.png" className="templates" />
    </Link>
    <Link to="template4" className="">
         <img src="template4.png" className="templates" />
    </Link> 
    <Link to="template5" className="">
         <img src="template5.png" className="templates" />
    </Link> 

    <Link to="template6" className="">
         <img src="template5.png" className="templates" />
    </Link> 
    </div>
</div>

   

    </>
}

export default Templates;