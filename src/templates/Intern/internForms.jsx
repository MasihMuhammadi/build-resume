
import React,{useEffect, useState} from "react"
import * as yup from 'yup'
import { useFormik } from "formik";
import jsPDF from "jspdf";




const InternForms = (props) =>{


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

const [project,setProject]  = useState([]);
let [isValid,setIsValid] = useState(false);
let [isValid_2,setIsValid_2] = useState(false);
let [isValid_3,setIsValid_3] = useState(false);
let [isValid_4,setIsValid_4] = useState(false);
let [isValid_5,setIsValid_5] = useState(false);
let [isValid_6,setIsValid_6] = useState(false);
let [disabled, setDisabled] = useState('disabled')




const [language_level,setLanguage_level] = useState('');
const [NewLanguage_level,setNewLanguage_level] = useState([]);
const [NewLanguage,setNewLanguage]  = useState([]);
const [DoB,setDoB] = useState('');
let [image,setImage] = useState();
const [skills,setSkills] = useState([]);
const [NewSkill,setNewSkill] = useState([]);



const [addLanguage,setAddLanguage] = useState();
const [summery,setSummery] = useState('');  

const [partOne,setPartOne] = useState('partOne');
const [partTwo,setPartTwo] = useState('d-none');
const [partThree,setPartThree] = useState('d-none');
const [partFour,setPartFour] = useState('d-none');
const [partFive,setPartFive] = useState('d-none');
const [partSex,setPartSex] = useState('d-none');
const [downloadBtn,setDownloadBtn] = useState('d-none')
const [style,setStyle] = useState('d-none d-sm-block ')



// const handleProf = (e) =>{
//   setImage(e.target.files[0]);
// }


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
  setDownloadBtn('d-block');
  props.onMouseDown(downloadBtn)
  props.onMouseDown(style);

}




const handleAdd = () =>{
  const newLangData = [...NewLanguage,[]];
  setNewLanguage(newLangData);

}
const inputValue = (e,id) =>{
  const inputData = [...NewLanguage]
  inputData[id] = e.target.value;
  setNewLanguage(inputData);
 }

 const handleNewLevel = (e,id) =>{
  const levelData = [...NewLanguage_level]
  levelData[id] = e.target.value;
  setNewLanguage_level(levelData);

 }

 const handleDelete = (id) =>{
  const deleteLanguage = [...NewLanguage];
  const deleteLanguageLevel = [...NewLanguage_level];

    deleteLanguage.splice(id,1)
    deleteLanguageLevel.splice(id,1)
 

    setNewLanguage(deleteLanguage)
    setNewLanguage_level(deleteLanguageLevel);


 
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
  props.onChange( values,NewLanguage,NewLanguage_level);

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
      <div className={` inputes bg-dark pt-5 `}>
        <div className="">
          <div className={`mx-2 ${partOne} text-light`}>


            <div className="inputBox">
              <input  type="text" autoComplete="off" id="name" value={values.name} onChange={handleChange} placeholder="enter your name" required />  
              <label  htmlFor="name">Name</label>
              <small className=" ">{errors.name}<br /></small>
            </div>

            <div className="inputBox mt-3">
              <input  type="text" autoComplete="off" id="lastName" value={values.lastName} onChange={handleChange} placeholder="enter your name" required />  
              <label  htmlFor="lastName">LastNme</label>
              <small className=" ">{errors.lastName}<br /></small>
            </div>
            <div className="inputBox mt-3">
              <input type="text" id="jobTitle" value={values.jobTitle} autoComplete="off" onChange={handleChange} placeholder="enter your  jobTitle" /> 
              <label htmlFor="jobTitle">Job Title</label> 
              <small>{errors.jobTitle}<br /></small>
            </div>

            <div className="inputBox mt-3">
              <textarea  type="text" id="summery"  value={values.summery} onChange={handleChange}  placeholder="tell us about your self" required ></textarea> 
              <label htmlFor="name">Summery</label>
              <small className=" ">{errors.summery}<br /></small>
            </div>

            
            <div onClick={showPartTwo}  className={`btn btn-sm btn-outline-light ${isValid == false ? 'disabled' : ''}`}>save and continue </div>
          </div>

            <div className={`mx-2 ${partTwo}`}>
              <div className="inputBox mt-3">
              <input  type="text" id="experince" autoComplete="off" value={values.experince} onChange={handleChange} placeholder="enter company name" required />
              <label htmlFor="experince">Experince</label> 
              <small className=" ">{errors.experince}<br /></small>
            </div>

            <div className="mt-3 inputBox">
              <input type="text"   id="post" autoComplete="off" value={values.post} onChange={handleChange}  placeholder="enter your position" /> 
              <label htmlFor="post">Your Post</label> 
              { <small className=" ">{errors.post}<br /></small>}
            </div>
        
            <div className="inputBox mt-3">
              <input type="month"  id="startDate"  autoComplete="off" value={values.startDate} onChange={handleChange}  placeholder="start Date"/> 
              <label htmlFor="startDate">Start Date:</label>
              { <small className=" ">{errors.startDate}<br /></small>}
            </div>

            <div className="inputBox mt-3">
              <input className='' id="endDate"  type="month"  value={values.endDate} onChange={handleChange}  placeholder="end Date"/> <br />
              <label htmlFor="endDate">End Date:</label> 
              { <small className=" ">{errors.endDate}<br /></small>}
            </div>
      
            <div className="btn btn-sm btn-outline-light me-4" onClick={showPartOne} >Go To Back</div> 
            <div onClick={showPartThree}  className={`btn btn-sm btn-outline-light   ${isValid_2 == false ? 'disabled'  : ''}`}>save and continue </div>

          </div>

        <div className={`mx-2 ${partThree}`}> 
          <div className="inputBox mt-3">
            <input type="text"   id="university" placeholder="enter your University" autoComplete="off" value={values.university} onChange={handleChange} /> 
            <label htmlFor="university">University</label>
            { errors.university && <small className=" ">{errors.university}<br /></small>}
          </div>

          <div className="inputBox mt-3">
            <input type="text" autoComplete="off" placeholder="enter your faculty" id="faculty" value={values.faculty} onChange={handleChange} />
            <label htmlFor="faculty" >Faculty</label> 
            {errors.faculty &&  <small className=" ">{errors.faculty}<br /></small>}
          </div>

          <div className="inputBox mt-3">
            <input type="text" autoComplete="off" placeholder="enter your degree" id="degree" value={values.degree} onChange={handleChange} />
            <label htmlFor="degree" >Degree</label>
            {errors.degree && <small className=" ">{errors.degree}<br /></small>}
          </div>

          <div className="inputBox mt-3">
            <input type="number" id="startUni"  value={values.startUni}  onChange={handleChange} placeholder="start Date"/> 
            <label htmlFor="startUni">Start Date</label> 
          </div>
          
          <div className='inputBox mt-3'>
            <input className='' id="endUni"  type="number" value={values.endUni} onChange={handleChange} placeholder="end Date"/> <br /><br />
            <label htmlFor="endUni" >End Date</label> 
          </div>

          <div onClick={showPartTwo} className="btn btn-sm btn-outline-light me-5" >Go To Back</div>  
          <div onClick={showPartFour}  className={`btn btn-sm btn-outline-light ${isValid_3 == false ? 'disabled'  : ''}`}>Save and continue </div>
        
        </div>

      <div className={`mx-2 ${partFour}`}>
        <div className="inputBox mt-3">
          <input type="text"  id="skills" autoComplete="off" value={values.skills} placeholder="e.g web development , ... ," onChange={handleChange} /> 
          <label htmlFor="skills" >Skills</label> 
          {errors.skills &&  <small className=" ">{errors.skills}<br /></small>}
        </div>

        <div onClick={showPartThree} className="btn btn-sm btn-outline-light me-5 mt-3" >Go To Back</div>  
        <div onClick={showPartFive}  className={`btn btn-sm btn-outline-light mt-3 ${isValid_4 == false ? 'disabled'  : ''}`}>save and continue </div>
      
      </div>

      <div className={`mx-2 ${partFive}`}>

      <div className="inputBox mt-3">
        <input autoComplete="off" type="text" name="interests" className="d-inline"  id="interests" value={values.interests} placeholder="Interest e.g Teaching" onChange={handleChange} /> <br />
        <label htmlFor="interests">interests</label>
        {errors.interests &&  <small className=" ">{errors.interests}<br /></small>}
      </div>
    
      <div className="inputBox mt-3">
      <input type="text" className="d-inline" autoComplete="off" id="language" value={values.language} placeholder="e.g English" onChange={handleChange} /> <br />
      <label htmlFor="language">Language</label> 
      {errors.language &&  <small className=" ">{errors.language}<br /></small>}
    </div>

    <select id="language_level" value={values.language_level} name="language_level"   onChange={handleChange} className="mt-2 border rounded">
          <option  disabled> select a Level</option>
          <option>Fluent</option>
          <option>Native</option>
          <option>Good</option>
          <option>Not bad</option>
      </select>
              <br />
              <br />

        {NewLanguage.map((e,id) =>{
          return <div className="inputBox" key={id}>
          <div className="d-flex align-items-center">
            <input className="" type="text" onChange={e =>inputValue(e,id)}/>
            <img src="/trash.ico" className="text-center"  onClick={() => handleDelete(id)} />

          </div>

            <select id="language_level" value={values.language_level} name="language_level"   onChange={e => handleNewLevel(e,id)} className="mt-2 border rounded">
              <option  disabled> select a Level</option>
                <option>Fluent</option>
                <option>Native</option>
                <option>Good</option>
                <option>Not bad</option>
            </select> 
         
            <br />
            <br />
          </div>
        })}



        <div className="btn btn-light btn-sm my-1" onClick={handleAdd}>+</div> <br />

        <div onClick={showPartFour} className="btn btn-sm btn-outline-light me-5" >Go To Back</div>  
        <div onClick={showPartSex}  className={`btn btn-sm btn-outline-light ${isValid_5 == false ? 'disabled'  : ''}`}>save and Continue </div>
      
    </div>
 
    <div className={`mx-2 ${partSex}`}>
      <div className="inputBox mt-3">
          <input type="email" autoComplete="off"   id="email"   value={values.email} onChange={handleChange}   placeholder=" your Email" /> 
          <label htmlFor="email" >Email Address</label> 
          { <small className=" ">{errors.email}<br /></small>}
      </div>

      <div className="inputBox mt-3">
        <input type="text" autoComplete="off"  id="phone"  value={values.phone} onChange={handleChange}  placeholder="your phone number" />
        <label htmlFor="phone">Phone </label> 
        <small className=" ">{errors.phone}<br /></small>
      </div>
  
      <div className="inputBox mt-3">
          <input type="text" autoComplete="off"  id="address"  value={values.address} onChange={handleChange}  placeholder=" your Address" />
          <label htmlFor="address">Adress</label>  <br />
          <small className=" ">{errors.address}<br /></small>
      </div>
        <div onClick={showPartFive} className="btn btn-sm btn-outline-light me-5" >Go To Back</div>  
        <div onMouseDown={showResult}  className={`btn btn-sm btn-outline-light ${isValid_6 == false ? 'disabled'  : ''}`}>save and Show </div>
    </div>
  </div> 
  </div>
</div>
</>)
}

export default InternForms;