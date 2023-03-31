import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const MediumTemplates = () =>{
    return(<>
    <div className="templates-page pt-5 bg-dark align-items-center justify-content-center">
     
    <Link to="m_template1" className=""> 
         <img src="/m_template1.png" className="templates"/>
    </Link>
     <Link to="m_template2" className=""> 
         <img src="/m_template2.png"className="templates" />
    </Link>
   <Link to="m_template3" className="">
         <img src="/m_template3.png" className="templates" />
    </Link>
    <Link to="m_template4" className="">
         <img src="/m_template4.png" className="templates" />
    </Link> 
    <Link to="m_template5" className="">
         <img src="/m_template5.png" className="templates" />
    </Link> 

    <Link to="m_template6" className="">
         <img src="/m_template6.png" className="templates" />
    </Link> 
    </div>
    </>)
}
export default MediumTemplates;