import { link, linkedinIn } from 'fontawesome'
import React,{useState} from 'react'
import {Link,Outlet} from 'react-router-dom'
import Header from './header'
import FullBody from './fullBody'

const Template1 = ({profPicture,email,name,university,skills,experince,jobTitle,location,linkedin,facebook,github,phone,education,startDate,endDate,language,level,projects,intrests}) =>{
        
  const [headerColor,setHeaderColor] = useState('');
  const [headerFontColor,setHeaderFontColor] = useState('');
  const [bodyColor,setBodyColor] = useState('')
  const [bodyFontColor,setBodyFontColor] = useState('');
  const [fullBodyColor,setFullBodyColor] = useState('');
  const [fullBodyFontColor,setFullBodyFontColor] = useState('');
  const [titleFontColor,setTitleFontColor] = useState('')


  const enterBodyColor = (event) =>{
    setBodyColor(event.target.value)
  } 
  const enterBodyFontColor = (event) =>{
    setBodyFontColor(event.target.value)
  }
  const enterFullBodyColor = (event) =>{
    setFullBodyColor(event.target.value)
  } 
  const enterFullBodyFontColor = (event) =>{
    setFullBodyFontColor(event.target.value)
  }
   const enterHeaderFontColor = (event) =>{
    setHeaderFontColor(event.target.value)
   }
   const enterHeaderColor = (event) =>{
    setHeaderColor(event.target.value)
   }
  const enterTitleFontColor = (event) =>{
    setTitleFontColor(event.target.value)
  }
    return (
    <>

            <div className='resume '>
                <table>
                  <tr>
                    <td>Header Color:</td><td><input type="color" className="mx-2" name="header_color" onChange={enterHeaderColor} /></td>
                    <td>Header Font Color:</td> <td><input className="mx-2" type="color" name="font_color" onChange={enterHeaderFontColor} /></td>
                    <td>Body Color:</td><td><input type="color" className="mx-2"  name="body_color" onChange={enterBodyColor} /></td>
                    <td>Body Font Color:</td><td><input type="color" className="mx-2" name="bodyFont_color" onChange={enterBodyFontColor} /></td>
                 
                    <td> Full Body Color:</td><td><input type="color" className="mx-2" name="fullBody_color" onChange={enterFullBodyColor} /></td>
                    <td>Full Body Font Color:</td><td><input type="color" className="mx-2" name="fullBodyFont_color" onChange={enterFullBodyFontColor} /></td>
                    <td>Titles Font Color:</td><td><input type="color" className="mx-2" onChange={enterTitleFontColor} /></td>
                  </tr>
                </table>
                <Header name={name} jobTitle={jobTitle} headerColor={headerColor} headerFontColor={headerFontColor} profPicture={profPicture}/>
                
                <div className='row ps-3' style={{backgroundColor:`${bodyColor}`,color:`${bodyFontColor}`}}>
                <div className='col'>
                <span>Email: {email}</span>   <br />
                 <span>Location: {location}</span> <br />
                 <span>Email: {linkedin}</span>   <br />
                </div> 
                <div className="col">
                    <span>Facebook: {facebook}</span><br />
                    <span>Github: {github}</span><br />
                    <span>Phone: {phone}</span><br />

                </div>
                </div>
                <FullBody education={education} experince={experince} 
                startDate={startDate} endDate={endDate} skills={skills}
                 
                 language={language} level={level} projects={projects} intrests={intrests} titleFontColor={titleFontColor} fullBodyColor={fullBodyColor} fullBodyFontColor={fullBodyFontColor} />

            </div>
      
    </>
    )
}
export default Template1;