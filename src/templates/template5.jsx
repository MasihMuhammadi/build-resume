
  import React,{useState} from "react"
  import * as yup from 'yup'
  import { useFormik } from "formik";
  import jsPDF from "jspdf";




const Template5 = () =>{


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
    faculty:yup.string().required('faculty is required field *').min(3).max(20),
    degree:yup.string().required('degree is required field *').matches(alphabet,'enter a valid faculty').min(3).max(9),
    language:yup.string().required('language is required field *').matches(alphabet,'please enter a valid Language'),
    skills:yup.string().required('skill is required field *'),
    DoB:yup.string().required('Date of Birth is required *'),
    website:yup.string().url()



    
  })

  const [name,setName] = useState('');
  const [lastName,setLastName] = useState('');
  const [phone,setPhone] = useState('')
  const [jobTitle,setJobTitle] = useState();
  const [linkedin,setLinkedin] = useState('')
  const [email,setEmail] = useState('');
  const [address,setAdress] = useState('');
  const [DoB,setDoB] = useState('');
  const [NewLanguage,setNewLanguage]  = useState([]);


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
  const [language_level,setLanguage_level] = useState('');
  const [NewLanguage_level,setNewLanguage_level] = useState([]);

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
  const [image,setImage] = useState();

  
  const handleProf = (e) =>{
    setImage(e.target.files[0])
  }
   
  const creatPdf = () =>{
    let doc = new jsPDF('p','pt','a4');
    doc.html(document.querySelector('#full_CV'),{
      callback:function(pdf){
        let pageCount = doc.internal.getNumberOfPages();
        
        pdf.save('my Cv')
      }
    });
  };
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
    event.preventDefault()
    setImage(URL.createObjectURL(image))
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

 
  const handleNew = () => {
    let newInput = [...NewLanguage,[]];
    let levelData = [...NewLanguage_level,[]];
    setNewLanguage(newInput);
    setNewLanguage(levelData);
  
  }
  
  const handleAdd = (event,index) =>{
    let inputData = [...NewLanguage]; 
     inputData[index] = event.target.value; 
     setNewLanguage(inputData);

  }

  const handleAddLevel = (event,index) =>{
    let levelData = [...NewLanguage_level];
    levelData[index] = event.target.value;
    setNewLanguage_level(levelData);

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
 language_level: '',
 // partFive
 email:'',
 address:'',
 
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



  if(errors.name == null && errors.lastName == null && errors.summery == null ){
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

 


    <label htmlFor="name">Summery</label><br />
         <textarea  type="text" id="summery"  value={values.summery} onChange={handleChange}  placeholder="tell us about your self" required ></textarea> <br />
          { <small className=" ">{errors.summery}<br /></small>} 


    
    <input type="file" multiple={false} onChange={handleProf}  /> <br />

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
         <input type="month"  id="startDate"   value={values.startDate} onChange={handleChange}  placeholder="start Date"/> <br />
         { <small className=" ">{errors.startDate}<br /></small>}

         <label htmlFor="endDate">End Date:</label> <br />
         <input className='' id="endDate"  type="month"  value={values.endDate} onChange={handleChange}  placeholder="end Date"/> <br /><br />
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
         <input type="number" id="startUni"  value={values.startUni}  onChange={handleChange} placeholder="start Date"/> <br />
         <label htmlFor="endUni" >End Date</label> <br />
         <input className='' id="endUni"  type="number" value={values.endUni} onChange={handleChange} placeholder="end Date"/> <br /><br />
        
    
        <div onClick={showPartTwo} className="btn btn-sm btn-outline-light me-5" >Go To Back</div>  
    <div onClick={showPartFour}  className={`btn btn-sm btn-outline-light ${isValid_3 == false ? 'disabled'  : ''}`}>Save and continue </div>
        

         
      </form>
    
    </div>


    <div className={`mx-2 ${partFour}`}>
      <form action="">
      

         <label htmlFor="skills" >Skills</label>  <br />
        <input type="text"  id="skills" value={values.skills} placeholder="e.g web development" onChange={handleChange} /> <br />
         {errors.skills &&  <small className=" ">{errors.languaskills}<br /></small>}
   

      <label htmlFor="language" >Language</label>  <br />
        <div className=""><input type="text" className="d-inline"  id="language" value={values.language} placeholder="e.g English / Fluent" onChange={handleChange} /></div>
         {errors.language &&  <small className=" ">{errors.language}<br /></small>}
         <select id="language_level" name="language_level" value={values.language_level}  onChange={handleChange}className="mt-2 border rounded">
          <option>Fluent</option>
          <option>Native</option>
          <option>Good</option>
          <option>Not bad</option>
          </select> <br />

      {NewLanguage.map((value,index) => {
        return <div key={index} ><label>language</label><input type="text" onChange={e => handleAdd(e,index) }/>
          <select id="language_level" name="language_level"  onChange={e =>handleAddLevel(e,index)} className="mt-2 border rounded">
          <option>Fluent</option>
          <option>Native</option>
          <option>Good</option>
          <option>Not bad</option>
          </select> <br />
        </div>
      })}

      <div className="btn btn-success my-1" onClick={handleNew}>Add</div> <br />

        <div onClick={showPartThree} className="btn btn-sm btn-outline-light me-5" >Go To Back</div>  
        <div onClick={showResult}  className={`btn btn-sm btn-outline-light ${isValid_4 == false ? 'disabled'  : ''}`}>save and Show </div>
        

         
      </form>
    
    </div>


    <div className={`mx-2 ${partFive}`}>
      <form action="">
      
      

    <label htmlFor="email">Email Address</label> <br ></br>
    <input type="email"   id="email"   value={values.email} onChange={handleChange}   placeholder=" your Email" /> <br />
    { <small className=" ">{errors.email}<br /></small>}
    
    <label htmlFor="linkedin">Website</label>  <br />
    <input type="text" id="linkedin"  value={values.linkedin} onChange={handleChange}  placeholder=" your Protfolio Url" /> <br />
    { <small className=" ">{errors.linkedin}<br /></small>}

    

         
      </form>
    
    </div>
   
  </div> 
 

  <div className={`${showLive}`}>
    <div className="template2 mx-2" >

      <div className="row  p-3  pure-cv" id="full_CV" style={{backgroundColor:`${values.bodyColor}`, color:`${values.bodyFontColor}`}}>
        <div className="col-6 one" >
       
          <div className="  ps-2  pt-4">
        <img src={image} className="prof4 mt-3 ms-2" width="150" height="200"  />
            
          </div>
            
          <h4 className="mt-4 mx-2" style={{color: values.titleFontColor}}>summery</h4>
          <p className="mx-2">{values.summery }</p> 

            <h4 className="mt-4 mx-2" style={{color:`${values.titleFontColor}`}}>Skills</h4>
            {[values.skills.split(',').map((skill,ind) =><span className="mx-1 badge  bg-primary" key={ind}>{skill}</span>)]} 

           
            <h4 className="mt-4 mx-2" style={{color:`${values.titleFontColor}`}}>Language</h4>
             {[values.language].map((lang,index) => <li className="mx-2" key={index}>{lang} / {values.language_level}</li>)}
             {[NewLanguage.map((lang,index) => <li className="" key={index}>{lang} / {NewLanguage_level[index]}</li>)]}
            

          </div>

        <div className="col-6 mt-2 two px-3">

          <h2 className="mt-4 text-capitalize " style={{color: values.titleFontColor}}>{values.name}</h2>
          <h2 className="mt-4 text-capitalize d-inline mx-1" style={{color: values.titleFontColor}}>{values.lastName}</h2>
        
          <h4 className="mt-5 " style={{color:`${values.titleFontColor}`}}>Education</h4>
            {values.university} at {values.faculty} in {values.degree} <br />
            <p>{`${values.startUni} - ${values.endUni}`}</p>



          <h4 className="mt-4 " style={{color: values.titleFontColor}}>Experience</h4>
            <p>{values.experince}</p>
            <p>{values.post}</p>
            <p>{values.startDate} - {values.endDate}</p>

        </div>

      </div>


    </div>
  </div>
          <div className={`${showColores} colores`}>
            <input className="color" id="bodyColor" type="color" value={values.bodyColor} onChange={handleChange}/>
            <input className="color" id="bodyFontColor" type="color" value={values.bodyFontColor} onChange={handleChange}/>
            <input className="color" id="titleFontColor" type="color" value={values.titleFontColor} onChange={handleChange}/>
            <button onClick={creatPdf} className="btn btn-warning mb-3 float-end">Download PDF</button>
           
          </div>


 </div>
</div>
  </>)
}

export default Template5;