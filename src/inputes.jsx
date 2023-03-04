
import React,{useEffect, useState} from "react"
import * as yup from 'yup'
import { useFormik } from "formik";
import jsPDF from "jspdf";




const Inputes = (props) =>{


let alphabet = /^[A-za-z]+$/;
let numbers = /^[0-9]+$/;
  
let schema = yup.object( {
  name:yup.string().required('name is required field *').matches(alphabet,'enter a valid name').min(3).max(14),
  lastName:yup.string().required('name is required field *').matches(alphabet,'enter a valid Last name').min(4).max('9'),
  address:yup.string().required('address is required field *'),
  email:yup.string().email('please enter a valid email').required('email is required field *'),
  jobTitle:yup.string().required('job title is required field *').min(3).max(14),
  phone:yup.string().matches(numbers,'please enter a valid number').required('phone is a required field').min(10).max(13),
  summery:yup.string().required('summery is required field *'),
  experince:yup.string().required('experince is required field *').matches(alphabet,'enter a valid experince').min(3).max(9),
  post:yup.string().required(" position is required"),
  university:yup.string().required('name is required university *').matches(alphabet,'enter a valid university').min(3).max(9),
  faculty:yup.string().required('faculty is required field *').min(3).max(20),
  degree:yup.string().required('degree is required field *').matches(alphabet,'enter a valid faculty').min(3).max(9),
  language:yup.string().required('language is required field *').matches(alphabet,'please enter a valid language'),
  interests:yup.string().required('interests is required field *'),
  skills:yup.string().required('skill is required field *'),
  DoB:yup.string().required('Date of Birth is required *'),
  project:yup.string().url('enter a valid url'),



  
})

const [name,setName] = useState('');
const [lastName,setLastName] = useState('');
const [phone,setPhone] = useState('');
const [jobTitle,setJobTitle] = useState();
const [linkedin,setLinkedin] = useState('')
const [email,setEmail] = useState('');
const [address,setAdress] = useState('');
const [project,setProject]  = useState([]);
let [isValid,setIsValid] = useState(false);
let [isValid_2,setIsValid_2] = useState(false);
let [isValid_3,setIsValid_3] = useState(false);
let [isValid_4,setIsValid_4] = useState(false);
let [isValid_5,setIsValid_5] = useState(false);
let [isValid_6,setIsValid_6] = useState(false);
let [disabled, setDisabled] = useState('disabled')




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
const [interests,setInterests] = useState('');
const [language_level,setLanguage_level] = useState('');
const [NewLanguage_level,setNewLanguage_level] = useState('');
const [NewLanguage,setNewLanguage]  = useState([]);
const [DoB,setDoB] = useState('');
let [image,setImage] = useState();



const [addLanguage,setAddLanguage] = useState();
const [summery,setSummery] = useState('');  

const [partOne,setPartOne] = useState('partOne');
const [partTwo,setPartTwo] = useState('d-none');
const [partThree,setPartThree] = useState('d-none');
const [partFour,setPartFour] = useState('d-none');
const [partFive,setPartFive] = useState('d-none');
const [partSex,setPartSex] = useState('d-none');


const [showLive,setShowLive] = useState('d-none d-lg-block');
const [showCenter,setShowCenter] = useState('');


const [showColores,setShowColores] = useState('d-none')
const [headerColor,setHeaderColor] = useState('');
const [headerFontColor,setHeaderFontColor] = useState('');
const [bodyColor,setBodyColor] = useState('');
const [bodyFontColor,setBodyFontColor] = useState('');
const [titleFontColor,setTitleFontColor] = useState('');

const handleProf = (e) =>{
  setImage(e.target.files[0]);
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
  setPartSex('d-none');



}

const showPartTwo = (event) =>{
  setPartOne('d-none');
  setPartTwo('partTwo');
  setPartThree('d-none');
  setPartFour('d-none');
  setPartFive('d-none');
  setPartSex('d-none');
  event.preventDefault()
  
  props.onClick(URL.createObjectURL(image))

}

const showPartThree = (event) =>{
  setPartOne('d-none');
  setPartTwo('d-none');
  setPartThree('partThree');
  setPartFour('d-none');
  setPartFive('d-none');
  setPartSex('d-none');


}
const showPartFour = (event) =>{
  setPartOne('d-none');
  setPartTwo('d-none');
  setPartThree('d-none');
  setPartFour('partFour');
  setPartFive('d-none');
  setPartSex('d-none');

  }

const showPartFive = (event) =>{
  setPartOne('d-none');
  setPartTwo('d-none');
  setPartThree('d-none');
  setPartFour('d-none');
  setPartFive('partFive');
  setPartSex('d-none');

}

const showPartSex = (event) =>{
  setPartOne('d-none');
  setPartTwo('d-none');
  setPartThree('d-none');
  setPartFour('d-none');
  setPartFive('d-none');
  setPartSex('partSex');

  
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
  setPartSex('d-none');

  setShowLive('d-block ');
  setShowColores('d-block')
  setShowCenter('showLive');
}


const handleNew = () => {
  let newInput = [...NewLanguage,[]];
  let newLevel = [...NewLanguage_level,[]];
  setNewLanguage_level(newLevel)
  setNewLanguage(newInput);

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



let{handleChange, errors,values} = useFormik({

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
  phone:'00',
  
  project:'',
  // partFour
  skills:'',
  language:'',
  NewLanguage:'',
  NewLanguage_level:'',
  language_level:'',
  interests:'',
  
  // partFive
  
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
// (URL.createObjectURL(values.image))

useEffect(() =>{
  props.onChange( values);

})


if((errors.name,errors.jobTitle , errors.summery) == null ){
  isValid = true;

  if(errors.experince == null && errors.post == null ){
      isValid_2  = true;
      if(errors.university == null && errors.faculty == null && errors.degree  == null ){
             isValid_3 = true;
          if(errors.skills == null ){
            isValid_4 = true; 
               if(errors.language == null  ){
              isValid_5 = true; 
              if(errors.email == null && errors.phone == null && errors.linkedin == null ){
                  isValid_6 = true; 
                  } 
                  else{
                      isValid_6 = false;
                  } 
              }  
              else{
                  isValid_5 = false;
              }
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

   <label htmlFor="jobTitle">Job Title</label> <br />
     <input type="text" id="jobTitle" value={values.jobTitle} onChange={handleChange} placeholder="enter your  jobTitle" /> <br />
     {errors.jobTitle &&  <small>{errors.jobTitle}<br /></small>} 




  <label htmlFor="name">Summery</label><br />
       <textarea  type="text" id="summery"  value={values.summery} onChange={handleChange}  placeholder="tell us about your self" required ></textarea> <br />
        { <small className=" ">{errors.summery}<br /></small>} 

  

  
  <input type="file" id='image' multiple={false} onChange={handleProf}  /> <br />

  <div onClick={showPartTwo}  className={`btn btn-sm btn-outline-light ${isValid == false ? 'disabled' : ''}`}>save and continue </div>
   

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
       {errors.skills &&  <small className=" ">{errors.skills}<br /></small>}

       {/* <label htmlFor="project" >Project</label> <br />
       <input className='' id="project"  type="text" value={values.project} onChange={handleChange} placeholder="your project link"/> <br />
       {errors.project &&  <small className=" ">{errors.project}<br /></small>} */}


      <div onClick={showPartThree} className="btn btn-sm btn-outline-light me-5 mt-3" >Go To Back</div>  
      <div onClick={showPartFive}  className={`btn btn-sm btn-outline-light mt-3 ${isValid_4 == false ? 'disabled'  : ''}`}>save and continue </div>
      

       
    </form>
  
  </div>


  <div className={`mx-2 ${partFive}`}>
    <form action="">
   
    {/* <label htmlFor="interests">interests</label>  <br />
      <input type="text" className="d-inline"  id="interests" value={values.interests} placeholder="e" onChange={handleChange} /> 
       {errors.interests &&  <small className=" ">{errors.interests}<br /></small>} */}


    <label htmlFor="language">Language</label>  <br />
      
      <input type="text" className="d-inline"  id="language" value={values.language} placeholder="e.g English / Fluent" onChange={handleChange} /> 
       {errors.language &&  <small className=" ">{errors.language}<br /></small>}
       <select id="language_level" name="language_level"  onChange={handleChange} className="mt-2 border rounded">
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

    <button className="btn btn-success btn-sm my-1" onClick={handleNew}>Add</button> <br />

    
      <div onClick={showPartFour} className="btn btn-sm btn-outline-light me-5" >Go To Back</div>  
      <div onClick={showPartSex}  className={`btn btn-sm btn-outline-light ${isValid_5 == false ? 'disabled'  : ''}`}>save and Continue </div>
      



    </form>
  
  </div>
 
<div className={`mx-2 ${partSex}`}>
    <form action="">
    <label htmlFor="email">Email Address</label> <br ></br>
  <input type="email"   id="email"   value={values.email} onChange={handleChange}   placeholder=" your Email" /> <br />
  { <small className=" ">{errors.email}<br /></small>}

  <label htmlFor="phone">Phone </label> <br />
   <input type="text"   id="phone"  value={values.phone} onChange={handleChange}  placeholder="your phone number" /> <br />
   { <small className=" ">{errors.phone}<br /></small>}
  
  <label htmlFor="linkedin">Website</label>  <br />
  <input type="text" id="linkedin"  value={values.linkedin} onChange={handleChange}  placeholder=" your Protfolio Url" /> <br />
  { <small className=" ">{errors.linkedin}<br /></small>}
 

  <div onClick={showPartFive} className="btn btn-sm btn-outline-light me-5" >Go To Back</div>  
  <div onClick={showResult}  className={`btn btn-sm btn-outline-light ${isValid_6 == false ? 'disabled'  : ''}`}>save and Show </div>
      
    </form>
  
  </div>
</div> 

<div className={showColores}>
            <input className="color" id="bodyColor" type="color" value={values.bodyColor} onChange={handleChange}/>
            <input className="color" id="bodyFontColor" type="color" value={values.bodyFontColor} onChange={handleChange}/>
            <input className="color" id="headerColor" type="color" value={values.headerColor} onChange={handleChange}/>
            {/* <button onClick={creatPdf} className="btn btn-warning mb-3 float-end">Download PDF</button> */}
       
          </div> 


    



</div>
</div>
</>)
}

export default Inputes;