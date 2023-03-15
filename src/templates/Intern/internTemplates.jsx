import React,{useState} from 'react'
import { Link } from 'react-router-dom';
     
const InternTemplates = () =>{
    return(<>
    <div className="templates-page pt-5 bg-dark align-items-center justify-content-center">

    <Link to="template1" className=""> 
         <img src="/template1.png" className="templates"/>
    </Link>
     <Link to="template2" className=""> 
         <img src="/template2.png"className="templates" />
    </Link>
   <Link to="template3" className="">
         <img src="/template3.png" className="templates" />
    </Link>
    <Link to="template4" className="">
         <img src="/template4.png" className="templates" />
    </Link> 
    <Link to="template5" className="">
         <img src="/template5.png" className="templates" />
    </Link> 

    <Link to="template6" className="">
         <img src="/template6.png" className="templates" />
    </Link> 
    </div>
    </>)
}
export default InternTemplates;