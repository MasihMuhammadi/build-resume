
  import React,{useState} from "react"
const Template2 = () =>{
  const [name,setName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('')
  const [location,setLocation] = useState('')
  const [education,setEducation] = useState('')
  const [startDate,setStartDate] = useState('');
  const [endDate,setEndDate] = useState('');
  const [linkedin,setLinkedin] = useState('')
  const [facebook,setFacebook] = useState('')
  const [github,setGithub] = useState('')
  const [phone,setPhone] = useState('')
  const [university,setUniversity] = useState('');
  const [faculty,steFaculty] = useState('');
  const [degree,setDegree] = useState('')
  const [startUni,setStartUni] = useState('');
  const [endUni,setEndUni] = useState('');

  
  const [jobTitle,setJobTitle] = useState('');
  const [addLanguage,setAddLanguage] = useState();
  const [experince,setExperience] = useState();
  const [post,setPost] = useState('');
  const [summery,setSummery] = useState('');


  const [partOne,setPartOne] = useState('partOne');
  const [partTwo,setPartTwo] = useState('d-none');
  const [partThree,setPartThree] = useState('d-none');



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

  const enterName = (event) =>{
    setName(event.target.value);
  }
  const enterLastName = (event) =>{
    setLastName(event.target.value);
  }
  const enterEmail = (event) =>{
    setEmail(event.target.value);
  }
  
  
  const enterJobTitle = (event) =>{
    setJobTitle(event.target.value)
  }
  const enterphone = (event) =>{
    setPhone(event.target.value)
  }
  
  const enterLinkedin = (event) =>{
    setLinkedin(event.target.value)
  }
  
  const enterExperince = (event) =>{
    setExperience(event.target.value)
  }

  const enterStartDate = (event) =>{
    setStartDate(event.target.value)
  }
  const enterEndDate = (event) =>{
    setEndDate(event.target.value)
  }
  const enterUni = (event) =>{
    setUniversity(event.target.value)
  }
  const enterFaculty = (event) =>{
    steFaculty(event.target.value)
  }
  const enterUniStart = (event) =>{
    setStartUni(event.target.value);
  }

  const enterUniEnd = (event) =>{
    setEndUni(event.target.value);
  }
 const enterDegree = (event) =>{
  setDegree(event.target.value)
 }
  const entersummery = (event) =>{
    setSummery(event.target.value)
  }
 
   const enterPost = (event) =>{
    setPost(event.target.value)
   }
   const enterLevel = (event) =>{
    setLevel(event.target.value)
   }


  const showPartOne = (event) =>{
    setPartOne('partOne');
    setPartTwo('d-none');
    setPartThree('d-none')
  }
  const showPartTwo = (event) =>{
    setPartOne('d-none');
    setPartTwo('partTwo');
    setPartThree('d-none')
  }
  const showPartThree = (event) =>{
    setPartOne('d-none');
    setPartTwo('d-none');
    setPartThree('partThree');
   
  }
  const goback = () =>{
    alert('go back')
  }
  
   

  return(<>
      <div className=''>
  
  <div className='inputes bg-dark pt-5 row'>
  <div className="col-6 col-md-8">

    <div className={`mx-2 ${partOne} text-light`}>
     <label htmlFor="name">Name</label>  <br /> 
     <input  type="text" id="name" onChange={enterName} placeholder="enter your name" required />  <br />
 
    <label htmlFor="lastName">LastName</label>  <br />
    <input  type="text" id="lastName" onChange={enterLastName} placeholder="enter your Last name" required />  <br />

    <label htmlFor="job">Job Title</label> <br />
     <input type="text" id="job" onChange={enterJobTitle} placeholder="enter your  jobTitle" /> <br />
      
     <label htmlFor="phone">Phone </label>  <br />
     <input type="text"   id="phone"    onChange={enterphone} placeholder="your phone number" />  <br />
   
    <label htmlFor="linkedin">Linkedin Url</label>  <br />
    <input type="text" id="linkedin" onChange={enterLinkedin} placeholder=" your linkedin Url" /> <br />
   
    <label htmlFor="email">Email Address</label> <br ></br>
    <input type="email"   id="email"    onChange={enterEmail} placeholder=" your Email" /> <br />
    
    <input type="file" multiple={false}  /> <br />

   <button className="btn btn-sm btn-outline-light" onClick={showPartTwo}>Save and continue</button>
     
   
    
        </div>

 
  
    <div className={`mx-2 ${partTwo}`}>
  
     
       <label htmlFor="name">Summery</label><br />
         <textarea  type="text" id="summery" onChange={entersummery} placeholder="tell us about your self" required ></textarea> <br />
    
         <label htmlFor="experince">Experince</label> <br /> 
         <input  type="text" id="experince" onChange={enterExperince} placeholder="enter company name" required /> <br />

         <label htmlFor="post">Your Post</label> <br />
         <input type="text"   id="post" onChange={enterPost} placeholder="enter your position" /> <br />
          
    
         <label htforom="endDate">Start Date:</label><br />
         <input type="date" className="" id="startDate"  onChange={enterStartDate} placeholder="start Date"/> <br />
         <label htforom="endDate">End Date:</label> <br />
         <input className='' id="endDate"  type="date" onChange={enterEndDate} placeholder="end Date"/> <br /><br />
         <div className="btn btn-sm btn-outline-light me-4" onClick={showPartOne} >Go To Back</div> 
         <button className="btn  btn-sm btn-outline-light" onClick={showPartThree}>Save and continue</button>
 
      </div>

    <div className={`mx-2 ${partThree}`}>
      <form action="">
         
         <label htmlFor="university">University</label>  <br />
         <input type="text"   id="university" onChange={enterUni} />  <br />
         <label htmlFor="faculty">Faculty</label>  <br />
         <input type="text"  id="faculty" onChange={enterFaculty} /> <br />
         <label htmlFor="degree">Degree</label>  <br />
         <input type="text"  id="degree" onChange={enterDegree} />  <br />
        
         <label htforom="startUni">Start Date:</label> <br />
         <input type="number" className="" id="startDate"  onChange={enterUniStart} placeholder="start Date"/> <br />
         <label htforom="endUni">End Date:</label> <br />
         <input className='' id="endDate"  type="number" onChange={enterUniEnd} placeholder="end Date"/> <br /><br />
        
        <div className="btn btn-sm btn-outline-light me-5" onClick={showPartTwo}>Go To Back</div>  
    
      

         
      </form>
    
    </div>
    
  </div> 
 

  <div className=" col-6 bg-sm-info col-md-4 d-none d-lg-block">
    <div className="template2 bg-white mx-2">

      <div className="row">
        <div className="col-5  d-inline">
          <div className="shadow">
          <div className="  ps-2  pt-4"><img src="../prof.JPG" className="prof2" width="150" height="200"  /></div>
          <div className="mt-5  ps-2">
          <h2 >{name} {lastName}</h2>
          <h5>{jobTitle}</h5>
            <div className="mt-5">


              <h4 className=" border-bottom border-primary">Contact</h4>
              <div className="">
              <h6>Phone</h6>
              <p>{phone}</p>
              <h6>Social media:</h6>
              <p>{linkedin}</p>
              <h6>Email</h6>
              <p>{email}</p>
              </div>
            </div>

          </div>
        
          </div>
          </div>
        <div className="col-7 mt-2 ">
          <span >{summery}</span>
  
          <h5 className="mt-3">Experience</h5>
          
           
            <p> work in <b>{experince}</b>: in <b>{post}</b> position from {`${startDate} to ${endDate}`} </p>
          
          

          {/* </ul>
          <h5 className="mt-4">Skills</h5>
         {[skills.split(',').map((skill,ind) => <div  className="progress bg-info">{skill}</div>)]} */}

      <h5 className="mt-4">Education</h5>
         {university} at {faculty} in {degree} {`${startUni} - ${endUni}`}


        </div>

      </div>


    </div>
  </div>


 </div>
</div>
  </>)
}

export default Template2;
  



// <div className="col-5 d-none d-lg-block">


// <div className="row" >
//          <div className="col-6 col-sm-9" >
            
//             <div className=" mt-3 " style={{backgroundColor:`${headerColor}`}} >
//             <img src="./masih.jpg" width="60"  className="mx-4 border  border-dark rounded float-start"/>
//                 <div className="" >
//                     <b className="text-capitalize" style={{color:`${headerFontColor}`}}>{name}</b><span className="d-block text-center" >{jobTitle}</span>
                 
//                 </div>
//             </div>
//             <div style={{ backgroundColor:`${fullBodyColor}`}}>
//             <div>
//               <h4 className='title2' style={{color:`${titleFontColor}`}}>Work Experince</h4>
//                 <p className="ps-3" style={{color:`${fullBodyFontColor}`}}>{experince}</p>
//             </div>

//             <div>
//                 <h4 className='title2' style={{color:`${titleFontColor}`}}>Project</h4>
//                <div className="ps-3"> <ul><li><a href={projects}>{projects}</a></li></ul></div>
//             </div>

//             <div>
//                 <h4 className='title2' style={{color:`${titleFontColor}`}}>Intrest</h4>
//                <div className="ps-3 badge badge-lg mx-1 bg-secondary "> {intrests}</div>
//             </div>
                
//             <div>
//                 <h4 className='title2' style={{color:`${titleFontColor}`}}>education</h4>
//                 <p className="ps-3"  style={{color:`${fullBodyFontColor}`}}>{education}</p>
//             </div>
//          </div>
//          </div>

        

//          <div className="col-6 col-sm-3">
//     <div className="card " style={{backgroundColor:`${bodyColor}`,color:`${bodyFontColor}`}}>
//     <div className="card-body">
//         <div>{phone}</div>
//         <div>{facebook}</div>
//         <div>{github}</div>
//         <div>{location}</div>
//         <div>{linkedin} </div>
//         <div>{email}</div>
//     </div>
//     </div>

//     <div className='card  mt-2' style={{backgroundColor:`${bodyColor}`,color:`${bodyFontColor}`}}>
//         <div className="card-body">
//             <div className="mb-3 text-uppercase">Skills</div>
//             <div className=''>{[skills].map((skill,index) =>{<div key={index} className="ps-3 badge p-2 bg-secondary mx-1">{skill}</div>})}</div>
//         </div>
//     </div>
//     <div className='card mt-2 ' style={{backgroundColor:`${bodyColor}`,color:`${bodyFontColor}`}}>
//         <div className="card-body">
//             <div className="d-block text-uppercase">Certificates</div>  
            
//         </div>
//     </div>

//     <div className='card  mt-2 ' style={{backgroundColor:`${bodyColor}`,color:`${bodyFontColor}`}}>
//         <div className="card-body">
//             <div className="d-block text-uppercase">Languages</div>  
//             <div>{language}/ {level}</div>
//             <div>{language2}/ {level2}</div>
//         </div>
//     </div>
   
   
//     </div>
//     </div>

  
//  </div>