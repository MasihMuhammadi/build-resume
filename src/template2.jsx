import React,{useState} from 'react'
import FullBody from './fullBody'
import Header from './header'
const Template2 = ({profPicture,email,name,university,skills,experince,jobTitle,location,linkedin,language2,level2,facebook,github,phone,education,startDate,endDate,language,level,projects,intrests}) =>{
   const project = projects.split(',')
   const intrest = intrests.split(',')
   const skill = skills.split(',')

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
   

   
   
   return<>
   
    <div className=''>
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
                
                
                <div className='row ps-3' style={{backgroundColor:`${bodyColor}`,color:`${bodyFontColor}`}}>
                
              
                </div>
               
            </div>
      
    <div className="row" >
         <div className="col-6 col-sm-9" >
            
            <div className=" mt-3 " style={{backgroundColor:`${headerColor}`}} >
            <img src="./masih.jpg" width="60"  className="mx-4 border  border-dark rounded float-start"/>
                <div className="" >
                    <b className="text-capitalize" style={{color:`${headerFontColor}`}}>{name}</b><span className="d-block" style={{color:`${headerFontColor}`}}>{jobTitle}</span>
                 
                </div>
            </div>
            <div style={{ backgroundColor:`${fullBodyColor}`}}>
            <div>
              <h4 className='title2' style={{color:`${titleFontColor}`}}>Work Experince</h4>
                <p className="ps-3" style={{color:`${fullBodyFontColor}`}}>{experince}</p>
            </div>

            <div>
                <h4 className='title2' style={{color:`${titleFontColor}`}}>Project</h4>
               <div className="ps-3"> {project.map((project,index) => <ul key={index}><li><a href={project}>{project}</a></li></ul>)}</div>
            </div>

            <div>
                <h4 className='title2' style={{color:`${titleFontColor}`}}>Intrest</h4>
               <div className="ps-3">{intrest.map((intrest,index) =><div key={index} className="badge badge-lg mx-1 bg-secondary "> {intrest}</div>)}</div>
            </div>
                
            <div>
                <h4 className='title2' style={{color:`${titleFontColor}`}}>education</h4>
                <p className="ps-3"  style={{color:`${fullBodyFontColor}`}}>{education}</p>
            </div>
         </div>
         </div>

        

         <div className="col-6 col-sm-3">
    <div className="card " style={{backgroundColor:`${bodyColor}`,color:`${bodyFontColor}`}}>
    <div className="card-body">
        <div>{phone}</div>
        <div>{facebook}</div>
        <div>{github}</div>
        <div>{location}</div>
        <div>{linkedin} </div>
        <div>{email}</div>
    </div>
    </div>

    <div className='card  mt-2' style={{backgroundColor:`${bodyColor}`,color:`${bodyFontColor}`}}>
        <div className="card-body">
            <div className="mb-3 text-uppercase">skills</div>
            <div className="ps-3">{skill.map((skill,index) => <div key={index} className='badge p-2 bg-secondary mx-1'>{skill}</div>)}</div>
        </div>
    </div>
    <div className='card mt-2 ' style={{backgroundColor:`${bodyColor}`,color:`${bodyFontColor}`}}>
        <div className="card-body">
            <div className="d-block text-uppercase">Certificates</div>  
            
        </div>
    </div>

    <div className='card  mt-2 ' style={{backgroundColor:`${bodyColor}`,color:`${bodyFontColor}`}}>
        <div className="card-body">
            <div className="d-block text-uppercase">Languages</div>  
            <div>{language}/ {level}</div>
            <div>{language2}/ {level2}</div>
        </div>
    </div>
   
   
    </div>
    </div>
    
    </div>
    
    </>
}

export default Template2;