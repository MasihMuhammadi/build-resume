import React,{useState,useEffect} from 'react'


const Contact = () =>{
    return(
        <>
            <div className="contact-page">
                <div className="contact-form">
                <h1 className=" text-center text-light">Contact Us</h1>
                <p className='text-center text-light'>Got a question? we'rd love to hear from you. Send us a message and we'll respond as soon possible &#128140;</p>
               
                <form className="mt-2">
                <div className='form-group'>
                    <label htmlFor="name">Name*</label><br />
                        <input type="text" className="contact-input"id="name"/>
                    
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email Adress*</label><br />
                        <input type="email" className="contact-input" id="email" />
                    
                </div>
                <div className='form-group'>
                    <label htmlFor="message" >message*</label><br />
                        <textarea placeholder="we Love you" id="message"/>
                </div> 
                <div className="btn btn-sm d-block btn-outline-light ">Send Message</div>

                </form>

                    <p className="text-center text-light mt-2">also Your can visit me in <span>&#128071;</span></p>
                   <div className='icons text-center'>
                        <a href="#"><img className="mx-3" src="../gmail.png" /></a> 
                        <a href="https://www.wa.whatsapp.me/+93749102014" ><img className="mx-3" src="../whatsapp.png" /></a> 
                        <a href="https://www.github.com/MasihMuhammadi" ><img className="mx-3" src="../github-sign.png" /></a>  
                        <a href="https://www.instagram.com/ma_3ih.qara___202"><img className="mx-3" src="../instagram.png" /></a>     
                   </div>



                
                </div>
            </div>
        </>
    )
}

export default Contact;