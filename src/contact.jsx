import React,{useState,useEffect,useRef} from 'react';
import emailjs from '@emailjs/browser'
import * as yup from 'yup';
import { Form } from 'formik';
import { useFormik } from 'formik';


const Contact = () =>{

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_26umlrt', 'template_89p0tjf', form.current, 'LW3r27bFaCZINQrEn')
        .then((result) => {
            console.log(result.text);
            console.log('message sent')
        }, (error) => {
            console.log(error.text);
        });
    };
    let schema = yup.object( {
        user_email:yup.string().email('please enter a valid email').required('email is required field *'),
        user_name:yup.string().required('name is required field *'),
      });

      let {values,handleChange,errors,handleSubmit,touched} = useFormik({
        initialValues:{
          user_name:"",
          user_email:"",
          },
          validationSchema:schema,
          sendEmail,
        })
        

    return(
        <>
            <div className="contact-page bg-dark">
                    <div className='icons '>
                        <a  target="_blank" href="https://wa.me/+93749102015" ><img className="mx-3" src="../whatsapp.png" /></a> 
                        <a  target="_blank" href="https://www.github.com/MasihMuhammadi" ><img className="mx-3" src="../github.png" /></a>  
                        <a  target="_blank" href="https://www.instagram.com/ma_3ih.qara___202"><img className="mx-3" src="../instagram.png" /></a>     
                        <a  target="_blank" href="https://www.linkedin.com/in/masihullah-muhammadi-794964257/"><img className="mx-3" src="../linkedin.png" /></a>    
                    </div>
                <div className="contact-form">
                <h1 className=" text-center text-light">Contact Us</h1>
                <p className='text-center text-light'>Got a question? please send me a message &#128140;</p>
               
                <form ref={form} onSubmit={handleSubmit}  className="mt-4">
                <div className='form-group'>
                    <label htmlFor="user_name" className='text-light'>Name*</label><br />
                    <input onChange={handleChange} value={values.name} type="text" id="user_name" name="user_name" className="contact-input" />
                        
                        {errors.name && touched.name && <small className="text-danger">{errors.name}</small>}
                    
                </div>
                <div className='form-group'>
                    <label htmlFor="user_email" className='text-light'>Email Adress*</label><br />
                    <input onChange={handleChange} value={values.email} type="email" id="user_email" name="user_email" className="contact-input" />

                        {errors.email && touched.email && <small className="text-danger">{errors.email}</small>}

                </div>
                <div className='form-group'>
                    <label htmlFor="message" className='text-light'>message*</label><br />
                        <textarea placeholder="we Love you" name="message" className="p-2 w-100" id="message"/>
                </div> 
                <input type="submit" className="btn btn-sm d-block btn-outline-light" value="Send Message"/>

                </form>
                </div>
            </div>
        </>
    )
}

export default Contact;