
  import React,{useState} from "react"
  import * as yup from 'yup'
  import { useFormik } from "formik";




const Template4 = () =>{


  let alphabet = /^[A-za-z]+$/;
  let numbers = /^[0-9]+$/;
    
  let schema = yup.object( {
    name:yup.string().required('name is required field *').matches(alphabet,'enter a valid name').min(3).max(14),
    lastName:yup.string().required('name is required field *').matches(alphabet,'enter a valid Last name').min(4).max('9'),
    address:yup.string().required('address is required field *'),
    
    email:yup.string().email('please enter a valid email').required('email is required field *'),
    jobTitle:yup.string().required('job title is required field *').matches(alphabet,'enter a valid job Title').min(3).max(9),
    phone:yup.string().matches(numbers,'please enter a valid number').required('phone is a required field'),
    summery:yup.string().required('summery is required field *'),
    experince:yup.string().required('experince is required field *').matches(alphabet,'enter a valid experince').min(3).max(9),
    post:yup.string(),
    university:yup.string().required('name is required university *').matches(alphabet,'enter a valid university').min(3).max(9),
    faculty:yup.string().required('faculty is required field *').min(3).max(15),
    degree:yup.string().required('degree is required field *').matches(alphabet,'enter a valid faculty').min(3).max(9),
    language:yup.string().required('language is required field *'),
    skills:yup.string().required('skill is required field *'),
    DoB:yup.string().required('Date of Birth is required *'),


    
  })

  const [name,setName] = useState('');
  const [lastName,setLastName] = useState('');
  const [phone,setPhone] = useState('')
  const [jobTitle,setJobTitle] = useState();
  const [linkedin,setLinkedin] = useState('')
  const [email,setEmail] = useState('');
  const [address,setAdress] = useState('');
  const [DoB,setDoB] = useState('');


  const [education,setEducation] = useState('')
  const [university,setUniversity] = useState('');
  const [faculty,steFaculty] = useState('');
  const [degree,setDegree] = useState('')
  const [startUni,setStartUni] = useState('');
  const [endUni,setEndUni] = useState('');
  const [experince,setExperience] = useState();
  const [NewExperince,setNewExperience] = useState([]);

  const [post,setPost] = useState('');
  const [startDate,setStartDate] = useState('');
  const [endDate,setEndDate] = useState('');
  const [skills,setSkills] = useState('');
  const [skillsLevel,setSkillsLevel] = useState('');
  const [language,setLanguage] = useState('');


  const [addLanguage,setAddLanguage] = useState();
  const [summery,setSummery] = useState('');  

  const [partOne,setPartOne] = useState('partOne');
  const [partTwo,setPartTwo] = useState('d-none');
  const [partThree,setPartThree] = useState('d-none');
  const [partFour,setPartFour] = useState('d-none');
  const [partFive,setPartFive] = useState('d-none');

  const [showLive,setShowLive] = useState('d-none d-lg-block');
  const [showCenter,setShowCenter] = useState('');


  const [showColores,setShowColores] = useState('d-none')
  const [headerColor,setHeaderColor] = useState('');
  const [headerFontColor,setHeaderFontColor] = useState('');
  const [bodyColor,setBodyColor] = useState('');
  const [bodyFontColor,setBodyFontColor] = useState('');
  const [titleFontColor,setTitleFontColor] = useState('');

  
  
  const showPartOne = (event) =>{
    setPartOne('partOne');
    setPartTwo('d-none');
    setPartThree('d-none');
    setPartFour('d-none');
    setPartFive('d-none');


  }
 
  const showPartTwo = (event) =>{
    setPartOne('d-none');
    setPartTwo('partTwo');
    setPartThree('d-none');
    setPartFour('d-none');
    setPartFive('d-none');

  }

  const showPartThree = (event) =>{
    setPartOne('d-none');
    setPartTwo('d-none');
    setPartThree('partThree');
    setPartFour('d-none');
    setPartFive('d-none');


  }
  const showPartFour = (event) =>{
    setPartOne('d-none');
    setPartTwo('d-none');
    setPartThree('d-none');
    setPartFour('partFour');
    setPartFive('d-none');
  }

  const showPartFive = (event) =>{
    setPartOne('d-none');
    setPartTwo('d-none');
    setPartThree('d-none');
    setPartFour('d-none');
    setPartFive('partFive');
  }

  const getLevel = (event) =>{
    setSkillsLevel(event.target.value);
  }
  const showResult  = () =>{
    setPartOne('d-none');
    setPartTwo('d-none');
    setPartThree('d-none');
    setPartFour('d-none');
    setPartFive('d-none');
  

    setShowLive('d-block ');
    setShowColores('d-block')
    setShowCenter('showLive');
  }

 
  
  
  
  
  //////////////// VALIDATION 
  
  


const {values,touched,isSubmitting ,handleChange,handleSubmit,errors}  =  useFormik({
initialValues:{
  // part One
 name:'',
 lastName:'',
 // part Two
 summery:'',
 experince:'',
 post:'',
 startDate:'',
 endDate:'',
 // part Three
 jobTitle:'',
 university:'',
 faculty:'',
 degree:'',
 startUni:'',
 endUni:'',
 phone:'',
 linkedin:'',
 
 // partFour
 skills:'',
 language:'',
 
 // partFive
 email:'',
 address:'',
  phone:'',
  linkedin:'',
  email:'',
  DoB:'',
 
 // color
 bodyColor:'white',
 bodyFontColor:'black',
 titleFontColor:'rgb(4,9,20)',

},
validationSchema:schema,



});

  let isValid = false ;
  let isValid_2 = false;
  let isValid_3 = false;
  let isValid_4 = false;
  let isValid_5 = false;



  if(errors.name == null && errors.lastName == null && errors.email == null && errors.DoB == null){
    isValid = true;
    if(errors.experince == null && errors.post == null ){
        isValid_2  = true;
        if(errors.university == null && errors.faculty == null && errors.degree  == null ){
               isValid_3 = true;

            if(errors.language == null ){
              isValid_4 = true; 
              }  
              else{
                isValid_4 = false;
              }
        }
        else{
          isValid_3 = false;
        }
        
    }
    else{
      isValid_2 = false;
    }
  }
    else{
      isValid = false;
    }
  
 


  return(<>
      <div className=''>
  
  <div className={`${showCenter} inputes bg-dark pt-5 `}>
  <div className="">

    <div className={`mx-2 ${partOne} text-light`}>

     <label htmlFor="name">Name</label>  <br /> 
     <input  type="text"  id="name" value={values.name} onChange={handleChange} placeholder="enter your name" required />  <br />
     {<small className=" ">{errors.name}<br /></small>}
    
    <label htmlFor="lastName">LastName</label>  <br />
    <input  type="text" id="lastName" value={values.lastName} onChange={handleChange} placeholder="enter your Last name" required />  <br />
    { <small className=" ">{errors.lastName}<br /></small>}

    <label htmlFor="email">Email Address</label> <br ></br>
    <input type="email"   id="email"   value={values.email} onChange={handleChange}   placeholder=" your Email" /> <br />
    { <small className=" ">{errors.email}<br /></small>}

    <label htmlFor="DoB">DOB </label> <br />
     <input type="date"   id="DoB"  value={values.Dob} onChange={handleChange}  placeholder="your Date of" /> <br />
     { <small className=" ">{errors.DoB}<br /></small>}
    
    <label htmlFor="linkedin">Website</label>  <br />
    <input type="text" id="linkedin"  value={values.linkedin} onChange={handleChange}  placeholder=" your Protfolio Url" /> <br />
    { <small className=" ">{errors.linkedin}<br /></small>}
   


{/* 
    <label htmlFor="name">Summery</label><br />
         <textarea  type="text" id="summery"  value={values.summery} onChange={handleChange}  placeholder="tell us about your self" required ></textarea> <br />
          { <small className=" ">{errors.summery}<br /></small>} */}


    
    <input type="file" multiple={false}  /> <br />

    <div onClick={showPartTwo}  className={`btn btn-sm btn-outline-light  ${isValid == false ? 'disabled'  : ''}`}>save and continue </div>
     

    </div>

 
  
    <div className={`mx-2 ${partTwo}`}>
  

         <label htmlFor="experince">Experince</label> <br /> 
         <input  type="text" id="experince"  value={values.experince} onChange={handleChange} placeholder="enter company name" required /> <br />
        { <small className=" ">{errors.experince}<br /></small>}


         <label htmlFor="post">Your Post</label> <br />
         <input type="text"   id="post"  value={values.post} onChange={handleChange}  placeholder="enter your position" /> <br />
        { <small className=" ">{errors.post}<br /></small>}
          

         <label htmlFor="startDate">Start Date:</label><br />
         <input type="date" className="" id="startDate"   value={values.startDate} onChange={handleChange}  placeholder="start Date"/> <br />
         { <small className=" ">{errors.startDate}<br /></small>}

         <label htmlFor="endDate">End Date:</label> <br />
         <input className='' id="endDate"  type="date"  value={values.endDate} onChange={handleChange}  placeholder="end Date"/> <br /><br />
         { <small className=" ">{errors.endDate}<br /></small>}
        
         <div className="btn btn-sm btn-outline-light me-4" onClick={showPartOne} >Go To Back</div> 
         <div onClick={showPartThree}  className={`btn btn-sm btn-outline-light   ${isValid_2 == false ? 'disabled'  : ''}`}>save and continue </div>

 
      </div>

    <div className={`mx-2 ${partThree}`}>
      <form action="">
        
   
     
     <label htmlFor="university">University</label>  <br />
        <input type="text"   id="university" value={values.university} onChange={handleChange} />  <br />
         { errors.university && <small className=" ">{errors.university}<br /></small>}

     <label htmlFor="faculty" >Faculty</label>  <br />
        <input type="text"  id="faculty" value={values.faculty} onChange={handleChange} /> <br />
         {errors.faculty &&  <small className=" ">{errors.faculty}<br /></small>}

     <label htmlFor="degree" >Degree</label>  <br />
        <input type="text"  id="degree" value={values.degree} onChange={handleChange} />  <br />
         {errors.degree && <small className=" ">{errors.degree}<br /></small>}

         <label htmlFor="startUni">Start Date</label> <br />
         <input type="number" className="" id="startUni"  value={values.startUni}  onChange={handleChange} placeholder="start Date"/> <br />
         <label htmlFor="endUni" >End Date</label> <br />
         <input className='' id="endUni"  type="number" value={values.endUni} onChange={handleChange} placeholder="end Date"/> <br /><br />
        
    
        <div onClick={showPartTwo} className="btn btn-sm btn-outline-light me-5" >Go To Back</div>  
    <div onClick={showPartFour}  className={`btn btn-sm btn-outline-light ${isValid_3 == false ? 'disabled'  : ''}`}>Save and continue </div>
        

         
      </form>
    
    </div>


    <div className={`mx-2 ${partFour}`}>
      <form action="">
      
      <label htmlFor="language" >Language</label>  <br />
        <input type="text"  id="language" value={values.language} placeholder="e.g English / Fluent" onChange={handleChange} /> <br />
         {errors.language &&  <small className=" ">{errors.language}<br /></small>}
{/* 
     <label htmlFor="skills" >Skills</label>  <br />
        <input type="text"  id="skills" value={values.skills} onChange={handleChange} />  <br />
         {errors.skills && <small className=" ">{errors.skills}<br /></small>} */}

        <div onClick={showPartThree} className="btn btn-sm btn-outline-light me-5" >Go To Back</div>  
        <div onClick={showResult}  className={`btn btn-sm btn-outline-light ${isValid_4 == false ? 'disabled'  : ''}`}>save and Show </div>
        

         
      </form>
    
    </div>
   

    
  </div> 
 

  <div className={`${showLive}`}>
    <div className="template2  mx-2" style={{backgroundColor:`${values.bodyColor}`, color:`${values.bodyFontColor}`}}>

      <div className="row  ">
        <div className="col-6 one" >
       
          <div className="  ps-2  pt-4">
            <h4 className="text-uppercase ms-3" style={{color:`${values.titleFontColor}`}}>{values.name}</h4>
            <h4 className="mt-1 pb-3 ms-3  text-uppercase"  style={{color:`${values.titleFontColor}`}}>{values.lastName}</h4>
          </div>
            
          <div className="title-line mt-4" style={{backgroundColor:`${values.titleFontColor}`}}></div>
          <p className="text-end me-5 mt-3" style={{color:`${values.titleFontColor}`}}>Name</p>
          <p className="text-end me-5" style={{color:`${values.titleFontColor}`}}>Email</p>
          <p className="text-end me-5" style={{color:`${values.titleFontColor}`}}>DOB</p>
          <p className="text-end me-5" style={{color:`${values.titleFontColor}`}}>Protfolio</p>

          <div className="title-line mt-5" style={{backgroundColor:`${values.titleFontColor}`}}></div>
          <p className="mt-3 text-center me-3" style={{color:`${values.titleFontColor}`}}>{values.startDate} - {values.endDate}</p>

          <div className="title-line mt-5" style={{backgroundColor:`${values.titleFontColor}`}}></div>
          <p className="mt-3 text-end me-5" style={{color:`${values.titleFontColor}`}}>{values.startUni} - {values.endUni}</p>


          <div className="title-line mt-5" style={{backgroundColor:`${values.titleFontColor}`}}></div>

          <div className="title-line mt-5"></div>





          </div>
        <div className="col-6 mt-2 two px-3">
        <img src="../prof.JPG" className="prof4 mt-3 ms-5" width="150" height="200"  />


        <h4 className="mt-4" style={{color:`${values.titleFontColor}`}}>Personal </h4>
        <div className="">
            
              <p className="px-1">{values.name}</p>
              <p className="px-1"> {values.email}</p>
              <p className="px-1"> {values.DoB}</p>
              <p className="px-1">{values.linkedin}</p>

            </div>
        
    
          <h4 className="mt-4 " style={{color: values.titleFontColor}}>Experience</h4>
          {values.experince} Componey in {values.post} Position
          
          <h4 className="mt-4 " style={{color:`${values.titleFontColor}`}}>Education</h4>
               {values.university} at {values.faculty} in {values.degree} 

         
          <h4 className="mt-4" style={{color:`${values.titleFontColor}`}}>Language</h4>
          {[values.language.split(',').map((lang,index) => <li key={index}>{lang}</li>)]}
          
          
          {/* <h4 className="" style={{color:`${values.titleFontColor}`}}>Skills</h4>
            {[values.skills.split(',').map((skill,ind) =><span className="mx-1 badge bg-primary" key={ind}>{skill}</span>)]} */}


        </div>

      </div>


    </div>
          <div className={showColores}>
            <input className="color" id="bodyColor" type="color" value={values.bodyColor} onChange={handleChange}/>
            <input className="color" id="bodyFontColor" type="color" value={values.bodyFontColor} onChange={handleChange}/>
            <input className="color" id="titleFontColor" type="color" value={values.titleFontColor} onChange={handleChange}/>

          </div>
  </div>


 </div>
</div>
  </>)
}

export default Template4