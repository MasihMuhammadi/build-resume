
  import React,{useState} from "react"
  import * as yup from 'yup'
  import { useFormik } from "formik";
  import jsPDF from "jspdf";




const Template2 = () =>{


  let alphabet = /^[A-za-z]+$/;

  let numbers = /^[0-9]+$/;
    
  let schema = yup.object( {
    name:yup.string().required('name is required field *').matches(alphabet,'enter a valid name').min(3).max(14),
    lastName:yup.string().required('name is required field *').matches(alphabet,'enter a valid Last name').min(4).max(10),
    email:yup.string().email('please enter a valid email').required('email is required field *'),
    jobTitle:yup.string().required('name is required field *').matches(alphabet,' ','enter a valid job Title').min(3),
    phone:yup.string().matches(numbers,'please enter a valid number').required('phone is a required field'),
    summery:yup.string().required('summery is required field *'),
    experince:yup.string().required('experince is required field *').matches(alphabet,'enter a valid experince').min(3).max(9),
    post:yup.string(),
    university:yup.string().required('name is required university *').matches(alphabet,'enter a valid university').min(3).max(9),
    faculty:yup.string().required('faculty is required field *').min(3).max(20),
    
    degree:yup.string().required('degree is required field *').matches(alphabet,'enter a valid faculty').min(3).max(9),
    website:yup.string().url()
    
  })



  const onSubmit = (event) =>{
    alert('masih')
  
  }
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
  const [showLive,setShowLive] = useState('d-none d-lg-block');
  const [showCenter,setShowCenter] = useState('');
  const[image,setImage] = useState();
  const [submitting, setSubmitting] = useState();

  
  const [jobTitle,setJobTitle] = useState();
  const [addLanguage,setAddLanguage] = useState();
  const [experince,setExperience] = useState();
  const [post,setPost] = useState('');
  const [summery,setSummery] = useState('');
  const [skills,setSkills] = useState('');
  const [skillsLevel,setSkillsLevel] = useState();
  const [newSkill,setNewSkill] = useState([]);
  const [newSkillsLevel,setNewSkillsLevel] = useState([]);




  const [partOne,setPartOne] = useState('partOne');
  const [partTwo,setPartTwo] = useState('d-none');
  const [partThree,setPartThree] = useState('d-none');


  const [showColores,setShowColores] = useState('d-none');
  const [headerColor,setHeaderColor] = useState('');
  const [headerFontColor,setHeaderFontColor] = useState('');
  const [bodyColor,setBodyColor] = useState('');
  const [bodyFontColor,setBodyFontColor] = useState('');
  const [fullBodyColor,setFullBodyColor] = useState('');
  const [fullBodyFontColor,setFullBodyFontColor] = useState('');
  const [titleFontColor,setTitleFontColor] = useState('')

  const creatPdf = () =>{
    let doc = new jsPDF('p','pt','a4');
    doc.html(document.querySelector('#full_CV'),{
      callback:function(pdf){
        let pageCount = doc.internal.getNumberOfPages();
        
        pdf.save('my Cv')
      }
    });
  };

  const handleProf=(e) =>{
    setImage(e.target.files[0]);
    
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
    event.preventDefault()
    setImage(URL.createObjectURL(image));
  }

  const showPartThree = (event) =>{
    setPartOne('d-none');
    setPartTwo('d-none');
    setPartThree('partThree');
   
  }
  const showResult  = () =>{
    setPartOne('d-none');
    setPartTwo('d-none');
    setPartThree('d-none');
    setShowLive('d-block ');
    setShowColores('d-block');
    setShowCenter('showLive');

  }
 
  const handleNew = () => {
    let newInput = [...newSkill,[]];
    setNewSkill(newInput);
  
  }
  const handleAdd = (event,index) =>{
    let inputData = [...newSkill]; 
     inputData[index] = event.target.value; 
     setNewSkill(inputData);
      }
   
  const getLevel = (event) =>{
     setSkillsLevel(event.target.value)
   
  }
 
  
  //////////////// VALIDATION 
  
  


const {values,touched,isSubmitting ,handleChange,handleSubmit,errors}  =  useFormik({
initialValues:{
  // part One
 name:'',
 lastName:'',
 jobTitle:'',
 phone:'',
 linkedin:'',
 email:'',
 // part Two
 summery:'',
 experince:'',
 post:'',
 startDate:'',
 endDate:'',
// part Three
 university:'',
 faculty:'',
 degree:'',
 skills: '',
 
 startUni:'',
 endUni:'',
 
 // color
 bodyColor:'white',
 bodyFontColor:'black',
 headerColor:''

},
validationSchema:schema,
onSubmit,


});

  let isValid = false ;
  let isValid_2 = false
  let isValid_3 = false



 if(errors.name == null && errors.lastName == null && errors.phone == null && errors.email == null){
    isValid = true;
    if(errors.summery == null && errors.experince == null ){
      isValid_2  = true;
      if(errors.university == null && errors.faculty == null && errors.degree  == null){
        isValid_3  = true;
        
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


     <label htmlFor="phone">Phone </label> <br />
     <input type="text"   id="phone"  value={values.phone} onChange={handleChange}  placeholder="your phone number" /> <br />
     { <small className=" ">{errors.phone}<br /></small>}
    
   
    <label htmlFor="linkedin">Linkedin Url</label>  <br />
    <input type="text" id="linkedin"  value={values.linkedin} onChange={handleChange}  placeholder=" your linkedin Url" /> <br />
    { <small className=" ">{errors.linkedin}<br /></small>}
   
    <label htmlFor="email">Email Address</label> <br ></br>
    <input type="email"   id="email"   value={values.email} onChange={handleChange}   placeholder=" your Email" /> <br />
    { <small className=" ">{errors.email}<br /></small>}
    
    <input type="file" onChange={handleProf} multiple={false}  /> <br />

    <div onClick={showPartTwo}  className={`btn btn-sm btn-outline-light   ${isValid == false ? 'disabled'  : ''}`}>save and continue </div>
     
     
   
    
        </div>

 
  
    <div className={`mx-2 ${partTwo}`}>
  
     
       <label htmlFor="name">Summery</label><br />
         <textarea  type="text" id="summery"  value={values.summery} onChange={handleChange}  placeholder="tell us about your self" required ></textarea> <br />
          { <small className=" ">{errors.summery}<br /></small>}


         <label htmlFor="experince">Experince</label> <br /> 
         <input  type="text" id="experince"  value={values.experince} onChange={handleChange} placeholder="enter company name" required /> <br />
        { <small className=" ">{errors.experince}<br /></small>}


         <label htmlFor="post">Your Post</label> <br />
         <input type="text"   id="post"  value={values.post} onChange={handleChange}  placeholder="enter your position" /> <br />
        { <small className=" ">{errors.post}<br /></small>}
          

         <label htmlFor="startDate">Start Date:</label><br />
         <input type="month" className="" id="startDate"   value={values.startDate} onChange={handleChange}  placeholder="start Date"/> <br />
         { <small className="text-danger">{errors.startDate}<br /></small>}
         <label htmlFor="endDate">End Date:</label> <br />
         <input className='' id="endDate"  type="month"  value={values.end} onChange={handleChange}  placeholder="end Date"/> <br />
         { <small className=" ">{errors.email}<br /></small>}
         <div className="btn btn-sm btn-outline-light me-4" onClick={showPartOne} >Go To Back</div> 
         <div onClick={showPartThree}  className={`btn btn-sm btn-outline-light   ${isValid_2 == false ? 'disabled'  : ''}`}>save and continue </div>

 
      </div>

    <div className={`mx-2 ${partThree}`}>
      <form action="">
         
         <label htmlFor="university">University</label>  <br />
         <input type="text"   id="university" value={values.university} onChange={handleChange} />  <br />
         { <small className=" ">{errors.university}<br /></small>}

         <label htmlFor="faculty" >Faculty</label>  <br />
         <input type="text"  id="faculty" value={values.faculty} onChange={handleChange} /> <br />
         { <small className=" ">{errors.faculty}<br /></small>}

         <label htmlFor="degree" >Degree</label>  <br />
         <input type="text"  id="degree" value={values.degree} onChange={handleChange} />  <br />
         { <small className=" ">{errors.degree}<br /></small>}

        
         <label htforom="startUni">Start Date:</label> <br />
         <input type="number" className="" id="startUni"  value={values.startUni}  onChange={handleChange} placeholder="start Date"/> <br />
         <label htforom="endUni" >End Date:</label> <br />
         <input className='' id="endUni"  type="number" value={values.endUni} onChange={handleChange} placeholder="end Date"/> <br /><br />
         
         <label htforom="skills" >skills:</label> <br />
         <input className='' id="skills"  type="text" value={values.skills} onChange={handleChange} placeholder="skills "/> <br /><br />
          
          {/* <input value="25%"  readOnly className="skill-level" onClick={getLevel} />
          <input value="50%"  readOnly className="skill-level" onClick={getLevel} />
          <input value="75%"  readOnly className="skill-level" onClick={getLevel} />
          <input value="100%" readOnly className="skill-level" onClick={getLevel} /> <br />
 */}

         {newSkill.map((value,index) => {
        return <div key={index} ><input type="text" className="d-block" onChange={e => handleAdd(e,index) }/>
         
        </div>
      })}
      <div className="btn btn-success my-1" onClick={handleNew}>Add</div> <br />


        <div className="btn btn-sm btn-outline-light me-5" onClick={showPartTwo}>Go To Back</div>  
        
        <div onClick={showResult}  className={`btn btn-sm btn-outline-light   ${isValid_3 == false ? 'disabled'  : ''}`}>save and show </div>
        

         
      </form>
    
    </div>
    
  </div> 
 

  <div className={`${showLive}`}>
    <div className="template2  mx-2"  >

      <div className="row p-2 pure-cv" id="full_CV" style={{backgroundColor:`${values.bodyColor}`, color:`${values.bodyFontColor}`}}>
        <div className="col-6 one" >
          <div className="shadow" style={{backgroundColor:`${values.headerColor}`}}>
          <div className="  ps-2  pt-4"><img src={image} className="prof2" width="150" height="200"  /></div>
          <div className="mt-3  ps-2"> 
          <h2 className="px-1">{values.name} </h2>
          <h3 className="px-1">{values.lastName}</h3>
          <h5 className="px-1">{values.jobTitle}</h5>

            <div className="mt-3">

              <h2 className=" border-bottom border-primary">Contact</h2>
              <div className="">
              <h6>Phone</h6>
              <p className="px-1">{values.phone}</p>
              <h6 className="px-1">Social media:</h6>
              <p className="px-1">{values.linkedin}</p>
              <h6>Email</h6>
              <p className="px-1">{values.email}</p>
              </div>
            </div>

          </div>
        
          </div>
          </div>
        <div className="col-6 mt-2 two px-3">
          <h2>Summery</h2>
          <span >{values.summery} </span>
  
          <h2 className="mt-3">Experience</h2>
            <p> work in {values.experince}: <br /> {values.post} position Start <br /> {`${values.startDate} to ${values.endDate}`} </p>
        
          <h2 className="mt-4">Skills</h2>
         
          <i className="badge bg-success mx-1">{values.skills}</i>

         {[newSkill.map((sk,index) => <div className="badge bg-success mx-1" key={index}>{sk}</div>)]}


       <h2 className="mt-4">Education</h2>
         {values.university} at {values.faculty} in {values.degree} {`${values.startUni} - ${values.endUni}`}

        </div>

      </div>


    </div>
  </div>

 </div>
          <div className={showColores}>
            <input className="color" id="bodyColor" type="color" value={values.bodyColor} onChange={handleChange}/>
            <input className="color" id="bodyFontColor" type="color" value={values.bodyFontColor} onChange={handleChange}/>
            <input className="color" id="headerColor" type="color" value={values.headerColor} onChange={handleChange}/>
            <button onClick={creatPdf} className="btn btn-warning mb-3 float-end">Download PDF</button>

          </div>
</div>
  </>)
}

export default Template2;
  