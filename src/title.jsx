import React,{useState} from 'react'
import Resume from './resume'

const Title = ({name,jobTitle}) => {
    return (
    <div className="title px-5">
        
        <img src="./masih.jpg"  className=" prof" />
      
        <h6 className="float-end ">
             <h4 className="text-capitalize">{name}</h4> 
            {jobTitle}</h6>
        
    </div>)
}

export default Title;