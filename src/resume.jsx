import { link, linkedinIn } from 'fontawesome'
import React,{useState} from 'react'
import {Link,Outlet} from 'react-router-dom'
import Title from './title'

const Resume = ({email,name,university,skills,experince,jobTitle,location,linkedin,facebook,github,phone}) =>{

    return (
    <>

            <div className='resume '>
                <Title name={name} jobTitle={jobTitle} />
                
                <div className='body  px-1 row' >
                <div className='col'>
                <span>Email: {email}</span>   <br />
                 <span>Location: {location}</span> <br />
                 <span>Email: {linkedin}</span>   <br />
                </div> 
                <div className="col">
                    <span>Facebook: {facebook}</span><br />
                    <span>Github: {github}</span><br />
                    <span>Phone: {phone}</span>
                </div>
           
            

                </div>
            </div>
      
    </>
    )
}
export default Resume;