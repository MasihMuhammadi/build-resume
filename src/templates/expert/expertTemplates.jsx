import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const ExpertTemplates = () =>{
    return(<>
    <div className="templates-page pt-5 bg-dark align-items-center justify-content-center">

    <Link to="e_template1" className=""> 
         <img src="/e_template1.png" className="templates"/>
    </Link>
     <Link to="e_template2" className=""> 
         <img src="/e_template2.png"className="templates" />
    </Link>
   <Link to="e_template3" className="">
         <img src="/e_template3.png" className="templates" />
    </Link>
    <Link to="e_template4" className="">
         <img src="/e_template4.png" className="templates" />
    </Link> 
    <Link to="e_template5" className="">
         <img src="/e_template5.png" className="templates" />
    </Link> 

    <Link to="e_template6" className="">
         <img src="/e_template6.png" className="templates" />
    </Link> 
    </div>
    </>)
}
export default ExpertTemplates;