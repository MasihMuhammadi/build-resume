
import { useFormik } from "formik";
import * as yup from 'yup'

export default allValidation = () =>{

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
      post:yup.string(),
      university:yup.string().required('name is required university *').matches(alphabet,'enter a valid university').min(3).max(9),
      faculty:yup.string().required('faculty is required field *').min(3).max(20),
      degree:yup.string().required('degree is required field *').matches(alphabet,'enter a valid faculty').min(3).max(9),
      language:yup.string().required('language is required field *').matches(alphabet,'please enter a valid language'),
      interests:yup.string().required('interests is required field *'),
      skills:yup.string().required('skill is required field *'),
      DoB:yup.string().required('Date of Birth is required *'),
      project:yup.string().url('enter a valid url'),
    })
    
    let farmikValidate = useFormik({
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
    
}
