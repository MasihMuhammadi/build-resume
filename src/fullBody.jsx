import React,{useState} from 'react'

const fullBody = ({education,startDate,endDate,skills,fullBodyColor,fullBodyFontColor,experince,language2,level2,language,level,projects,intrests,titleFontColor}) =>{
    let skill = skills.split(",");
    let project = projects.split(",");
    let intrest = intrests.split(',')
return(<div className="fullBody" style={{background:`${fullBodyColor}`,color:`${fullBodyFontColor}`}}>

<div className='d-flex flex-row'>

    <div className="col">
        <div className="education">
         <h4 className="title" style={{color:`${titleFontColor}`}}>Education</h4>
            <p className="ps-3">{education}({startDate} - {endDate})</p>
        </div>
        <div className="project">
            <h4 className="title" style={{color:`${titleFontColor}`}}>Projects </h4>
            {project.map((project,index) => <ul key={index}><li >{project}</li></ul>)}
        </div>
      <div className="intrests">
        <h4 className="title" style={{color:`${titleFontColor}`}}>Intrests</h4>
        {intrest.map((item,index) => <span key={index} className="badge badge-xlg bg-secondary ms-2">{item}</span>)}
      </div>

        

    </div>

    <div className="col">
         <h4 className="title" style={{color:`${titleFontColor}`}}>Skills</h4> 
         <div className="ps-3">{skill.map((skill,index) => <span key={index} className="badge bg-secondary mx-1 ">{skill}</span>)}</div>
         <div className="Languages">
            <h4 className='title'>Languages</h4>
                <ul className="languages">
                    <li>{language}/ {level}</li>
                    <li>{language2}/ {level2}</li>
                </ul>
                
            
        </div>
        <div className="experince">
            <h4 className="title" style={{color:`${titleFontColor}`}}>Work Experince</h4>
            <p className="ps-3">{experince}</p>
        </div>

    </div>
   
</div>
</div>)
}

export default fullBody;