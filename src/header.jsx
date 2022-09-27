import React,{useState} from 'react'


const Header = ({profPicture,name,jobTitle,headerFontColor,headerColor}) => {
    
    return (
    <div className="header ps-3" style={{background:`${headerColor}`,color:`${headerFontColor}`}}>
        
        <img src="./masih.jpg" width="70" className=" prof" />

        <div className="float-end">
        <h4 className=" text-capitalize ">{name}</h4> 
        <h6 className=" "> {jobTitle}</h6>
        
        </div>
    </div>)
}

export default Header;